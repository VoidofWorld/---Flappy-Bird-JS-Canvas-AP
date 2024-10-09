class Game {
  constructor() {
      this.frames = 0;
      this.state = {
          current: 0,
          getReady: 0,
          game: 1,
          over: 2
      };
      this.recource = new Resources();
      this._drawEngine = new CanvasDrawEngine('game');  
      this._config = new Config();
      this._physicsEngine = new PhysicsEngine(this._config);
      this._bird = new Bird(this._config, this._physicsEngine);
      this._pipes = new Pipes(this._config, this._bird);
      this._score = new Score();
      this._backGround = new BackGround(this._drawEngine._cvs);
      this._foreGround = new ForeGround(this._drawEngine._cvs);
      this._mess = {
          messGetReady: new Message(0, 228, 173, 152, this._drawEngine._cvs.width / 2 - 173 / 2, 80, this.state.getReady),
          messGameOver: new Message(175, 228, 225, 202, this._drawEngine._cvs.width / 2 - 225 / 2, 90, this.state.over)
      };
      this.startBtn = new StartBtn(this._drawEngine._cvs.width / 2 - 50, this._drawEngine._cvs.height / 2 - 25, 100, 50, "Start");
  }

  update() {
      this._bird.update(this.state, this._drawEngine._cvs, this._foreGround, this.frames, this.recource);
      this._foreGround.update(this.state);
      this._pipes.update(this.state, this.frames, this._drawEngine._cvs, this._bird, this._score, this._config, this.recource);
  }

  loop() {
      this.update();
      this._drawEngine.drawAll({
          background: this._backGround,
          pipes: this._pipes,
          foreground: this._foreGround,
          bird: this._bird,
          messages: this._mess,
          score: this._score,
          config: this._config
      }, this.state); 
      this.frames++;
      requestAnimationFrame(() => this.loop());
  }

  start() {
      this._drawEngine._cvs.addEventListener('click', (evt) => {
          let rect = this._drawEngine._cvs.getBoundingClientRect();
          let clickX = evt.clientX - rect.left;
          let clickY = evt.clientY - rect.top;

          switch (this.state.current) {
              case this.state.getReady:
                  this.state.current = this.state.game;
                  this.recource.play('swooshing');
                  break;

              case this.state.game:
                  this._bird.flap();
                  this.recource.play('flap');
                  break;

              case this.state.over:
                  if (this.startBtn.Clicked(clickX, clickY)) {
                      this._pipes.reset();
                      this._bird.speedReset(this._config);
                      this._score.reset();
                      this.state.current = this.state.getReady;
                  }
                  break;
          }
      });

      this.loop();
  }
}
  
  const game = new Game();
  game.start();