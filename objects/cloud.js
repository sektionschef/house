class Cloud {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height / 2);
  }

  display() {
    push();
    noStroke();
    fill("#bbe3eb"); 50, 50
    ellipse(this.x, this.y, 60, 50);
    ellipse(this.x + 30, this.y - 10, 60, 50);
    ellipse(this.x + 80, this.y, 60, 50);
    ellipse(this.x + 20, this.y +20, 60, 50);
    ellipse(this.x + 60, this.y + 15, 60, 50);
    pop();
  }

  move() {
    this.x = this.x += 0.3 ;
    this.y = this.y + random(-0.2, 0.2);

    if(this.x >= width){
      this.x = 0;
    }
  }
}

class Clouds {
  constructor() {
    this.list = [];
    this. amount = 6;
    for (var i = 0; i < this.amount; i++) {
      this.list[i] = new Cloud();
    }
  }

  display() {
  for (var i = 0; i < this.list.length; i++) {
    this.list[i].move();
    this.list[i].display();}
  }
}
