class Furniture {
  constructor(image, label={}) {
    this.image = image;
    this.label = label;

    this.image.width_origin = this.image.width;
    this.image.height_origin = this.image.height;
  }

  draw(x, y) {

    // move to cent on the floor
    this.x = x - this.image.width/2;
    this.y = y - this.image.height;
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
        this.createModal()
      }
    }

  createModal() {
    if (this.label == "planning") {
      swal({
        title: "Plan für die Woche",
        text: "Geschmeidig bleiben!",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      })
    } else if (this.label == "retro") {
      swal({
        title: "Zurückschauen",
        text: "Gemeinsam besser werden",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "sales") {
      swal({
        title: "Money",
        text: "verkaufen",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "creative") {
      swal({
        title: "Kreativ sein",
        text: "alle ist erlaubt",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "review") {
      swal({
        title: "Präsentieren",
        text: "was lernen wir",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "checkin") {
      swal({
        title: "Wer is dabei?",
        text: "was geht",
        // icon: "success",
        buttons: {
          enter: {
            text: "Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: true,
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          // window.open(this.target_link, "_blank");
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("https://www.orf.at")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    }
  }
}
