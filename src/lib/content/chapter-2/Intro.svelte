<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';

	import StatementAuthor from '$lib/assets/images/c2-statement-author.png';
</script>

<section id="league-intro-section">
	<Paragraph color="blue-darker">
		Quem joga se sente parte de uma grande comunidade, assim como na música ou no esporte. Na
		música, é mais ou menos assim: mesmo existindo quem gosta só de eletrônica ou de pop, quando
		elas se encontram em um festival, todas se sentem parte do grupo de apaixonados por música.
	</Paragraph>
	<Highlight color="blue-darker">
		Com os games também é assim: as pessoas compartilham o amor pelos jogos
	</Highlight>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, Executivo de Marketing"
			background="gray-light"
			border="red"
			color="red"
		>
			“A gente tem isso no futebol, pessoas que torcem para um time, formam comunidades (...) Nos
			games, são comunidades muito engajadas, porque para engajar a pessoa só precisa ter um celular
			ou um computador e estar ali, é uma formação de comunidades simplificada. Você não precisa ir
			num estádio para ter amigos que torcem pro mesmo time que você. Você pode estar em casa,
			conversando ou assistindo um conteúdo do jogo que você gosta. E tendo essa construção de
			comunidade com algo que você se sente pertencente.”
		</Statement>
	</div>
	<Highlight color="blue-darker">
		O que caracteriza essa 'grande liga': <span class="color-red">afeto</span>, um
		<span class="color-yellow-dark">idioma próprio</span>
		e a <span class="color-blue-dark">socialização</span>.
	</Highlight>
</section>

<style>
	#league-intro-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	.statement-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		#league-intro-section {
			padding: 4rem 7.5vw 1rem 7.5vw;
		}

		.statement-wrapper {
			margin: 0 -7.5vw 2rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#league-intro-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		.statement-wrapper {
			margin: -1.25rem -15vw 1.25rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-intro-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		.statement-wrapper {
			margin: -1.25rem -20vw 1.25rem -20vw;
			padding: 0 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-intro-section {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		.statement-wrapper {
			margin: -1.5rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: 100vw;
		}
	}
</style>
