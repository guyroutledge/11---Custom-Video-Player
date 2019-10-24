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
		// get current click/mouse position
		// calculate distance from left edge of player
		// calculate percentage of player width
		// update video currentTime -> auto update progress
		console.log( e );
	}
	init() {
		const {
			video,
			skipButtons,
			progress,
			ranges,
			togglePlay,
			toggleIcon,
			skip,
			handleRangeUpdate,
			handleProgress,
			scrub
		} = this;

		video.addEventListener( 'click', togglePlay );
		video.addEventListener( 'play', toggleIcon );
		video.addEventListener( 'pause', toggleIcon );
		video.addEventListener( 'timeupdate', handleProgress );

		progress.addEventListener( 'click', scrub );
		progress.addEventListener( 'mousemove', scrub );

		skipButtons.forEach( button => button.addEventListener( 'click', skip ) );
		ranges.forEach( range => range.addEventListener( 'change', handleRangeUpdate ) );
	}
}
const videoPlayer = new VideoPlayer();
videoPlayer.init();