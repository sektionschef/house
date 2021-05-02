// trace, debug, info, warn, error
let SWITCH_LOGGING_LEVEL = "info"
// let SWITCH_LOGGING_LEVEL = "debug";

let canvasWidth = 1400;
let canvasHeight = 900;

let power_icon_image;
let food_court_image;
let living_room_basic_image;
let feli_image;
let fair_image;
let concessions_image;
let checkin_image

let brand_logo;
let living_room;
let fair;

let furnitures;
let room;

let horizon_height;

function preload() {
  // soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  brand_logo = loadImage('images/ambuzzador_logo.png')

  // furnitures
  power_icon_image = loadImage('images/power_icon.svg');
  food_court_image = loadImage('images/food court 1.png');
  living_room_basic_image = loadImage('images/test.png');
  feli_image = loadImage('images/feli.png');
  fair_image = loadImage('images/fair.svg');
  concessions_image = loadImage('images/concessions.svg');
  checkin_image = loadImage('images/checkin.svg');
}

function setup() {
  logging.setLevel(SWITCH_LOGGING_LEVEL);

  createCanvas(canvasWidth, canvasHeight);

  horizon_height = 750;

  resizeRelative(power_icon_image, 15);
  resizeRelative(food_court_image, 11);
  resizeRelative(living_room_basic_image, 3);
  resizeRelative(feli_image, 4);
  resizeRelative(fair_image, 6);
  resizeRelative(brand_logo, 10);
  resizeRelative(concessions_image, 12);
  resizeRelative(checkin_image, 4);

  power_icon_retro = new Furniture(power_icon_image, "retro");
  power_icon_planning = new Furniture(power_icon_image, "planning");
  power_icon_sales = new Furniture(power_icon_image, "sales");
  power_icon_creative = new Furniture(power_icon_image, "creative");
  power_icon_review = new Furniture(power_icon_image, "review");
  power_icon_checkin = new Furniture(power_icon_image, "checkin");

  food_court = new Furniture(food_court_image);
  living_room_basic = new Furniture(living_room_basic_image);
  feli = new Furniture(feli_image);
  fair = new Furniture(fair_image);
  concessions = new Furniture(concessions_image);
  checkin = new Furniture(checkin_image);

  power_icons = new Array(
    power_icon_retro,
    power_icon_planning,
    power_icon_sales,
    power_icon_creative,
    power_icon_review,
    power_icon_checkin,
  );

  furnitures = new Array(feli);
  furnitures = furnitures.concat(power_icons);

  room_planning = new Room(300, 500, "Planning");
  room_retro = new Room(700, 500, "Retro");
  room_review = new Room(300, 700, "Review",);
  room_checkin = new Room(700, 700, "Checkin",);
  room_sales = new Room(1100, 700, "Sales",);
  room_creative = new Room(1100, 200, "Creative",);

  rooms = [
    room_planning,
    room_retro,
    room_review,
    room_checkin,
    room_sales,
    room_creative,
  ]

  // who is active
  room_retro.active = true;
  room_creative.active = true;

  steams = new Steams();
  clouds = new Clouds();
}

function draw() {

  background("#9ed7e2");

  cursor(ARROW);

  push();
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

  clouds.display();
  image(brand_logo, (width/2 - brand_logo.width/2), 50);

  steams.heat(room_creative.get_parallax_middle().x - 180, room_creative.get_parallax_middle().y);
  steams.heat(room_creative.get_parallax_middle().x + 180, room_creative.get_parallax_middle().y);
  steams.heat(room_creative.get_parallax_middle().x - 100, room_creative.get_parallax_middle().y - 30);
  steams.heat(room_creative.get_parallax_middle().x + 100, room_creative.get_parallax_middle().y - 30);

  room_creative.fly();
  for (room of rooms) {
    room.draw();
  }

  // parallax middle line
  let parallax_middle = room_review.get_parallax_middle();
  drawDebugPos(parallax_middle.x, parallax_middle.y, "parallax_middle")

  let parallax_middle_ceiling = room_checkin.get_parallax_middle_ceiling();
  // luster.draw(parallax_middle_ceiling.x, parallax_middle_ceiling.y + luster_image.height);
  drawDebugPos(parallax_middle_ceiling.x, parallax_middle_ceiling.y, "parallax_middle_ceiling")

  // retro
  food_court.draw(700, 590);

  // living room furniture
  living_room_basic.draw(300, 585);


  fair.draw(room_creative.get_parallax_middle().x, room_creative.get_parallax_middle().y - 10);
  // feli.draw(1200, 280);
  concessions.draw(room_sales.floor_middle.x, room_sales.floor_middle.y + 10);
  checkin.draw(room_checkin.floor_middle.x, room_checkin.floor_middle.y + 15);


  power_icon_retro.draw(room_retro.get_parallax_middle().x, room_retro.get_parallax_middle().y - 10);
  power_icon_planning.draw(room_planning.get_parallax_middle().x, room_planning.get_parallax_middle().y - 10);
  power_icon_checkin.draw(room_checkin.get_parallax_middle().x, room_checkin.get_parallax_middle().y - 10);
  power_icon_sales.draw(room_sales.get_parallax_middle().x, room_sales.get_parallax_middle().y - 10);
  power_icon_review.draw(room_review.get_parallax_middle().x, room_review.get_parallax_middle().y - 10);
  power_icon_creative.draw(room_creative.get_parallax_middle().x, room_creative.get_parallax_middle().y - 10);

  drawRoof();


  drawDebugPos(room_creative.big_wall.coordinates.a.x, room_creative.big_wall.coordinates.a.y, "A");
  drawDebugPos(room_creative.big_wall.coordinates.b.x, room_creative.big_wall.coordinates.b.y, "B");
  drawDebugPos(room_creative.big_wall.coordinates.c.x, room_creative.big_wall.coordinates.c.y, "C");
  drawDebugPos(room_creative.big_wall.coordinates.d.x, room_creative.big_wall.coordinates.d.y, "D");

  drawDebugPos(room_creative.small_wall.coordinates.a.x, room_creative.small_wall.coordinates.a.y, "a");
  drawDebugPos(room_creative.small_wall.coordinates.b.x, room_creative.small_wall.coordinates.b.y, "b");
  drawDebugPos(room_creative.small_wall.coordinates.c.x, room_creative.small_wall.coordinates.c.y, "c");
  drawDebugPos(room_creative.small_wall.coordinates.d.x, room_creative.small_wall.coordinates.d.y, "d");


  for (room of rooms) {
    room.drawState();
  }


  for (furniture of furnitures) {
    // furniture.draw(400, 400);
    if (furniture.hover()) {
      cursor(HAND);
    }
  }

}

function mousePressed() {
  // soundtrack.play();
  for (power_icon of power_icons) {
    power_icon.clicked();
  }
  feli.clicked();
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

function resizeRelative(image, factor) {
  image.resize(image.width / factor, image.height / factor);
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
