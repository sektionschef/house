
let canvasWidth = 1000;
let canvasHeight = 800;

let house;
let telephone;
let whiteboard;
let telephone_image;
let whiteboard_image;

function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  house = loadImage('images/house_dummy.jpg');
  telephone_image = loadImage('images/telephone.png');
  whiteboard_image = loadImage('images/whiteboard.png');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  telephone = new Furniture(50, 50, telephone_image, 30, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');
  whiteboard = new Furniture(250, 250, whiteboard_image, 4, "https://orf.at");
}

function draw() {

  background("red");
  image(house, (width/2 - house.width/2), (height - house.height));

  telephone.draw();
  whiteboard.draw();


  // text
  // fill("#7b3705");
  // textSize(26);
  // let s = 'Summersdorf Office';
  // // fill(50);
  // text(s, 100, 100, 300, 200); // Text wraps within text box

}

function mousePressed() {
  // soundtrack.play();
  telephone.clicked();
  whiteboard.clicked();
}
