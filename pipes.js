class Pipes {
    constructor( config) {
        this.position = [];
        this.top = { sX: 553, sY: 0 };
        this.bottom = { sX: 502, sY: 0 };
        this.w = config.pipeWidth;
        this.wpipe = config.wpipe;
        this.h = config.pipeHeight; 
        this.gap = config.pipeGap; 
        this.maxYPos = -150;
        this.dx = config.pipedx;
    }

    draw(ctx, sprite) {
        for (let i = 0; i < this.position.length; i++) {
            let p = this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.wpipe , this.h);
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.wpipe, this.h);
        }
    }

    update(state, frames, cvs, bird, score, config, recource) {
        if (state.current !== state.game) return;

        if (frames % config.pipeInterval === 0) {
            this.position.push({
                x: cvs.width,
                y: this.maxYPos * (Math.random() + 1)
            });
        }

        for (let i = 0; i < this.position.length; i++) {
            let p = this.position[i];
            let bottomPipeYPos = p.y + this.h + this.gap;

            
            if (bird.x + bird.radius > p.x && bird.x - bird.radius < this.w &&
                (bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h ||
                    bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h)) {
                state.current = state.over;
                    recource.play('hit');
            }

            p.x -= this.dx;


            if (p.x + this.w <= 0) {
                this.position.shift();
                score.value += 1;
                recource.play('score');
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }
        }
    }

    reset() {
        this.position = [];
    }
}