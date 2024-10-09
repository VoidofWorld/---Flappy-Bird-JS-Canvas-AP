class BackGround {
    constructor(cvs) {
        this.sX = 0
        this.sY = 0
        this.w = 275
        this.h = 226
        this.x = 0
        this.y = cvs.height - 226
    }

    draw(ctx, sprite, cvs){
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}