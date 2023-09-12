<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';

	import GamersAI from '$lib/assets/images/c1-gamers-ai.png';
</script>

<section id="profiles-intro-section">
	<Title type="subsection" color="white">O console não é a única forma de jogar</Title>
	<Paragraph color="white">
		As mudanças dos últimos 6 anos tiveram impacto direto no acesso aos jogos e na forma como as
		pessoas jogam.
	</Paragraph>
	<Paragraph color="white">
		As empresas desenvolvedoras de jogos perceberam que existia um enorme potencial no mobile, e
		aproveitaram. Hoje, a fantasia, complexidade, estratégia e competição estão também acessíveis a
		quem joga no celular.
	</Paragraph>
	<Paragraph color="white">
		Se antes os jogos mais complexos ou competitivos estavam nos consoles e computadores, hoje a
		fantasia, complexidade, estratégia e competição estão também acessíveis a quem só joga no
		celular.
	</Paragraph>
	<div id="gamers-ai-grid">
		<Highlight color="white">
			Essa grande mudança ampliou as possibilidades do que é ser gamer
		</Highlight>
		<Image src={GamersAI} />
		<Legend>
			Ao testarmos a imagem dos gamers na visão de uma inteligência artificial generativa (que cria
			imagens a partir do que está na internet), é assim que eles são retratados.
		</Legend>
	</div>
</section>
<section id="profiles-intro-highlight">
	<Highlight align="center" color="white">
		E você? Quando pensa em uma pessoa que joga videogame ou jogos digitais, o que vem à sua cabeça?
		Explore e conheça os seis tipos de jogadores que encontramos!
	</Highlight>
</section>

<style>
	#profiles-intro-section {
		align-items: center;
		background-color: var(--color-background-darkblue);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	#gamers-ai-grid {
		display: grid;
	}

	#profiles-intro-highlight {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#profiles-intro-section {
			padding: 4rem 7.5vw;
		}

		#gamers-ai-grid {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 2rem 0 0 0;
		}

		#profiles-intro-highlight {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-intro-section {
			padding: 5rem 15vw;
		}

		#gamers-ai-grid {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 1.25rem 0 0 0;
		}

		#profiles-intro-highlight {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-intro-section {
			padding: 5rem 20vw 0 20vw;
		}

		#gamers-ai-grid {
			gap: 0 2.5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 2.5rem -10vw 0 -10vw;
		}

		#gamers-ai-grid :global(img) {
			grid-column: 2/3;
			grid-row: 1/3;
			width: 100%;
		}

		#gamers-ai-grid :global(.p-highlight) {
			padding: 3.75rem 0;
			text-align: left;
		}

		#gamers-ai-grid :global(.p-legend) {
			margin-bottom: auto;
			width: 85%;
		}

		#profiles-intro-highlight {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-intro-section {
			padding: 6rem 0 0 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#gamers-ai-grid {
			gap: 3rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 3rem -10rem 0 -10rem;
		}

		#gamers-ai-grid :global(img) {
			grid-column: 2/3;
			grid-row: 1/3;
			width: 100%;
		}

		#gamers-ai-grid :global(.p-highlight) {
			padding: 4.5rem 0;
			text-align: left;
		}

		#gamers-ai-grid :global(.p-legend) {
			margin-bottom: auto;
			width: 85%;
		}

		#profiles-intro-highlight {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
