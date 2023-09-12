<script>
	import Legend from '$lib/components/Legend.svelte';

	import CoverTitle from '$lib/assets/images/c3-cover-title.png';
</script>

<section id="paradox-cover-section">
	<img src={CoverTitle} alt="Paradoxo: Vida e Fantasia" />
	<div id="paradox-cover-overlay" />
</section>
<div id="paradox-cover-disclaimer">
	<Legend color="white">
		<span class="weight-700">Importante!</span> Entendemos que o que acontece dentro do jogo compõe uma
		realidade, algo que acontece na vida real (o jogar). No entanto, aqui fazemos uma distinção para
		facilitar o entendimento do que faz parte do jogo (a fantasia) e o que está fora dele, que aqui estamos
		chamando de “vida real”.
	</Legend>
</div>

<style>
	#paradox-cover-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		overflow-x: clip;
	}

	#paradox-cover-overlay {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-c3-cover-castle.svg');
		background-position: center 35%;
		background-repeat: no-repeat;
	}

	#paradox-cover-disclaimer :global(.p-legend) {
		border: 0;
		margin: 0;
		width: unset;
	}

	@media only screen and (max-width: 768px) {
		#paradox-cover-section {
			flex-direction: column;
			justify-content: space-between;
		}

		#paradox-cover-section img {
			margin: 4rem auto;
			max-width: 35rem;
			width: 75vw;
		}

		#paradox-cover-overlay {
			background-size: 120%;
			height: 115vw;
			width: 100%;
		}

		#paradox-cover-disclaimer {
			background: linear-gradient(to bottom, #5a9fa1 0, #5a9fa1 2rem, var(--color-black) 100%);
			padding: 2rem 7.5vw 6rem 7.5vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-cover-section {
			flex-direction: column;
			justify-content: space-between;
		}

		#paradox-cover-section img {
			margin: 2.5rem auto 2.5rem auto;
			max-width: 30rem;
			width: 50vw;
		}

		#paradox-cover-overlay {
			background-size: 120%;
			border-left: none;
			height: 115vw;
			width: 100%;
		}

		#paradox-cover-disclaimer {
			background: linear-gradient(to bottom, #5a9fa1 0, #5a9fa1 2.5rem, var(--color-black) 100%);
			padding: 2.5rem 15vw 5rem 15vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-cover-section {
			flex-direction: row;
			justify-content: center;
		}

		#paradox-cover-section img {
			margin: auto auto auto auto;
			max-width: 30rem;
			width: 30vw;
		}

		#paradox-cover-overlay {
			background-size: 150%;
			border-left: 5px dashed var(--color-black);
			height: 100vh;
			width: 50%;
		}

		#paradox-cover-disclaimer {
			background: var(--color-black);
			padding: 2.5rem 20vw 5rem 20vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-cover-section {
			flex-direction: row;
			justify-content: center;
		}

		#paradox-cover-section img {
			margin: auto auto auto auto;
			max-width: 30rem;
			width: 30vw;
		}

		#paradox-cover-overlay {
			background-size: 100%;
			border-left: 7px dashed var(--color-black);
			height: 100vh;
			width: calc(50% - 7px);
		}

		#paradox-cover-disclaimer {
			background: var(--color-black);
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
