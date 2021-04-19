class Room {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.parallax_shift = 20;

    this.small_wall = {
      "width": 150,
      "height": 80,
    }

    this.small_wall.x = width/2 - this.small_wall.width/2
    this.small_wall.y = height/2 - this.small_wall.height/2

    this.big_wall = {
      "width": 240,
      "height": 120,
    }

    this.big_wall.x = width/2 - this.big_wall.width/2
    this.big_wall.y = height/2 - this.big_wall.height/2

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
    this.parallax_x = map(mouseX, 0, width, (width/2 - this.big_wall.width/2) - this.parallax_shift, (width/2 - this.big_wall.width/2) + this.parallax_shift);
    this.parallax_y = map(mouseY, 0, height, (height/2 - this.big_wall.height/2) - this.parallax_shift, (height/2 - this.big_wall.height/2) + this.parallax_shift);

    this.big_wall.coordinates = {
      "a": {"x": this.parallax_x, "y": this.parallax_y},
      "b": {"x": this.parallax_x + this.big_wall.width, "y": this.parallax_y},
      "c": {"x": this.parallax_x + this.big_wall.width, "y": this.parallax_y + this.big_wall.height},
      "d": {"x": this.parallax_x, "y": this.parallax_y + this.big_wall.height}
    }

    // console.log(mouseX);
    // console.log(this.parallax_x);
  }

  draw() {

    this.update_parallax();

    fill(143, 199, 227);
    this.drawWall(this.big_wall.coordinates);
    fill(242);
    this.drawWall(this.small_wall.coordinates);

    stroke(126);
    line(this.big_wall.coordinates.a.x, this.big_wall.coordinates.a.y, this.small_wall.coordinates.a.x, this.small_wall.coordinates.a.y);
    line(this.big_wall.coordinates.b.x, this.big_wall.coordinates.b.y, this.small_wall.coordinates.b.x, this.small_wall.coordinates.b.y);
    line(this.big_wall.coordinates.c.x, this.big_wall.coordinates.c.y, this.small_wall.coordinates.c.x, this.small_wall.coordinates.c.y);
    line(this.big_wall.coordinates.d.x, this.big_wall.coordinates.d.y, this.small_wall.coordinates.d.x, this.small_wall.coordinates.d.y);
  }
}