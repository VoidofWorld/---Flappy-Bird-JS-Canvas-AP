class StartBtn {
    constructor() {
     this.x = 120,
     this.y = 263,
     this.w = 83,
     this.h = 29
      }

    Clicked(clickX, clickY) {
        return (
          clickX >= this.x && clickX <= this.x + this.w &&
          clickY >= this.y && clickY <= this.y + this.h
        );
      }
}