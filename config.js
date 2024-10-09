class Config {
    constructor() {

        this.degree = Math.PI / 180  // перевод в градусcы

        // Параметры птицы
        this.birdWidth = 34; // ширина птицы
        this.birdHeight = 26; // высота птицы
        this.birdGravity = 0.04; // гравитация
        this.birdYPosition = 150; // позидиция птици по y
        this.birdXPosition = 50; // позидиция птици по x
   

        // Параметры труб
        this.pipeWidth = 53; // ширина трубы
        this.pipeHeight = 400; // высота трубы
        this.wpipe = this.birdWidth * 2
        this.pipeGap = this.pipeHeight * 0.25; // свободный промежуток в 25% от высоты трубы
        this.pipeGapWidth = this.wpipe * 3; // Расстояние между трубами должно быть шириной 3 труб
        this.pipedx = 2; // скорость движения труб
        this.pipeInterval = Math.floor(this.pipeGapWidth / this.pipedx);// Рассчитываем интервал появления труб на основе скорости и расстояния
        this.birdJumpFactor = this.pipeGap / 2; 
    }
}
