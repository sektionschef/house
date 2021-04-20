
let canvasWidth = 1400;
let canvasHeight = 900;

let house;
let telephone;
let whiteboard;
let telephone_image;
let whiteboard_image;
let furnitures;
let room;

function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  house = loadImage('images/house_dummy_03.png');
  telephone_image = loadImage('images/telephone.png');
  whiteboard_image = loadImage('images/whiteboard.png');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  telephone = new Furniture(600, 650, telephone_image, 50, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');
  whiteboard = new Furniture(550, 450, whiteboard_image, 4, "https://miro.com/app/board/o9J_ktEzqBk=/");

  furnitures = [telephone, whiteboard]

  room_review = new Room(600, 400);
  room_planning = new Room(1000, 400);
}

function draw() {

  background("#ffd223");
  image(house, (width/2 - house.width/2), (height - house.height));

  cursor(ARROW);

  room_review.draw();
  room_planning.draw();

  for (furniture of furnitures) {
    furniture.draw();
    if (furniture.hover()) {
      cursor(HAND);
    }
  }



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
