/** Page-wide ambient layers: drifting aurora blobs and a faint dot grid. Decorative only. */
const Backdrop = () => (
  <div aria-hidden="true" className="backdrop">
    <span className="backdrop-blob backdrop-blob-a" />
    <span className="backdrop-blob backdrop-blob-b" />
    <span className="backdrop-blob backdrop-blob-c" />
    <span className="backdrop-grid" />
  </div>
);

export default Backdrop;
