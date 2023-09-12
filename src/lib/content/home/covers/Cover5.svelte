<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	let innerWidth = 0;
	let innerHeight = 0;

	$: aspectRatioClass = innerWidth > innerHeight ? 'landscape' : 'portrait';

	const dispatch = createEventDispatcher();

	function sendClick(e) {
		e.stopPropagation();
		dispatch('click', e);
	}

	function start(e) {
		e.stopPropagation();
		dispatch('start', e);
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="background" role="button" tabindex="0" on:click={sendClick} on:keydown={sendClick}>
	<div id="middleground" class={aspectRatioClass} />
</div>
<div id="content" class="crt">
	<div class="footer left">
		<a href="http://talkdigital.co" target="_blank">Realização LIVE + TALK </a>
		<hr />
	</div>
	<div class="footer right">
		<a id="design-by" href="http://odd.studio" target="_blank">Design por Odd.Studio</a>
		<hr />
	</div>
	<div id="subtitle">
		<h3>Um estudo sobre o consumidor de games no Brasil</h3>
		<p>
			Mergulhe na complexidade desse universo, conheça os perfis de gamers e entenda como marcas
			podem ser mais relevantes
		</p>
	</div>
	<div id="title">
		<span class="span1">O</span>
		<span class="span2">Mundo</span><br />
		<span class="span3">Infinito</span><br />
		<span class="span4">dos</span>
		<span class="span5">Gamers</span>
	</div>

	<button id="start-button" on:click={start} transition:fade={{ duration: 200 }}> Iniciar </button>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;900&display=swap');

	@keyframes middleground_frames {
		0% {
			background-position: 0% 50%;
		}

		100% {
			background-position: 100% 50%;
		}
	}

	@keyframes title_frames {
		0%,
		100%,
		45%,
		55% {
			text-transform: uppercase;
			font-weight: 900;
		}

		50% {
			text-transform: lowercase;
			font-weight: 400;
		}
	}

	@keyframes flicker {
		0% {
			opacity: 0.27861;
		}
		5% {
			opacity: 0.34769;
		}
		10% {
			opacity: 0.23604;
		}
		15% {
			opacity: 0.90626;
		}
		20% {
			opacity: 0.18128;
		}
		25% {
			opacity: 0.83891;
		}
		30% {
			opacity: 0.65583;
		}
		35% {
			opacity: 0.67807;
		}
		40% {
			opacity: 0.26559;
		}
		45% {
			opacity: 0.84693;
		}
		50% {
			opacity: 0.96019;
		}
		55% {
			opacity: 0.08594;
		}
		60% {
			opacity: 0.20313;
		}
		65% {
			opacity: 0.71988;
		}
		70% {
			opacity: 0.53455;
		}
		75% {
			opacity: 0.37288;
		}
		80% {
			opacity: 0.71428;
		}
		85% {
			opacity: 0.70419;
		}
		90% {
			opacity: 0.7003;
		}
		95% {
			opacity: 0.36108;
		}
		100% {
			opacity: 0.24387;
		}
	}
	@keyframes textShadow {
		0% {
			text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
				-0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		5% {
			text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
				-2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		10% {
			text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
				-0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		15% {
			text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
				-0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		20% {
			text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
				-3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		25% {
			text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
				-1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		30% {
			text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
				-0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		35% {
			text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
				-3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		40% {
			text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
				-3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		45% {
			text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
				-2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		50% {
			text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
				-0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		55% {
			text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
				-2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		60% {
			text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
				-2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		65% {
			text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
				-2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		70% {
			text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
				-0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		75% {
			text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
				-1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		80% {
			text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
				-0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		85% {
			text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
				-0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		90% {
			text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
				-3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		95% {
			text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
				-2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
		100% {
			text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
				-2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
		}
	}

	button,
	a {
		pointer-events: all;
	}

	#background {
		background: #000;
		background-image: url('$lib/assets/backgrounds/covers/bg-cover-5.jpg');
		background-position: 80% center;
		background-repeat: no-repeat;
		background-size: auto 100%;
		filter: blur(0.1px) saturate(1.5);
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	#middleground {
		animation: middleground_frames 60s infinite;
		background: #000;
		background-image: url('$lib/assets/backgrounds/covers/bg-cover-5-overlay.jpg');
		background-position: center center;
		background-repeat: repeat;
		background-size: cover;
		height: 101%;
		left: 0;
		mix-blend-mode: color;
		opacity: 0.3;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;
	}

	#middleground.portrait {
		height: 100vw;
		transform: rotate(90deg) translate(0, -100%);
		transform-origin: top left;
		width: 100vh;
	}

	#content {
		align-items: center;
		color: #fff;
		display: flex;
		flex-direction: column;
		font-family: 'Orbitron', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		height: 100%;
		justify-content: space-between;
		line-height: 140%;
		max-height: 100svh;
		max-width: 100vw;
		overflow: clip;
		padding: 4rem 2rem 8rem 2rem;
		pointer-events: none;
		position: relative;
		text-transform: uppercase;
		width: 100%;
	}

	#subtitle {
		align-self: flex-start;
		max-width: 85%;
		padding: 1rem;
		width: 30rem;
	}

	#subtitle p {
		width: 60%;
	}

	#subtitle h3 {
		color: #7cd0ff;
		font-family: 'Orbitron', sans-serif;
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 140%;
		mix-blend-mode: difference;
		text-transform: uppercase;
	}

	#title {
		font-weight: 900;
		left: 50%;
		line-height: 95%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: min(4rem, 10vw);
	}

	#start-button {
		color: #7cd0ff;
		font-family: 'Orbitron', sans-serif;
		font-size: 1.8rem;
		font-weight: 900;
		line-height: 95%;
		text-align: center;
		text-transform: uppercase;
		padding: 0.5rem;

		mix-blend-mode: hard-light;
		border: 3px solid #fff;
	}

	.span1,
	.span4 {
		font-size: min(3rem, 5vw);
		font-weight: 400;
	}

	.span2 {
		animation: title_frames 2.5s infinite;
	}

	.span3 {
		animation: title_frames 1.1s infinite;
	}

	.span5 {
		animation: title_frames 3s infinite;
	}

	.footer {
		color: #fff;
		display: flex;
		display: row;
		font-family: Courier;
		font-size: 1.2rem;
		font-weight: 400;
		gap: 2rem;
		height: 2rem;
		line-height: 120%;
		position: absolute;
		text-align: right;
		text-transform: uppercase;
		white-space: nowrap;
		width: 100vh;
	}

	.footer.right {
		left: calc(100vw - 4rem);
		transform: rotate(90deg);
		transform-origin: bottom left;
		top: 3rem;
	}

	.footer.left {
		bottom: 0;
		left: 2rem;
		transform: rotate(-90deg);
		transform-origin: center left;
	}

	.footer hr {
		border: 0.11rem solid #fff;
		margin: 0.5rem 0 0.5rem 0;
		width: 100%;
	}

	.crt::after {
		animation: flicker 0.15s infinite;
		background: rgba(18, 16, 16, 0.1);
		bottom: 0;
		content: ' ';
		display: block;
		left: 0;
		opacity: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.crt::before {
		background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		background-size: 100% 2px, 3px 100%;
		bottom: 0;
		content: ' ';
		display: block;
		left: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}

	.crt {
		animation: textShadow 1.6s infinite;
	}

	@media only screen and (min-width: 768px) {
		#subtitle {
			font-size: 1.3rem;
			line-height: 120%;
		}

		#subtitle h3 {
			font-size: 2.3rem;
			line-height: 120%;
		}

		#title {
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
		}

		#start-button {
			font-size: 3rem;
		}

		.footer {
			font-size: 1.5rem;
		}
	}
</style>
