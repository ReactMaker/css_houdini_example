try {
  CSS.paintWorklet.addModule("src/corner-shape.js");
} catch (e) {
  console.error("not support css paint", e);
}