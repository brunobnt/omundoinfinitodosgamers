<script>
	import { base } from '$app/paths';

	export const spriteSheet = base + '/spritesheets/spritesheet-girl.png';
	export let target = { x: 100, y: 500 };
	export let pos = { x: 0, y: 0 };

	let innerHeight;

	const unit = 64;
	const cols = 13;
	const rows = 21;
	const modes = {
		idle: { row: 10, firstFrame: 0, lastFrame: 0 },
		idleLeft: { row: 9, firstFrame: 0, lastFrame: 0 },
		idleRight: { row: 11, firstFrame: 0, lastFrame: 0 },
		idleUp: { row: 8, firstFrame: 0, lastFrame: 0 },
		walkUp: { row: 8, firstFrame: 0, lastFrame: 8 },
		walkDown: { row: 10, firstFrame: 0, lastFrame: 8 },
		walkLeft: { row: 9, firstFrame: 0, lastFrame: 8 },
		walkRight: { row: 11, firstFrame: 0, lastFrame: 8 }
	};

	let mode = 'idle';
	let frameIndex = modes[mode].firstFrame;
	$: frame = {
		x: (cols - frameIndex) * unit,
		y: (rows - modes[mode].row) * unit
	};

	$: distX = target.x - pos.x;
	$: distY = target.y - pos.y;
	$: dist = Math.round(Math.sqrt(distX * distX + distY * distY));

	let fps = 30;
	const minFps = 10;
	const maxFps = 100;
	$: charSpeed = Math.max(2 * dist, 100); // pixels per seccond

	function moveCharacter() {
		let step = 1;

		if (Math.abs(distY) > innerHeight) {
			step = 10;
		}

		//move character position towards target
		if (distY > step) {
			pos.y = pos.y + step;
			mode = 'walkDown';
		} else if (distY < -step) {
			pos.y = pos.y - step;
			mode = 'walkUp';
		} else if (distX > step) {
			pos.x = pos.x + step;
			mode = 'walkRight';
		} else if (distX < -step) {
			pos.x = pos.x - step;
			mode = 'walkLeft';
		} else {
			mode = 'idle';
		}

		pos = pos;
		setTimeout(() => {
			moveCharacter();
		}, 1000 / charSpeed);
	}

	function animate() {
		//animate frames
		frameIndex = frameIndex < modes[mode].lastFrame ? frameIndex + 1 : modes[mode].firstFrame;

		// get fps for next frame
		fps = dist / 20;
		if (fps < minFps) fps = minFps;
		else if (fps > maxFps) fps = maxFps;

		setTimeout(() => {
			animate();
		}, 1000 / fps);
	}

	moveCharacter();
	animate();
</script>

<svelte:window bind:innerHeight />

<div id="sprite-wrapper" style="top: {pos.y - unit}px; left: {pos.x - unit / 2}px;">
	<div id="sprite" style="background: url('{spriteSheet}') {frame.x}px {frame.y}px;" />
</div>

<style>
	#sprite-wrapper {
		left: 0;
		position: absolute;
		top: 0;
	}

	#sprite {
		background-color: aqua;
		height: 64px;
		width: 64px;
	}
</style>
