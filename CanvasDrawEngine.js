class CanvasDrawEngine {
    constructor(canvasId) {
        this._cvs = document.getElementById(canvasId);
        this.ctx = this._cvs.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = "img/sprite.png"; 
    }

    clear() {
        this.ctx.clearRect(0, 0, this._cvs.width, this._cvs.height); 
    }

    drawBackground(background) {
        background.draw(this.ctx, this.sprite, this._cvs); 
    }

    drawForeground(foreground) {
        foreground.draw(this.ctx, this.sprite); 
    }

    drawPipes(pipes, config) {
        pipes.draw(this.ctx, this.sprite, config); 
    }

    drawBird(bird, config) {
        bird.draw(this.ctx, this.sprite, config); 
    }

    drawMessages(messages, state) {
        messages.messGetReady.draw(this.ctx, this.sprite, state); 
        messages.messGameOver.draw(this.ctx, this.sprite, state); 
    }

    drawScore(score, state) {
        score.draw(this.ctx, state, this._cvs); 
    }

    drawAll(gameObjects, state) {
        this.clear(); 
       
        this.drawBackground(gameObjects.background);
        this.drawPipes(gameObjects.pipes, gameObjects.config);
        this.drawForeground(gameObjects.foreground);
        this.drawBird(gameObjects.bird, gameObjects.config); 
        this.drawMessages(gameObjects.messages, state);
        this.drawScore(gameObjects.score, state);
    }
}