class PhysicsEngine {
    constructor(config) {
        this.gravity = config.birdGravity; 
        this.jump = (config.pipeGap / 2) * this.gravity;
        this.speed = 0; 
        this.y = config.birdYPosition; 
    }

    flap() {
        this.speed = -this.jump; 
    }

    update() {
        this.speed += this.gravity; 
        this.y += this.speed; 
    }

    reset(config) {
        this.speed = 0; 
        this.y = config.birdYPosition;
    }
}