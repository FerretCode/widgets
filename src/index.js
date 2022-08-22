const { Widget } = require("./factory");

const Hello = new Widget({
  x: 2560 / 2 - 250,
  y: 1440 / 2,
  sizeX: 200,
  sizeY: 200,
  borderColor: "red",
  bgColor: "blue"
})
  .initializeWidget()
  .addLabel("uh", 24, 400, "Center")
  .startWidget();

const Hello2 = new Widget({ x: 2560 / 2, y: 1440 / 2, sizeX: 200, sizeY: 200 })
  .initializeWidget()
  .addLabel("uh", 24, 400, "Center")
  .addButton("hi", () => { console.log("HI!") })
  .startWidget();

const Hello3 = new Widget({
  x: 2560 / 2 + 250,
  y: 1440 / 2,
  sizeX: 200,
  sizeY: 200,
})
  .initializeWidget()
  .addLabel("uh", 24, 400, "Center")
  .startWidget();
