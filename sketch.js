
let canvasWidth = 1000;
let canvasHeight = 800;

let house;
let tv;


function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  house = loadImage('images/house_dummy.jpg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  tv = new Furniture(50, 50);
}

function draw() {

  background("red");

  tv.draw();

  image(house, (width/2 - house.width/2), (height - house.height));

  // text
  // fill("#7b3705");
  // textSize(26);
  // let s = 'Summersdorf Office';
  // // fill(50);
  // text(s, 100, 100, 300, 200); // Text wraps within text box

}

function mousePressed() {
  // soundtrack.play();
  tv.clicked();
}
