<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	import Lettering from '$lib/assets/images/lettering-cover4.png';
	import Character0 from '$lib/assets/images/cover4-character0.png';
	import Character1 from '$lib/assets/images/cover4-character1.png';
	import Character2 from '$lib/assets/images/cover4-character2.png';
	import Character3 from '$lib/assets/images/cover4-character3.png';

	let innerWidth = 0;
	let innerHeight = 0;

	$: aspectRatioClass = innerWidth > innerHeight ? 'landscape' : 'portrait';

	const dispatch = createEventDispatcher();
	let selectedColor = 0;
	const colorList = [0, 1, 2, 3];
	const characterList = [Character0, Character1, Character2, Character3];

	function sendClick(e) {
		e.stopPropagation();
		dispatch('click', e);
	}

	function start(e) {
		e.stopPropagation();
		dispatch('start', e);
	}

	const selectColor = (i) => {
		if (i) selectedColor = i;
		else selectedColor++;

		if (selectedColor >= colorList.length) selectedColor = 0;

		clearTimeout(colorInterval);
		colorInterval = setTimeout(() => {
			selectColor();
		}, 3000);
	};

	let colorInterval = setTimeout(() => {
		selectColor();
	}, 3000);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="background" role="button" tabindex="0" on:click={sendClick} on:keydown={sendClick} />
<div id="content" class={aspectRatioClass}>
	<img
		id="game-logo"
		class={aspectRatioClass}
		src={Lettering}
		alt="O Mundo Infinito dos Gamers"
		transition:fade={{ duration: 200 }}
	/>
	{#key selectedColor}
		<img
			id="character"
			class={aspectRatioClass}
			src={characterList[selectedColor]}
			alt=""
			in:fade={{ duration: 1500 }}
			out:fade={{ delay: 1500 }}
		/>
	{/key}
	<div id="color-selector" class={aspectRatioClass}>
		{#each colorList as color}
			<button
				id={'color' + color}
				class="color-button {selectedColor == color ? 'selected' : ''}"
				on:mouseenter={() => selectColor(color)}
				on:mousedown={() => selectColor(color)}
			/>
		{/each}
	</div>
	<div id="overlay">
		<div id="subtitle">
			<div id="" class="" />
			<h3>Um estudo sobre o consumidor de games no Brasil</h3>
			<p>
				Mergulhe na complexidade desse universo, conheça os perfis de gamers e entenda como marcas
				podem ser mais relevantes
			</p>
			<button id="start-button" on:click={start} transition:fade={{ duration: 200 }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 148 148"
					fill="none"
				>
					<g filter="url(#filter0_d_968_20910)">
						<rect
							x="28"
							y="110"
							width="92"
							height="92"
							rx="46"
							transform="rotate(-90 28 110)"
							fill="url(#paint0_linear_968_20910)"
						/>
					</g>
					<g filter="url(#filter1_i_968_20910)">
						<path
							d="M65.923 43.2474C63.2573 41.7859 60 43.7148 60 46.7549V80.3967C60 83.4367 63.2573 85.3656 65.923 83.9041L96.6028 67.0832C99.3721 65.5648 99.3721 61.5867 96.6028 60.0683L65.923 43.2474Z"
							fill="#8739C0"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_968_20910"
							x="0"
							y="0"
							width="148"
							height="148"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="10" />
							<feGaussianBlur stdDeviation="14" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_968_20910"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_968_20910"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_i_968_20910"
							x="60"
							y="42.749"
							width="38.6797"
							height="45.6533"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
							<feBlend mode="normal" in2="shape" result="effect1_innerShadow_968_20910" />
						</filter>
						<linearGradient
							id="paint0_linear_968_20910"
							x1="74"
							y1="110"
							x2="74"
							y2="202"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FAEEFF" />
							<stop offset="1" stop-color="#EBC0FF" />
						</linearGradient>
					</defs>
				</svg>
			</button>
		</div>
		<div id="footer">
			<p>Realização</p>
			<a href="http://talkdigital.co" target="_blank">LIVE + TALK </a>
			<hr />
			<a id="design-by" href="http://odd.studio" target="_blank"> Design por Odd.Studio</a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&display=swap');

	@keyframes logo_frames {
		0%,
		100% {
			animation-timing-function: ease-in-out;
			transform: scale(100%);
		}

		50% {
			animation-timing-function: ease-in-out;
			transform: scale(102%);
		}
	}

	hr {
		width: 100%;
		border: 0.18rem solid #6400a0;
		margin: 0.5rem 0 0.5rem 0;
	}

	#background {
		background: radial-gradient(
				43.67% 44.38% at 58.06% 50%,
				rgba(197, 197, 197, 0) 0%,
				rgba(77, 72, 109, 0.5) 100%
			),
			radial-gradient(405.16% 128.19% at 122.92% 50%, rgba(83, 39, 195, 0.31) 0%, #9409ff 100%);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	#content {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		max-height: 100svh;
		max-width: 100vw;
		pointer-events: none;
		position: absolute;
		width: 100%;
	}

	#content.portrait {
		justify-content: flex-start;
	}

	#game-logo {
		animation: logo_frames 5s linear infinite;
		max-width: 100%;
		width: 50rem;
	}

	#game-logo.landscape {
		align-self: start;
	}

	#color-selector {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		max-width: 30rem;
		padding: 2rem;
		width: 100%;
	}

	#color0 {
		background: linear-gradient(180deg, #4c756a 0%, #61caae 100%);
	}

	#color1 {
		background: linear-gradient(180deg, #fecf2c 0%, #ffecad 100%);
	}

	#color2 {
		background: linear-gradient(90deg, #c24ab4 0%, #ff80f6 100%);
	}

	#color3 {
		background: linear-gradient(180deg, #43acce 0%, #aeeeff 100%);
	}

	#character {
		bottom: 0;
		height: 100%;
		max-height: 75%;
		max-width: 70rem;
		object-fit: contain;
		object-position: 50% 100%;
		position: absolute;
		width: 200%;
	}

	#character.landscape {
		max-height: 100%;
		right: 0;
	}

	#overlay {
		align-items: flex-end;
		color: #fff;
		bottom: 0;
		display: flex;
		flex-direction: row;
		font-family: 'Harmattan', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 100%;
		justify-content: space-between;
		left: 0;
		position: absolute;
		width: 100%;
	}

	#subtitle {
		background: #944ecb;
		border: 10px solid #6400a0;
		border-left: 0;
		border-bottom: 0;
		border-radius: 0rem 5.5rem 0rem 0rem;
		font-size: 1rem;
		line-height: 100%;
		max-width: 60%;
		padding: 2rem;
		position: relative;
		width: 20rem;
	}

	#subtitle h3 {
		font-size: 1.2rem;
		font-weight: 700;
		line-height: 86%;
		margin-bottom: 1rem;
	}

	#start-button {
		aspect-ratio: 1;
		pointer-events: all;
		position: absolute;
		right: -3rem;
		top: 1rem;
		width: 5rem;
	}

	#footer {
		font-size: min(2.5rem, 7vw);
		font-weight: 700;
		line-height: 85%;
		padding: min(2rem, 4vw);
		pointer-events: all;
		text-align: right;
		white-space: nowrap;
		width: min-content;
	}

	#footer p {
		font-weight: 400;
	}

	#design-by {
		font-size: min(1.5rem, 4vw);
		font-weight: 400;
	}

	.color-button {
		aspect-ratio: 1;
		background: linear-gradient(180deg, #616161 0%, #d1d2d2 100%);
		border: 0.4rem solid #6400a0;
		border-radius: 50%;
		max-width: 5rem;
		opacity: 0.8;
		pointer-events: auto;
		transform: rotate(-90deg);
		transition: box-shadow 0.2s ease-in-out;
		width: 15vw;
	}

	.color-button.selected {
		box-shadow: 0px 0px 20px 10px #fff;
	}

	@media only screen and (min-width: 768px) {
		#subtitle {
			font-size: 1.2rem;
			line-height: 100%;
		}

		#subtitle h3 {
			font-size: 1.6rem;
			line-height: 86%;
		}
	}
</style>
