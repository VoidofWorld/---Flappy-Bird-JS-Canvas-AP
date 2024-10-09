class Resources {
    sounds = {
        flap: new Audio("audio/sfx_flap.wav"),
        hit: new Audio("audio/sfx_hit.wav"),
        score: new Audio("audio/sfx_point.wav"),
        die: new Audio("audio/sfx_die.wav"),
        swooshing: new Audio("audio/sfx_swooshing.wav")
    };
    
    play(sound) {
        if (this.sounds[sound]) {
            this.sounds[sound].currentTime = 0;
            this.sounds[sound].play();
        } else {
            console.error(`Sound ${sound} not found`);
        }
    }
}
