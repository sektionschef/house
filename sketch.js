// trace, debug, info, warn, error
// let SWITCH_LOGGING_LEVEL = "info"
let SWITCH_LOGGING_LEVEL = "debug";

let canvasWidth = 1400;
let canvasHeight = 900;

let brand_logo;
// let house;
let telephone;
let telephone_retro;
let whiteboard;

let telephone_image;
let whiteboard_image;
let stairs_image;
let luster_image;
let pizza_island_image;

let furnitures;
let room;

let horizon_height;

function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  brand_logo = loadImage('images/ambuzzador_logo.png')
  // house = loadImage('images/house_dummy_03.png');

  // furnitures
  telephone_image = loadImage('images/telephone.png');
  whiteboard_image = loadImage('images/whiteboard.png');
  stairs_image = loadImage('images/stairs.png');
  luster_image = loadImage('images/luster.png');
  pizza_island_image = loadImage('images/pizza_island.png');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  createCanvas(canvasWidth, canvasHeight);

  //  resizing images
  telephone_image.resize(telephone_image.width / 50, telephone_image.height / 50);
  whiteboard_image.resize(whiteboard_image.width / 4, whiteboard_image.height / 4);
  stairs_image.resize(stairs_image.width / 8, stairs_image.height / 8);
  luster_image.resize(luster_image.width / 14, luster_image.height / 14);
  pizza_island_image.resize(pizza_island_image.width / 4, pizza_island_image.height / 4);

  horizon_height = 750;

  brand_logo.resize(brand_logo.width / 10, brand_logo.height / 10);

  telephone = new Furniture(600, 650, telephone_image, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');
  whiteboard = new Furniture(550, 450, whiteboard_image, "https://miro.com/app/board/o9J_ktEzqBk=/");
  stairs = new Furniture(300, 300, stairs_image, "oida");
  luster = new Furniture(400, 400, luster_image, "oida");
  pizza_island = new Furniture(800, 600, pizza_island_image, "oida");
  telephone_retro = new Furniture(30, 30, telephone_image, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');

  furnitures = [telephone, whiteboard, telephone_retro]

  room_planning = new Room(300, 500, "Planning");
  room_retro = new Room(700, 500, "Retro");
  room_review = new Room(300, 700, "Review");
  room_checkin = new Room(700, 700, "Checkin");
  room_sales = new Room(1100, 700, "Sales");

  room_creative = new Room(1100, 200, "Creative");
}

function draw() {

  background("#ffd223");
  image(brand_logo, (width/2 - brand_logo.width/2), 50);
  // image(house, (width/2 - house.width/2), (height - house.height));

  cursor(ARROW);

  push();
  // line(0, horizon_height, width, horizon_height);
  noStroke();
  fill("#e6c84e")
  rect(0, horizon_height, width, horizon_height);
  pop();

  room_review.draw();
  room_planning.draw();

  room_checkin.draw();
  room_retro.draw();
  room_sales.draw();

  room_creative.draw();

  // parallax middle line
  let parallax_middle = room_review.get_parallax_middle();
  telephone.draw(parallax_middle.x, parallax_middle.y);
  whiteboard.draw(parallax_middle.x, parallax_middle.y);
  drawDebugPos(parallax_middle.x, parallax_middle.y, "parallax_middle")

  stairs.draw(room_checkin.small_wall.x + room_checkin.small_wall.width/2, room_checkin.small_wall.y + room_checkin.small_wall.height + 5);
  let parallax_middle_ceiling = room_checkin.get_parallax_middle_ceiling();
  // luster.draw(room_checkin.small_wall.x + room_checkin.small_wall.width/2, room_checkin.small_wall.y + luster_image.height);
  luster.draw(parallax_middle_ceiling.x, parallax_middle_ceiling.y + luster_image.height);
  // circle(parallax_middle_ceiling.x, parallax_middle_ceiling.y, 20);
  drawDebugPos(parallax_middle_ceiling.x, parallax_middle_ceiling.y, "parallax_middle_ceiling")

  // retro
  pizza_island.draw(700, 570);
  telephone_retro.draw(room_retro.get_parallax_middle().x, room_retro.get_parallax_middle().y);
  // telephone_retro.draw(30, 30);

  for (furniture of furnitures) {
    // furniture.draw(400, 400);
    if (furniture.hover()) {
      cursor(HAND);
    }
  }

}

function mousePressed() {
  // soundtrack.play();
  telephone.clicked();
  whiteboard.clicked();
}

function drawDebugPos(x, y, label) {
  if (logging.getLevel() <= 1) {
    // logging.debug(label);
    push();
    fill("red");
    noStroke();
    textSize(9);
    textFont('Helvetica');;
    text(label, x - 10, y + 10, 300, 200); // Text wraps within text box
    circle(x, y, 5);
    pop();
  }
}
