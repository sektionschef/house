// trace, debug, info, warn, error
// let SWITCH_LOGGING_LEVEL = "info"
let SWITCH_LOGGING_LEVEL = "debug";

let canvasWidth = 1400;
let canvasHeight = 900;

let power_icon_image;
let whiteboard_image;
let checkin_image;
let luster_image;
let food_court_image;
let menu_image;
let living_room_basic_image;
let feli_image;
let telescope_image;

let brand_logo;
// let house;
let telephone;
let telephone_retro;
let whiteboard;
let menu;
let living_room;


let furnitures;
let room;

let horizon_height;

function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  brand_logo = loadImage('images/ambuzzador_logo.png')
  // house = loadImage('images/house_dummy_03.png');

  // furnitures
  power_icon_image = loadImage('images/power_icon.svg');
  // power_icon_image = loadImage('images/power_icon_amb.svg');
  // whiteboard_image = loadImage('images/whiteboard.png');
  whiteboard_image = loadImage('images/whiteboard_icon.png');
  checkin_image = loadImage('images/checkin.png');
  luster_image = loadImage('images/luster.png');
  food_court_image = loadImage('images/food court 1.png');
  menu_image = loadImage('images/menu.jpg');
  living_room_basic_image = loadImage('images/test.png');
  feli_image = loadImage('images/feli.png');
  telescope_image = loadImage('images/telescope.png');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  createCanvas(canvasWidth, canvasHeight);

  //  resizing images
  power_icon_image.resize(power_icon_image.width / 15, power_icon_image.height / 15);
  whiteboard_image.resize(whiteboard_image.width / 4, whiteboard_image.height / 4);
  checkin_image.resize(checkin_image.width / 27, checkin_image.height / 27);
  luster_image.resize(luster_image.width / 14, luster_image.height / 14);
  food_court_image.resize(food_court_image.width / 11, food_court_image.height / 11);
  menu_image.resize(menu_image.width / 25, menu_image.height / 25);
  living_room_basic_image.resize(living_room_basic_image.width / 3, living_room_basic_image.height / 3);
  feli_image.resize(feli_image.width / 4, feli_image.height / 4);
  telescope_image.resize(telescope_image.width / 40, telescope_image.height / 40);

  horizon_height = 750;

  brand_logo.resize(brand_logo.width / 10, brand_logo.height / 10);

  telephone = new Furniture(600, 650, power_icon_image, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');
  whiteboard = new Furniture(550, 450, whiteboard_image, "https://miro.com/app/board/o9J_ktEzqBk=/");
  checkin = new Furniture(300, 300, checkin_image, "oida");
  luster = new Furniture(400, 400, luster_image, "oida");
  food_court = new Furniture(800, 600, food_court_image, "oida");
  telephone_retro = new Furniture(30, 30, power_icon_image, 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzA4YzdhMDAtMWUwYi00MmExLWEzZWMtMzU4Mjk5ODQ3YTJj%40thread.v2/0?context=%7b%22Tid%22%3a%22452b551c-4057-4e63-a6fe-63641fc132f9%22%2c%22Oid%22%3a%22e79d3def-9ee9-413a-b242-93cfd991115d%22%7d');
  menu = new Furniture(500, 500, menu_image, "https://miro.com/app/board/o9J_lWUKbyE=/");
  living_room_basic = new Furniture(0, 0, living_room_basic_image, "nothing");
  feli = new Furniture(0, 0, feli_image, "https://teams.microsoft.com/_#/conversations/19:1f3c38c5-449e-4242-a151-a893bcd0777a_6ff86881-25df-49da-a9a8-f06abd7d85bc@unq.gbl.spaces?ctx=chat");
  telescope = new Furniture(0, 0, telescope_image, "nothing");

  furnitures = [telephone, whiteboard, telephone_retro, feli, menu]

  room_planning = new Room(300, 500, "Planning", "#fbc579", "#ffddb3");
  room_retro = new Room(700, 500, "Retro", "#ffdc8f", "#fcefc8");
  room_review = new Room(300, 700, "Review", "#8ac5d9", "#cde8f1");
  room_checkin = new Room(700, 700, "Checkin", "#8D88B3", "#ABA7C7");
  room_sales = new Room(1100, 700, "Sales", "#82B758", "#9DC67C");

  room_creative = new Room(1100, 200, "Creative", "#6e7f8f", "#8B98A5");
}

function draw() {

  background("#9ed7e2");
  image(brand_logo, (width/2 - brand_logo.width/2), 50);
  // image(house, (width/2 - house.width/2), (height - house.height));

  cursor(ARROW);

  push();
  // line(0, horizon_height, width, horizon_height);
  noStroke();
  fill("#9dc378")
  rect(0, horizon_height, width, horizon_height);
  pop();

  // sky
  push();
  // sun
  noStroke();
  fill("#fed789");
  // fill("#ffd223");  // amb yellow
  circle(300, 100, 80);
  pop();

  // cloud
  //  move to function
  push();
  noStroke();
  fill("#bbe3eb");
  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
  pop();

  room_review.draw();
  room_planning.draw();

  room_checkin.draw();
  room_retro.draw();
  room_sales.draw();

  room_creative.draw();

  // parallax middle line
  let parallax_middle = room_review.get_parallax_middle();
  drawDebugPos(parallax_middle.x, parallax_middle.y, "parallax_middle")
  telephone.draw(parallax_middle.x, parallax_middle.y);
  whiteboard.draw(parallax_middle.x - 60, parallax_middle.y - 5);
  telescope.draw(parallax_middle.x - 70, parallax_middle.y - 10);

  checkin.draw(room_checkin.small_wall.x + room_checkin.small_wall.width/2, room_checkin.small_wall.y + room_checkin.small_wall.height + 5);
  let parallax_middle_ceiling = room_checkin.get_parallax_middle_ceiling();
  // luster.draw(room_checkin.small_wall.x + room_checkin.small_wall.width/2, room_checkin.small_wall.y + luster_image.height);
  luster.draw(parallax_middle_ceiling.x, parallax_middle_ceiling.y + luster_image.height);
  // circle(parallax_middle_ceiling.x, parallax_middle_ceiling.y, 20);
  drawDebugPos(parallax_middle_ceiling.x, parallax_middle_ceiling.y, "parallax_middle_ceiling")

  // retro
  food_court.draw(700, 590);
  menu.draw(room_retro.get_parallax_middle().x - 110, room_retro.get_parallax_middle().y);
  telephone_retro.draw(room_retro.get_parallax_middle().x, room_retro.get_parallax_middle().y);

  // living room furniture
  living_room_basic.draw(300, 585);
  feli.draw(1200, 280);

  drawRoof();

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
  telephone_retro.clicked();
  whiteboard.clicked();
  feli.clicked();
  menu.clicked();
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

function drawRoof() {
  // ROOF
  // get the roof coords
  let start_roof = {
    x: room_planning.big_wall.coordinates.a.x - room_planning.wall_thickness/2,
    y: room_planning.big_wall.coordinates.a.y - room_planning.wall_thickness/2
  }
  let end_roof = {
    x: room_retro.big_wall.coordinates.b.x + room_retro.wall_thickness/2,
    y: room_retro.big_wall.coordinates.b.y - room_retro.wall_thickness/2
  }
  drawDebugPos(start_roof.x, start_roof.y, "start roof")
  drawDebugPos(end_roof.x, end_roof.y, "end roof")

  let coverWidth = end_roof.x - start_roof.x;
  let coverHeight = 20;
  let cover = {
    a: {x: start_roof.x, y:start_roof.y},
    b: {x: start_roof.x, y: start_roof.y - coverHeight},
    c: {x: start_roof.x + coverWidth, y: start_roof.y - coverHeight},
    d: {x: start_roof.x + coverWidth, y: start_roof.y},
  }

  push();
  // roof
  noStroke();
  fill("#a99a9e");
  quad(
    cover.b.x, cover.b.y,
    cover.c.x, cover.c.y,
    850, 300,
    150, 300
  );
  // cover
  fill("#786364");
  // rect(start_roof.x, start_roof.y, 800, 20);
  quad(
    cover.a.x, cover.a.y,
    cover.b.x, cover.b.y,
    cover.c.x, cover.c.y,
    cover.d.x, cover.d.y,
  );
  pop();
  // chimney
  push();
  noStroke();
  fill(245);
  rect(700, 260, 30, 40);
  fill("#786364");
  rect(695, 250, 40, 10);
  pop();
}
