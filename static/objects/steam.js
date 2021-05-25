class Steam {
  constructor(tempX, tempY, tempRadius) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    this.color = color(255, 80);
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(3);
    this.radius = this.radius + 0.4;
  }
}

class Steams {
  constructor(x, y) {
    this.list = [];
    this.steam_amount = 10;
    this.max_radius = 30;
    this.radius = random(2, 10);

    this.x = 0;
    this.y = 0;

    for (let i = 0; i < this.steam_amount; i++) {
      // let b = new Steam(x, y, random(10, 50));
      // steams[i] = b;
      this.list.push(new Steam(this.x, this.y, this.radius));
    }
  }

  heat(x, y) {

    this.x = x;
    this.y = y;

    for (let i = 0; i < this.list.length; i++) {
      this.list[i].show();
      this.list[i].move();

      if( this.list[i].radius > this.max_radius ) {
        this.list.splice(i, 1);
      }
    }
    this.list.push(new Steam(this.x, this.y, this.radius));

  }
}
