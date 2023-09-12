<script>
	import { base } from '$app/paths';

	export const spriteSheet = base + '/spritesheets/loot.png';
	export let open = false;

	let width = 200;
	let height = 200;

	let shake = false;

	const openChest = () => {
		open = true;
	};

	setInterval(() => {
		if (Math.random() > 0.9) {
			shake = true;
			setTimeout(() => {
				shake = false;
			}, 100);
		}
	}, Math.random() * 1000 + 1000);
</script>

<button
	id="chest"
	class={open ? 'open-chest' : shake ? 'shake-chest' : ''}
	style="background: url('{spriteSheet}') 0px 0px; 
            background-size: {2 * width}px {height}px;
            height: {width}px;"
	on:mouseenter={openChest}
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	{#if open}
		<div class="content">
			<slot />
		</div>
	{/if}
</button>

<style>
	@keyframes open-chest-frames {
		90% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 0%;
		}
	}

	@keyframes shake-chest-frames {
		0%,
		20%,
		40%,
		60%,
		80% {
			transform: rotate(-5deg);
		}
		10%,
		30%,
		50%,
		70%,
		90% {
			transform: rotate(5deg);
		}
	}

	@keyframes show-content-frames {
		90% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	button {
		align-items: center;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	.content {
		align-items: center;
		animation: show-content-frames 500ms forwards;
		color: var(--color-black);
		display: flex;
		font-family: 'Overpass Mono', monospace;
		font-weight: 700;
		height: 40%;
		justify-content: center;
		line-height: 150%;
		margin-top: 10%;
		text-align: center;
		text-transform: uppercase;
		opacity: 0;
		width: 60%;
	}

	.open-chest {
		animation: shake-chest-frames 500ms linear, open-chest-frames 400ms steps(1) forwards;
	}

	.shake-chest {
		animation: shake-chest-frames 500ms infinite;
	}

	@media only screen and (max-width: 768px) {
		.content {
			font-size: 0.5rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.content {
			font-size: 0.75rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		.content {
			font-size: 0.875rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		.content {
			font-size: 0.875rem;
		}
	}
</style>
