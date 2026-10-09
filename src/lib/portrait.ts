// Drop a photo at src/assets/headshot.(jpg|jpeg|png|webp) and the hero picks it up.
// With no file present the hero renders without a portrait.
const found = import.meta.glob<string>("../assets/headshot.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export const portraitSrc: string | undefined = Object.values(found)[0];
