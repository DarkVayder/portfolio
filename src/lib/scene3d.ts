// The hero's WebGL scene. Imported lazily by HeroScene.tsx, so three.js never touches the
// prerender or the first paint. Named imports keep the bundle to what the scene uses.
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  EdgesGeometry,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderer,
} from "three";

export type SceneColors = { signal: string; muted: string };

export type SceneHandle = {
  setRunning: (running: boolean) => void;
  setColors: (colors: SceneColors) => void;
  dispose: () => void;
};

type Options = SceneColors & { lowPower: boolean };

export const createHeroScene = (canvas: HTMLCanvasElement, host: HTMLElement, options: Options): SceneHandle => {
  const { lowPower } = options;

  const renderer = new WebGLRenderer({ canvas, antialias: !lowPower, alpha: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 80);
  camera.position.set(0, 0, 10);

  const signal = new Color(options.signal);
  const muted = new Color(options.muted);

  // Everything that orbits the portrait lives in one group, so it can be moved as a unit.
  const core = new Group();
  scene.add(core);

  const shellGeometry = new IcosahedronGeometry(2.7, 1);
  const shellMaterial = new LineBasicMaterial({ color: signal, transparent: true, opacity: 0.5 });
  const shell = new LineSegments(new EdgesGeometry(shellGeometry), shellMaterial);
  core.add(shell);

  const vertexMaterial = new PointsMaterial({
    color: signal,
    size: 0.07,
    transparent: true,
    opacity: 0.95,
    blending: AdditiveBlending,
    depthWrite: false,
  });
  const vertices = new Points(shellGeometry, vertexMaterial);
  core.add(vertices);

  const innerGeometry = new IcosahedronGeometry(1.55, 0);
  const innerMaterial = new MeshBasicMaterial({ color: signal, wireframe: true, transparent: true, opacity: 0.32 });
  const inner = new Mesh(innerGeometry, innerMaterial);
  core.add(inner);

  const ringMaterial = new MeshBasicMaterial({ color: signal, transparent: true, opacity: 0.55 });
  const satelliteMaterial = new MeshBasicMaterial({ color: signal });
  const satelliteGeometry = new SphereGeometry(0.09, 16, 16);

  const makeRing = (radius: number, tiltX: number, tiltZ: number, speed: number) => {
    const pivot = new Group();
    pivot.rotation.set(tiltX, 0, tiltZ);
    const ring = new Mesh(new TorusGeometry(radius, 0.012, 8, 180), ringMaterial);
    ring.rotation.x = Math.PI / 2;
    pivot.add(ring);
    const satellite = new Mesh(satelliteGeometry, satelliteMaterial);
    pivot.add(satellite);
    core.add(pivot);
    return { pivot, satellite, radius, speed, ring };
  };

  const rings = [makeRing(3.3, 0.35, 0.25, 0.55), makeRing(4.1, -0.7, -0.35, -0.38)];

  // Background dust: cheap depth cue and a little life behind the text.
  const dustCount = lowPower ? 260 : 620;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) {
    dustPositions[i * 3] = MathUtils.randFloatSpread(30);
    dustPositions[i * 3 + 1] = MathUtils.randFloatSpread(18);
    dustPositions[i * 3 + 2] = MathUtils.randFloatSpread(20) - 4;
  }
  const dustGeometry = new BufferGeometry();
  dustGeometry.setAttribute("position", new BufferAttribute(dustPositions, 3));
  const dustMaterial = new PointsMaterial({ color: muted, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false });
  const dust = new Points(dustGeometry, dustMaterial);
  scene.add(dust);

  // Pointer and scroll targets, eased every frame.
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let scrollProgress = 0;
  let width = 1;
  let height = 1;

  // The camera sees VIEW_HEIGHT world units at the z=0 plane, whatever the canvas size.
  const VIEW_HEIGHT = 2 * camera.position.z * Math.tan(MathUtils.degToRad(camera.fov / 2));
  const anchor = host.parentElement?.querySelector<HTMLElement>(".portrait3d") ?? null;
  const OUTER_RADIUS = 4.1; // outermost ring, in world units at scale 1

  // Centre the whole assembly on the portrait and size it relative to the portrait,
  // so it lines up at every breakpoint instead of relying on guessed coordinates.
  const layout = () => {
    width = Math.max(host.clientWidth, 1);
    height = Math.max(host.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const unitsPerPixel = VIEW_HEIGHT / height;
    const box = anchor?.getBoundingClientRect();
    if (box && box.width > 0) {
      const hostBox = host.getBoundingClientRect();
      const dx = box.left + box.width / 2 - (hostBox.left + width / 2);
      const dy = box.top + box.height / 2 - (hostBox.top + height / 2);
      core.position.set(dx * unitsPerPixel, -dy * unitsPerPixel, 0);
      core.scale.setScalar((box.width * 0.5 * 1.85 * unitsPerPixel) / OUTER_RADIUS);
    } else {
      core.position.set(width >= 1024 ? 3.9 : 0, 0.1, 0);
      core.scale.setScalar(0.7);
    }
  };
  layout();

  const resizeObserver = new ResizeObserver(layout);
  resizeObserver.observe(host);
  if (anchor) resizeObserver.observe(anchor);
  window.addEventListener("load", layout);
  // The portrait slides in during the entrance, so re-measure while the page settles.
  let settles = 0;
  const settle = window.setInterval(() => {
    layout();
    settles += 1;
    if (settles >= 12) window.clearInterval(settle);
  }, 500);

  const onPointerMove = (event: PointerEvent) => {
    pointer.tx = (event.clientX / window.innerWidth - 0.5) * 2;
    pointer.ty = (event.clientY / window.innerHeight - 0.5) * 2;
  };
  const onScroll = () => {
    scrollProgress = MathUtils.clamp(window.scrollY / Math.max(height, 1), 0, 1);
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  let frame = 0;
  let running = false;
  let last = performance.now();
  let time = 0;

  const tick = (now: number) => {
    frame = requestAnimationFrame(tick);
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += delta;

    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;

    core.rotation.y = time * 0.18 + pointer.x * 0.6 + scrollProgress * 1.4;
    core.rotation.x = Math.sin(time * 0.3) * 0.12 + pointer.y * 0.35 + scrollProgress * 0.6;
    inner.rotation.y = -time * 0.5;
    inner.rotation.x = time * 0.32;

    rings.forEach(({ pivot, satellite, radius, speed }, index) => {
      const angle = time * speed + index * 2.1;
      satellite.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      pivot.rotation.y += delta * speed * 0.15;
    });

    dust.rotation.y = time * 0.012 + pointer.x * 0.05;
    dust.rotation.x = pointer.y * 0.03;

    camera.position.x = pointer.x * 0.5;
    camera.position.y = -pointer.y * 0.35 - scrollProgress * 0.8;
    camera.lookAt(0, 0, 0);

    canvas.style.opacity = String(1 - scrollProgress * 0.85);
    renderer.render(scene, camera);
  };

  const setRunning = (next: boolean) => {
    if (next === running) return;
    running = next;
    if (next) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(frame);
    }
  };

  const setColors = (colors: SceneColors) => {
    signal.set(colors.signal);
    muted.set(colors.muted);
    shellMaterial.color.copy(signal);
    vertexMaterial.color.copy(signal);
    innerMaterial.color.copy(signal);
    ringMaterial.color.copy(signal);
    satelliteMaterial.color.copy(signal);
    dustMaterial.color.copy(muted);
  };

  const dispose = () => {
    setRunning(false);
    resizeObserver.disconnect();
    window.clearInterval(settle);
    window.removeEventListener("load", layout);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("scroll", onScroll);
    shellGeometry.dispose();
    innerGeometry.dispose();
    dustGeometry.dispose();
    satelliteGeometry.dispose();
    rings.forEach(({ ring }) => ring.geometry.dispose());
    [shellMaterial, vertexMaterial, innerMaterial, ringMaterial, satelliteMaterial, dustMaterial].forEach((material) =>
      material.dispose(),
    );
    renderer.dispose();
    renderer.forceContextLoss();
  };

  return { setRunning, setColors, dispose };
};
