class VideoPlayer {
	player = document.querySelector( '.player' );
	video = document.querySelector( '.viewer' );
	progress = document.querySelector( '.progress' );
	progressBar = document.querySelector( '.progress__filled' );
	toggle = document.querySelector( '.toggle' );
	skipButtons = document.querySelectorAll( '.skip' );
	ranges = document.querySelectorAll( '.player__slider' );

	togglePlay = () => {
		this.video.paused ? this.video.play() : this.video.pause();
	}
	init() {
		this.video.addEventListener( 'click', this.togglePlay );
		this.toggle.addEventListener( 'click', this.togglePlay );
	}
}
const videoPlayer = new VideoPlayer();
videoPlayer.init();