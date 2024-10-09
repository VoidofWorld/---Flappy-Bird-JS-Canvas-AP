class Bird {
  constructor(config, physicsEngine) {
    this.animation = [
      {sX: 276, sY: 112}, 
      {sX: 276, sY: 139},
      {sX: 276, sY: 164},
      {sX: 276, sY: 139},],
    this.x = config.birdXPosition;
    this.y = config.birdYPosition;
    this.w = config.birdWidth; 
    this.h = config.birdHeight;
    this.radius = 10;  
    this.frame = 0;
    this.rotation = 0;
    this.DEGREE = config.degree;
    this.physics = physicsEngine;
   }

  draw(ctx, sprite, config) {
    let bird = this.animation[this.frame];
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, -this.w / 2, -this.h / 2, this.w, config.pipeGap * 0.2);
    ctx.restore();
  }

  flap() {
    this.physics.flap();
  }

  update(state, cvs, fg, frames, recource) {
    this.period = state.current === state.getReady ? 20 : 15;
    this.frame += frames % this.period === 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;

    // Устанавливаем y на основе физического движка
    this.y = this.physics.y;

    if (state.current === state.getReady) {
        this.rotation = 0 * this.DEGREE; // Вращение при подготовке
    } else {
        this.physics.update(); // Обновление физики (позиции и скорости)

        // Проверка на столкновение с нижней границей
        if (this.y + this.h / 2 >= cvs.height - fg.h) {
            this.y = cvs.height - fg.h - this.h / 2; // Установка на нижнюю границу
            if (state.current === state.game) {
                state.current = state.over; // Установить состояние игры "игра окончена"
                recource.play('die'); // Проиграть звук "смерти"
            }
        }

        // Проверка на столкновение с верхней границей
        if (this.y - this.h / 2 <= 0) {
            this.y = this.h / 2; // Установить на верхнюю границу
        }

        // Логика вращения в зависимости от скорости
        if (this.physics.speed >= this.physics.jump) {
            this.rotation = 90 * this.DEGREE; // Полное вращение вниз
            this.frame = 1; // Установить анимацию падения
        } else {
            this.rotation = -25 * this.DEGREE; // Установить угол для "взлета"
        }
    }
}

  speedReset(config) {
    this.physics.reset(config); 
  }

  
}





