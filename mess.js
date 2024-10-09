class Message {
    constructor(sX, sY, w, h, x, y, stateToShow) {
        this.sX = sX;
        this.sY = sY;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.stateToShow = stateToShow;  
    }

    draw(ctx, sprite, state) {
        if (state.current === this.stateToShow) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}
