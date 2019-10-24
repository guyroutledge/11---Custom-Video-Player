class VideoPlayer {
	player = document.querySelector( '.player' );
	video = document.querySelector( '.viewer' );
	progress = document.querySelector( '.progress' );
	progressBar = document.querySelector( '.progress__filled' );
	toggle = document.querySelector( '.toggle' );
	skipButtons = document.querySelectorAll( '.skip' );
	ranges = document.querySelectorAll( '.player__slider' );
	fullScreen = document.querySelector( '.fullscreen' );
	mouseDown = false;

	togglePlay = () => {
		this.video.paused ? this.video.play() : this.video.pause();
	}
	toggleIcon = () => {
		this.toggle.textContent = this.video.paused ? '►' : '||';
	}
	skip = e => {
		const amount = parseFloat( e.target.dataset.skip );
		this.video.currentTime += amount;
	}
	handleRangeUpdate = e => {
		const controlType = e.target.name;
		this.video[controlType] = e.target.value;
	}
	handleProgress = () => {
		const { video, progressBar } = this;
		const progress = ( video.currentTime / video.duration ) * 100;
		progressBar.style.flexBasis = progress + '%';
	}
	scrub = e => {
		const { video } = this;
		const percentage = ( e.offsetX / video.clientWidth);
		video.currentTime = video.duration * percentage
	}
	toggleFullScreen = () => {
		const { video } = this;
		if ( video.requestFullScreen ) {
			video.requestFullScreen();
		} else if ( video.mozRequestFullScreen ) {
			video.mozRequestFullScreen();
		} else if ( video.webkitRequestFullScreen ) {
			video.webkitRequestFullScreen();
		} else if ( video.msRequestFullScreen ) {
			video.msRequestFullScreen();
		}
	}
	init() {
		const {
			video,
			skipButtons,
			fullScreen,
			progress,
			ranges,
			togglePlay,
			toggleIcon,
			skip,
			handleRangeUpdate,
			handleProgress,
			scrub,
			toggleFullScreen
		} = this;
		let { mouseDown } = this;

		video.addEventListener( 'click', togglePlay );
		video.addEventListener( 'play', toggleIcon );
		video.addEventListener( 'pause', toggleIcon );
		video.addEventListener( 'timeupdate', handleProgress );

		progress.addEventListener( 'click', scrub );
		progress.addEventListener( 'mousedown', () => mouseDown = true );
		progress.addEventListener( 'mouseup', () => mouseDown = false );
		progress.addEventListener( 'mousemove', e => mouseDown && scrub( e ) );

		fullScreen.addEventListener( 'click', toggleFullScreen );

		skipButtons.forEach( button => button.addEventListener( 'click', skip ) );
		ranges.forEach( range => range.addEventListener( 'change', handleRangeUpdate ) );
	}
}
const videoPlayer = new VideoPlayer();
videoPlayer.init();