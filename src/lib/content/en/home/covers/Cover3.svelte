<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import Lettering from '$lib/assets/images/en/lettering_candy.png';
	import Candy1 from '$lib/assets/images/Candy-01.png';
	import Candy2 from '$lib/assets/images/Candy-02.png';
	import Candy3 from '$lib/assets/images/Candy-03.png';
	import Candy4 from '$lib/assets/images/Candy-04.png';
	import Candy5 from '$lib/assets/images/Candy-05.png';
	import Candy6 from '$lib/assets/images/Candy-06.png';
	import Candy7 from '$lib/assets/images/Candy-07.png';
	import Candy8 from '$lib/assets/images/Candy-08.png';
	import gameUI1 from '$lib/assets/images/ui-candy-1.png';
	import gameUI2 from '$lib/assets/images/ui-candy-2.png';

	const dispatch = createEventDispatcher();
	let showCandy = false;

	function sendClick(e) {
		e.stopPropagation();
		dispatch('click', e);
	}

	function start(e) {
		e.stopPropagation();
		dispatch('start', e);
	}

	function getRandomCandy() {
		const candies = [Candy1, Candy2, Candy3, Candy4, Candy5, Candy6, Candy7, Candy8];
		return candies[Math.floor(Math.random() * candies.length)];
	}

	onMount(() => {
		showCandy = true;
	});
</script>

<div id="background" role="button" tabindex="0" on:click={sendClick} on:keydown={sendClick}>
	<div id="middleground" />
</div>
<div id="content">
	<div id="game-title">
		<img
			id="game-logo"
			src={Lettering}
			alt="O Mundo Infinito dos Gamers"
			transition:fade={{ duration: 200 }}
		/>
		<div id="subtitle" class="glass">
			<div id="" class="" />
			<h3>A study of game consumers in Brazil</h3>
			<p>
				Dive into the complexity of this universe, get to know the profiles of gamers and understand
				how brands can be more relevant
			</p>
		</div>
		<button id="start-button" on:click={start} transition:fade={{ duration: 200 }} />
	</div>
	<div id="game" class="glass">
		<div class="grid">
			{#each Array(36) as _, i}
				<div class="cell">
					{#if showCandy}
						<img
							src={getRandomCandy()}
							alt="Candy"
							class="w-full h-full"
							transition:fly={{ y: -10, duration: 1000, delay: 100 * (42 - i) }}
						/>
					{/if}
				</div>
			{/each}
		</div>
		<div id="game-ui">
			<img src={gameUI1} alt="Game UI" />
			<img src={gameUI2} alt="Game UI" />
		</div>
		<div id="footer">
			<a href="http://talkdigital.co" target="_blank"> A LIVE + TALK partnership </a>✨
			<a href="http://odd.studio" target="_blank"> design by odd.studio</a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playball&family=Sansita&display=swap');

	@keyframes background_frames {
		0%,
		100% {
			transform: translate3d(0%, 0, 0);
			animation-timing-function: ease-in-out;
		}
		50% {
			transform: translate3d(-10%, 0, 0);
			animation-timing-function: ease-in-out;
		}
	}

	@keyframes middleground_frames {
		0%,
		100% {
			transform: translateX(0%);
		}

		50% {
			transform: translateX(-5%);
		}
	}

	#background {
		animation: middleground_frames 30s linear infinite;
		background-color: var(--color-pink-candy);
		background-image: url('$lib/assets/backgrounds/covers/bg-cover-3.png');
		background-position: center left;
		background-repeat: repeat-x;
		background-size: auto 100%;
		bottom: 0;
		display: flex;
		left: 0;
		height: 100svh;
		justify-content: center;
		position: absolute;
		width: 200vw;
	}

	#middleground {
		animation: middleground_frames 30s linear infinite;
		background-image: url('$lib/assets/backgrounds/covers/bg-cover-3-overlay.png');
		background-position: bottom left;
		background-repeat: repeat-x;
		background-size: auto 50%;
		bottom: 0;
		left: 0;
		height: 100%;
		position: absolute;
		width: 200%;
	}

	#content {
		align-items: center;
		color: #fff;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-family: 'Playball', cursive;
		font-size: 1rem;
		font-weight: 400;
		height: 100%;
		justify-content: center;
		line-height: 100%;
		max-height: 100svh;
		max-width: 100vw;
		pointer-events: none;
		text-align: center;
		width: 100%;
	}

	#game-title {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 1rem 0 1rem;
		max-width: 25rem;
		min-width: 22rem;
		transition: all;
		width: min-content;
	}

	#game-logo {
		height: 50%;
		margin-bottom: -15%;
		max-height: 20svh;
		z-index: 10;
	}

	#subtitle {
		padding: 2rem;
		padding-top: 1rem;
		width: 100%;
	}

	#content h3 {
		color: #fff;
		font-family: 'Sansita', sans-serif;
		font-size: 1.3rem;
		font-weight: 400;
		line-height: 86%;
		margin-bottom: 2rem;
		margin-top: 1rem;
		text-shadow: 2.3px 2.3px 0px #c436de;
	}

	#start-button {
		aspect-ratio: 2.67;
		background-image: url('$lib/assets/images/start-candy.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		color: #fff;
		font-family: 'Goldman', cursive;
		height: 2.7rem;
		line-height: 125%;
		pointer-events: auto;
		text-align: center;
		transform: translateY(-50%);
		vertical-align: middle;
		z-index: 10;
	}

	#game {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: inherit;
		margin: 0 1rem 2.5rem 1rem;
		max-height: 50svh;
		padding: 1rem;
		transition: all;
		width: fit-content;
	}

	#game-ui {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		height: 1.8rem;
		justify-content: space-between;
		margin-top: 1rem;
		width: 100%;
	}

	#game-ui img {
		height: 100%;
		width: auto;
	}

	#footer {
		color: #fff;
		display: flex;
		flex-direction: row;
		font-family: 'Sansita', sans-serif;
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 85%;
		margin-top: 1rem;
		pointer-events: none;
		text-align: center;
		z-index: 10;
	}

	.glass {
		background: rgba(138, 26, 158, 0.4);
		backdrop-filter: blur(15px);
		border-color: rgba(255, 255, 255, 0.8) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.8)
			rgba(255, 255, 255, 0.8);
		border-radius: 1.2rem;
		border-style: solid;
		border-width: 0.2rem;
	}

	.grid {
		aspect-ratio: 1;
		display: grid;
		gap: 0.2rem;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		max-height: calc(100% - 4rem);
		max-width: 100%;
	}

	.cell {
		background-color: rgba(138, 26, 158, 0.2);
		border-radius: 0.5rem;
	}

	@media only screen and (min-width: 768px) {
		#game {
			margin: 0 1rem 0 1rem;
		}

		#game-logo {
			height: 50%;
			margin-bottom: -15%;
			max-height: 20svh;
		}

		#content {
			font-size: 1.2rem;
		}

		#subtitle {
			width: 80%;
		}

		#content h3 {
			font-size: 2rem;
		}
	}
</style>
