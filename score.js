class Score {
    constructor() {
        this.best = parseInt(localStorage.getItem("best")) || 0;
        this.value = 0;
    }

    draw(ctx, state, cvs) {
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";

        if (state.current === state.game) {
            ctx.lineWidth = 2;
            ctx.font = "35px Teko";
            ctx.fillText(this.value, cvs.width / 2, 50);
            ctx.strokeText(this.value, cvs.width / 2, 50);
        } else if (state.current === state.over) {
            ctx.font = "25px Teko";
            ctx.fillText(this.value, 225, 186);
            ctx.strokeText(this.value, 225, 186);

            ctx.fillText(this.best, 225, 228);
            ctx.strokeText(this.best, 225, 228);
        }
    }

    reset() {
        this.value = 0;
    }
}