class Furniture {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.width = 30;
    this.height = 60;
  }

  draw() {
    push();
    fill("#304858");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  clicked() {
    if (mouseX >= this.x && mouseX <= (this.x + this.width) && mouseY >= this.y && mouseY <= (this.y + this.height)) {
      console.log("clicked");
      window.open('http://orf.at')
    }
  }
}
