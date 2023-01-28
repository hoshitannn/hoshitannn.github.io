const ring = new Audio();
ring.src = "ring.mp3";

const ndef = new NDEFReader();
await ndef.scan();

ndef.addEventListener("readingerror", () => {
  ring.play();
});