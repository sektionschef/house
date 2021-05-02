class Room {
  constructor(x, y, title, color_back="#ece9e4", color_walls="#d7d4cf") {
    this.x = x;
    this.y = y;
    this.title = title;
    this.color_back = color_back;
    this.color_walls = color_walls;

    this.wall_thickness = 15;
    this.edge_color = color(245);
    this.cut_wall = color(245);

    // add/subtract for parallax effect
    this.parallax_shift = 10;

    this.small_wall = {
      "width": 300,
      "height": 150,
    }

    this.big_wall = {
      "width": 400,
      "height": 200,
    }

    // position of small wall
    this.small_wall.x = this.x - this.small_wall.width/2
    this.small_wall.y = this.y - this.small_wall.height/2

    // position of big wall
    this.big_wall.x = this.x - this.big_wall.width/2
    this.big_wall.y = this.y - this.big_wall.height/2

    // coordinate of middle
    this.middle_x = this.x;
    this.middle_y = this.y + this.small_wall.height/2 + (this.big_wall.height - this.small_wall.height)/2;
    this.middle_y_ceiling = this.y - this.small_wall.height/2;


    this.small_wall.coordinates = {
      "a": {"x": this.small_wall.x, "y": this.small_wall.y},
      "b": {"x": this.small_wall.x + this.small_wall.width, "y": this.small_wall.y},
      "c": {"x": this.small_wall.x + this.small_wall.width, "y": this.small_wall.y + this.small_wall.height},
      "d": {"x": this.small_wall.x, "y": this.small_wall.y + this.small_wall.height}
    }
  }

  drawWall(wall_object) {
    beginShape();
      vertex(wall_object.a.x, wall_object.a.y);
      vertex(wall_object.b.x, wall_object.b.y);
      vertex(wall_object.c.x, wall_object.c.y);
      vertex(wall_object.d.x, wall_object.d.y);
    endShape(CLOSE);
  }

  update_parallax() {
    this.parallax_x = map(mouseX, 0, width, (this.x - this.big_wall.width/2) - this.parallax_shift, (this.x - this.big_wall.width/2) + this.parallax_shift);
    this.parallax_y = map(mouseY, 0, height, (this.y - this.big_wall.height/2) - this.parallax_shift, (this.y - this.big_wall.height/2) + this.parallax_shift);

    this.big_wall.coordinates = {
      "a": {"x": this.parallax_x, "y": this.parallax_y},
      "b": {"x": this.parallax_x + this.big_wall.width, "y": this.parallax_y},
      "c": {"x": this.parallax_x + this.big_wall.width, "y": this.parallax_y + this.big_wall.height},
      "d": {"x": this.parallax_x, "y": this.parallax_y + this.big_wall.height}
    }

    // console.log(mouseX);
    // console.log(this.parallax_x);
  }

  get_parallax_middle() {
    // middle of the room
    this.parallax_middle_x = map(mouseX, 0, width, this.middle_x - (this.parallax_shift/2), this.middle_x + (this.parallax_shift/2));
    this.parallax_middle_y = map(mouseY, 0, height, this.middle_y - (this.parallax_shift/2), this.middle_y + (this.parallax_shift/2));
    return {"x": this.parallax_middle_x, "y": this.parallax_middle_y}
  }

  get_parallax_middle_ceiling() {
    // middle of the room ceilinge
    this.parallax_middle_x = map(mouseX, 0, width, this.middle_x - (this.parallax_shift/2), this.middle_x + (this.parallax_shift/2));
    this.parallax_middle_y_ceiling = map(mouseY, 0, height, this.middle_y_ceiling - (this.parallax_shift/2), this.middle_y_ceiling + (this.parallax_shift/2));
    return {"x": this.parallax_middle_x, "y": this.parallax_middle_y_ceiling}
  }

  create_room_label() {
    push();
    fill("black");
    noStroke();
    textSize(14);
    textFont('Helvetica');
    // fill(50);
    text(this.title, (this.small_wall.coordinates.a.x + 10), this.small_wall.coordinates.a.y + 10, 300, 200); // Text wraps within text box
    pop();
  }

  draw() {
    this.update_parallax();

    push();
    noStroke();
    fill(this.color_walls);
    this.drawWall(this.big_wall.coordinates);
    pop();

    // lines between corners small and big wall
    push();
    strokeWeight(1);
    stroke(this.edge_color);
    line(this.big_wall.coordinates.a.x, this.big_wall.coordinates.a.y, this.small_wall.coordinates.a.x, this.small_wall.coordinates.a.y);
    line(this.big_wall.coordinates.b.x, this.big_wall.coordinates.b.y, this.small_wall.coordinates.b.x, this.small_wall.coordinates.b.y);
    line(this.big_wall.coordinates.c.x, this.big_wall.coordinates.c.y, this.small_wall.coordinates.c.x, this.small_wall.coordinates.c.y);
    line(this.big_wall.coordinates.d.x, this.big_wall.coordinates.d.y, this.small_wall.coordinates.d.x, this.small_wall.coordinates.d.y);
    pop();

    push();
    fill(this.color_back);
    strokeWeight(1);
    stroke(this.edge_color);
    this.drawWall(this.small_wall.coordinates);
    pop();

    // walls as frames to the big wall
    push();
    strokeWeight(this.wall_thickness);
    stroke(this.cut_wall);
    noFill();
    quad(
      this.big_wall.coordinates.a.x,
      this.big_wall.coordinates.a.y,
      this.big_wall.coordinates.b.x,
      this.big_wall.coordinates.b.y,
      this.big_wall.coordinates.c.x,
      this.big_wall.coordinates.c.y,
      this.big_wall.coordinates.d.x,
      this.big_wall.coordinates.d.y,
    )
    pop();

    this.create_room_label();
  }

  drawInactive() {
    // inactive curtain
    push();
    strokeWeight(this.wall_thickness);
    stroke(this.cut_wall);
    fill(50, 150);
    quad(
      this.big_wall.coordinates.a.x,
      this.big_wall.coordinates.a.y,
      this.big_wall.coordinates.b.x,
      this.big_wall.coordinates.b.y,
      this.big_wall.coordinates.c.x,
      this.big_wall.coordinates.c.y,
      this.big_wall.coordinates.d.x,
      this.big_wall.coordinates.d.y,
    )
    pop();
  }
}
