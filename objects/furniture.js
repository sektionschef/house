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
        title: "Planning",
        text: "Worauf richtest du deinen Fokus in der aktuellen Woche?",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          // whiteboard: true,
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          default:
          // swal("Got away safely!");
        }
      })
    } else if (this.label == "retro") {
      swal({
        title: "Retro",
        text: "Was kรถnnen wir tun, um die Zusammenarbeit leichter zu gestalten?",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "sales") {
      swal({
        title: "Sales",
        text: "Wer will noch mal? Wer hat noch nicht?",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "creative") {
      swal({
        title: "Creative",
        text: "100 Ideen pro Minute.",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          tools: true,
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          case "tools":
          // swal("Gotcha!", "Pikachu was caught!", "success");
          window.open("naked_page.html")
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "review") {
      swal({
        title: "Review",
        text: "Ergebnisse prรคsentieren und Learnings ziehen.",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          default:
          // swal("Got away safely!");
        }
      });
    } else if (this.label == "checkin") {
      swal({
        title: "Checkin",
        text: "Seid ihr alle da?",
        // icon: "success",
        buttons: {
          enter: {
            text: "๐ Call",
            value: "call",
            closeModal: false,
          },
          whiteboard: {
            text: "๐๏ธ Whiteboard",
            value: "whiteboard",
            closeModal: false,
          },
          cancel: "Cancel",
        },
      })
      .then((value) => {
        switch (value) {

          case "call":
          window.open("https://zoom.us/j/97483216005")
          break;

          case "whiteboard":
          window.open("https://miro.com/app/board/o9J_lWUKbyE=/");
          break;

          default:
          // swal("Got away safely!");
        }
      });
    }
  }
}
