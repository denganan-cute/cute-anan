class MusicPlayer {
    constructor() {
        this.isPlaying = false;
        this.volume = 1.0; // Volume ranges from 0.0 to 1.0
        this.audio = new Audio();
        this.audio.loop = false;
        this.audio.addEventListener('ended', () => this.loopSong());
    }
    setSong(url) {
        this.audio.src = url;
    }
    play() {
        this.audio.play();
        this.isPlaying = true;
    }
    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }
    setVolume(value) {
        this.volume = value;
        this.audio.volume = this.volume;
    }
    loopSong() {
        if (this.audio.loop) {
            this.audio.currentTime = 0;
            this.play();
        }
    }
    enableLoop() {
        this.audio.loop = true;
    }
    disableLoop() {
        this.audio.loop = false;
    }
}

// Example usage:
// const player = new MusicPlayer();
// player.setSong('path/to/song.mp3');
// player.play();

export default MusicPlayer;