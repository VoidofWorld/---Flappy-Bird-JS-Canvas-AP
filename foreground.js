class ForeGround{
    constructor(cvs) {
        this.sX = 276
        this.sY = 0
        this.w = 224
        this.h = 112
        this.x = 0
        this.y = cvs.height - 112
        this.dx = 2
    }
    
    draw(ctx, sprite){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }

    update(state){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2)
        }
    }
}