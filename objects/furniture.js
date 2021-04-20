class Furniture {
  constructor(x, y, image, resize_factor, target_link) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.resize_factor = resize_factor;
    this.target_link = target_link;

    this.image.width_origin = this.image.width;
    this.image.height_origin = this.image.height;
    this.image.resize(this.image.width_origin / this.resize_factor, this.image.height_origin / this.resize_factor);

  }

  draw(x, y) {

    // move to cent on the floor
    this.x = x - this.image.width/2;
    this.y = y - this.image.height/2;
    // needs to be called in the loop
    this.if_hover = (mouseX >= this.x && mouseX <= (this.x + this.image.width) && mouseY >= this.y && mouseY <= (this.y + this.image.height))

    image(this.image, this.x, this.y);
  }

  // overall function - loop through all objects
  hover() {
    if (this.if_hover) {
      // cursor(HAND);
      return true;
    } else {
      // cursor(ARROW);
      return false;
    }
  }

  clicked() {
    if (this.if_hover) {
      window.open(this.target_link)
    }
  }
}
