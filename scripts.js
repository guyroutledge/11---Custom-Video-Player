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
	toggleIcon = e => {
		const icon = this.video.paused ? '►' : '||';
		e.target.textContent = icon;
	}
	init() {
		this.video.addEventListener( 'click', this.togglePlay );
		this.toggle.addEventListener( 'click', this.togglePlay );
		this.toggle.addEventListener( 'click', this.toggleIcon );
	}
}
const videoPlayer = new VideoPlayer();
videoPlayer.init();