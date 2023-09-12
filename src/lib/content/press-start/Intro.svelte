<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';

	import CharactersImage from '$lib/assets/images/press-start-characters-image.png';
</script>

<section id="press-start-intro-section">
	<h1>Sua marca no jogo</h1>
	<Paragraph color="white">
		Em parceria com a Talk, a ℓiⱴε lançou o estudo
		<span class="weight-700">O Mundo Infinito dos Gamers</span>
		com um capítulo inédito de oportunidades para o mercado.
	</Paragraph>
	<Paragraph color="white">
		Agora criamos uma
		<span class="weight-700">metodologia exclusiva</span>
		que vai transformar insights em jogadas personalizadas para a sua marca
		<span class="weight-700">subir de nível</span>.
	</Paragraph>
	<div id="press-start-intro-highlight">
		<Title type="special" align="center" color="red">Por quê?</Title>
		<Paragraph align="center" color="black">
			<span class="weight-700">Solucionar problemas e desafios de comunicação</span> de marcas com diferentes
			níveis de maturidade no universo de games.
		</Paragraph>
		<Title type="special" align="center" color="red">Quem?</Title>
		<Paragraph align="center" color="black">
			Marcas que não sabem como dar o start até marcas que querem ir para o
			<span class="weight-700">próximo nível</span>.
		</Paragraph>
		<Title type="special" align="center" color="red">O quê?</Title>
		<Paragraph align="center" color="black">
			Um <span class="weight-700">sprint estratégico e criativo</span> com duração de 2 dias a 5 dias.
		</Paragraph>
	</div>
	<img src={CharactersImage} alt="" />
</section>

<style>
	#press-start-intro-section {
		align-items: center;
		background-color: black;
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: clip;
	}

	#press-start-intro-section h1 {
		color: var(--color-white);
		font-family: 'Press Start 2P', monospace;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		text-transform: uppercase;
	}

	#press-start-intro-highlight {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-press-start-highlight.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#press-start-intro-section img {
		max-width: unset;
	}

	@media only screen and (max-width: 768px) {
		#press-start-intro-section {
			padding: 6rem 7.5vw 0 7.5vw;
		}

		#press-start-intro-section h1 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		#press-start-intro-section img {
			margin: -25rem -7.5vw 0 -7.5vw;
			width: 125vw;
		}

		#press-start-intro-highlight {
			height: calc(20rem * 3.5);
			margin-top: 2rem;
			padding: 4rem 2rem 0 2rem;
			width: 20rem;
		}

		#press-start-intro-highlight :global(h2) {
			font-size: 4rem;
			margin: 4rem 0 1rem 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#press-start-intro-section {
			padding: 7.5rem 15vw 0 15vw;
		}

		#press-start-intro-section h1 {
			font-size: 2.5rem;
			margin-bottom: 2.5rem;
		}

		#press-start-intro-section img {
			margin: -22.5rem -15vw 0 -15vw;
			width: 75vw;
		}

		#press-start-intro-highlight {
			height: calc(22.5rem * 3.5);
			margin-top: 2.5rem;
			padding: 5rem 2.5rem 0 2.5rem;
			width: 22.5rem;
		}

		#press-start-intro-highlight :global(h2) {
			font-size: 4.5rem;
			margin: 5rem 0 1.25rem 0;
		}
	}

	@media only screen and (min-width: 1280px) {
		#press-start-intro-section {
			padding: 7.5rem 25vw 0 25vw;
		}

		#press-start-intro-section h1 {
			font-size: 2.5rem;
			margin-bottom: 3.75rem;
		}

		#press-start-intro-section img {
			margin: -22.5rem -25vw 0 -25vw;
			width: 50vw;
		}

		#press-start-intro-highlight {
			height: calc(22.5rem * 3.5);
			margin-top: 2.5rem;
			padding: 5rem 2.5rem 0 2.5rem;
			width: 22.5rem;
		}

		#press-start-intro-highlight :global(h2) {
			font-size: 4.5rem;
			margin: 5rem 0 1.25rem 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#press-start-intro-section {
			padding: 9rem 0 0 0;
			padding-left: calc((100% - 40rem) / 2);
			padding-right: calc((100% - 40rem) / 2);
		}

		#press-start-intro-section h1 {
			font-size: 3.5rem;
			margin-bottom: 3rem;
		}

		#press-start-intro-section img {
			margin: -25rem -25vw 0 -25vw;
			width: 50rem;
		}

		#press-start-intro-highlight {
			height: calc(25rem * 3.5);
			margin-top: 3rem;
			padding: 6rem 3rem 0 3rem;
			width: 25rem;
		}

		#press-start-intro-highlight :global(h2) {
			font-size: 5rem;
			margin: 6rem 0 1.5rem 0;
		}
	}
</style>
