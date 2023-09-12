<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Portals from '$lib/components/Portals.svelte';

	import MainIcon from '$lib/assets/icons/fantasy-1.svg';
	import BadSideIcon from '$lib/assets/icons/fantasy-bad-side-1.svg';
	import GoodSideIcon from '$lib/assets/icons/fantasy-good-side-1.svg';

	const chartsData = [
		{
			file: '/charts/chapter-3/0.svg',
			title: 'Como o videogame afeta sua saúde mental?'
		}
	];
</script>

<section id="paradox-realities-section">
	<div id="paradox-realities-section-cover">
		<Title type="special" align="center" color="white">Viver outras realidades</Title>
	</div>
	<div class="cover-icon-wrapper">
		<img src={MainIcon} alt="" />
	</div>
	<div id="paradox-realities-subsection-1">
		<div class="paradox-subsection-divider-good">
			<img src={GoodSideIcon} alt="" />
			<div>
				<h6>Efeito terapêutico</h6>
				<p>IMPACTO POSITIVO DE <span class="weight-700">VIVER OUTRAS REALIDADES</span></p>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<Paragraph color="blue-darker">
				Diversas pessoas relatam a capacidade do jogo de distrair, como uma forma de entretenimento.
				Mas também há as que dizem que o jogo ajuda a lidar com uma realidade que pode ser
				estressante ou entediante. Esse lazer é relacionado como terapêutico - relaxando,
				desestressando - e até ajudando a lidar com depressão. Ao vencer desafios, elas dizem
				aprender e se sentir melhor consigo.
			</Paragraph>
			<div>
				<div id="paradox-realities-highlight-wrapper" />
				{#each chartsData as chart}
					<div class="profile-behavior-chart">
						<h2>{chart.title}</h2>
						<img src={base + chart.file} alt={chart.title} />
					</div>
				{/each}
			</div>
		</div>
		<Title type="component" color="blue-darker">Combate o estresse, ansiedade e depressão</Title>
		<Carousel>
			<PostIt
				title="Viagem para outra realidade"
				author="Mulher, Branca, 25 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Encontro nos games uma viagem para outra realidade - mágica, criativa, intrigante, cheia de
				aventura e quebra-cabeças - que me ajuda a lidar com o estresse da rotina.”
			</PostIt>
			<PostIt
				title="Desestressar"
				author="Mulher, Branca, 43 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Acho que o jogo na minha vida tem uma importância até terapêutica, porque através dele
				esqueço do mundo real e desestresso.”
			</PostIt>
			<PostIt
				title="Paz e família"
				author="Mulher, Parda, 38 anos, Salvador, BA"
				background="blue-dark"
				color="white"
			>
				“Me traz paz, reduz minha ansiedade e me aproxima mais da minha filha.”
			</PostIt>
			<PostIt
				title="Passatempo"
				author="Mulher, Preta, 42 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“É o meu passatempo preferido. Pode se dizer que é um anti depressivo diário.”
			</PostIt>
			<PostIt
				title="Válvula de escape"
				author="Homem, Branco, 29 anos, Niterói, RJ"
				background="blue-dark"
				color="white"
			>
				“Hoje é minha válvula de escape, me tirou de momento depressivo.”
			</PostIt>
		</Carousel>
		<Title type="component" color="blue-darker">Auto-estima e empoderamento</Title>
		<Carousel>
			<PostIt
				title="Coragem"
				author="Homem, Pardo, 21 anos, Salvador, BA"
				background="blue-dark"
				color="white"
			>
				“Eu era uma criança que adotava um comportamento muito tímido, muito recluso e o acesso aos
				jogos me possibilitou conhecer pessoas, me desenvolver, porque você tinha contato com outras
				pessoas, mesmo não estando ali fisicamente, então você tinha mais coragem. É uma coisa que a
				internet proporciona, então isso me fez desenvolver muito o meu aspecto mais extrovertido,
				eu comecei a não ter medo de expressar o meu comportamento.”
			</PostIt>
			<PostIt
				title="Empoderamento"
				author="Homem, Pardo, 35 anos, DF"
				background="blue-dark"
				color="white"
			>
				“Eu gosto de ser aquela personagem que vai indo, corre, desafia. Ou aquele que eu jogava no
				videogame e me dava a sensação de liberdade, de empoderamento. Eu posso, eu quero, eu
				consigo.”
			</PostIt>
			<PostIt
				title="Potencial"
				author="Mulher, branca, 29 anos, DF"
				background="blue-dark"
				color="white"
			>
				“Com os games eu aprendo que eu sou capaz do que quiser e que posso sempre aprender algo
				novo a cada dia.”
			</PostIt>
		</Carousel>
	</div>
	<div id="paradox-realities-subsection-2">
		<div class="paradox-subsection-divider-bad">
			<img src={BadSideIcon} alt="" />
			<div>
				<h6>Fuga da realidade</h6>
				<p>IMPACTO NEGATIVO DE <span class="weight-700">VIVER OUTRAS REALIDADES</span></p>
			</div>
		</div>
		<Portals>
			<Highlight align="center" color="white">
				Viver imerso em outras realidades também pode ter um aspecto escapista, nem sempre positivo,
				que pode levar à reclusão social
			</Highlight>
			<span class="big-number">19%</span>
			<Highlight align="center" color="white">
				têm a fuga da realidade como motivação para jogar
			</Highlight>
		</Portals>
		<Carousel>
			<PostIt
				title="Jogar demais pode ter consequências negativas"
				author="Mulher, branca, 26 anos, São Paulo, SP"
				background="red-dark"
				color="white"
			>
				“Acredito que tudo tem que ser feito com equilíbrio, a dedicação extrema aos jogos pode
				atrapalhar o convívio familiar, desgastar as relações e até causar rompimento nos
				relacionamentos. Já ouvi sobre casos de pessoas que estavam tão viciadas em jogos que
				passavam a noite jogando e perdiam a hora para ir trabalhar/estudar, tendo como consequência
				demissões e perda de ano escolar.”
			</PostIt>
			<PostIt
				title="Não ver o tempo passar..."
				author="Homem, branco, 27 anos, São Paulo, SP"
				background="red-dark"
				color="white"
			>
				“Talvez em alguns momentos fique disperso do ambiente, quando estou jogando... e não preste
				tanto atenção nas coisas de casa de modo geral. Por vezes passei bastante tempo em jogos que
				nem se quer notei o tempo.”
			</PostIt>
			<PostIt
				title="Distanciamento da realidade"
				author="Mulher, branca, 33 anos, Santo André, SP"
				background="red-dark"
				color="white"
			>
				“Acredito que há um apoio e conexão entre os “nerds” (eu inclusa) que buscam se distanciar
				um pouco da realidade e encontram pessoas com sentimentos parecidos.”
			</PostIt>
		</Carousel>
	</div>
</section>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#paradox-realities-section .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#paradox-realities-section .display-flex-wrapper div {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#paradox-realities-section-cover {
		align-items: center;
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-c3-realities-cover.svg');
		background-size: cover;
		background-repeat: repeat-x;
		overflow-x: clip;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		position: sticky;
		top: 0;
		z-index: -1;
	}

	#paradox-realities-subsection-1 {
		align-items: center;
		background-color: var(--color-blue-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-realities-subsection-2 {
		align-items: center;
		background-color: var(--color-black-dark);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-realities-highlight-wrapper {
		background-image: url('$lib/assets/backgrounds/background-c3-realities-highlight.svg');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.cover-icon-wrapper {
		align-items: center;
		background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);
		display: flex;
		justify-content: center;
	}

	.cover-icon-wrapper img {
		animation: spin 10s linear infinite;
		height: 100%;
	}

	.paradox-subsection-divider-bad,
	.paradox-subsection-divider-good {
		align-items: center;
		background-color: var(--color-white);
		display: flex;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.paradox-subsection-divider-bad {
		border-bottom: 3px solid var(--color-red-normal);
	}

	.paradox-subsection-divider-good {
		border-bottom: 3px solid var(--color-blue-normal);
	}

	.paradox-subsection-divider-bad h6,
	.paradox-subsection-divider-good h6 {
		font-family: 'Fraunces', serif;
		font-weight: 600;
		line-height: 115%;
	}

	.paradox-subsection-divider-bad h6 {
		color: var(--color-red-normal);
	}

	.paradox-subsection-divider-good h6 {
		color: var(--color-blue-normal);
	}

	.paradox-subsection-divider-bad p,
	.paradox-subsection-divider-good p {
		color: var(--color-black);
		font-family: 'Overpass Mono', monospace;
		font-weight: 300;
		letter-spacing: -0.025rem;
		line-height: 125%;
		text-transform: uppercase;
	}

	.profile-behavior-chart {
		background-color: var(--color-white);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-black);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 400;
		letter-spacing: 0.09rem;
		text-align: left;
		text-transform: uppercase;
	}

	.profile-behavior-chart img {
		width: 100%;
	}

	.big-number {
		color: var(--color-white);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		line-height: 150%;
		text-align: center;
	}

	@media only screen and (max-width: 768px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-realities-section-cover {
			background-position: 80% center;
			margin-bottom: -10rem;
			padding: 0 7.5vw 5rem 7.5vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 5rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 7.5vw 2rem 7.5vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2rem 0 -1rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(100vw * 2);
			margin: 2rem 0 0 0;
			margin-bottom: calc(100vw * -1.225);
			padding-top: calc(100vw * 0.5);
			width: 100vw;
		}

		.cover-icon-wrapper {
			height: 10rem;
			padding-bottom: 2rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1rem;
			margin: 0 -7.5vw 2rem -7.5vw;
			padding: 0.75rem 0.75rem;
			width: calc(100% + 15vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 4rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.5rem;
			margin-bottom: 0.25rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.75rem;
		}

		.profile-behavior-chart {
			height: 38rem;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}

		.big-number {
			font-size: 5rem;
			margin: 4rem 0 0 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-realities-section-cover {
			background-position: 90% center;
			margin-bottom: -12.5rem;
			padding: 0 15vw 6.25rem 15vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 15vw 2.5rem 15vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2.5rem 0 -1.2255rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(70vw * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(70vw * -1.225);
			padding-top: calc(70vw * 0.5);
			width: 70vw;
		}

		.cover-icon-wrapper {
			height: 12.5rem;
			padding-bottom: 2.5rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.25rem;
			margin: 0 -15vw 2.5rem -15vw;
			padding: 1.25rem 2.5rem;
			width: calc(100% + 30vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 5rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.75rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.875rem;
		}

		.profile-behavior-chart {
			height: 52.5rem;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}

		.big-number {
			font-size: 6rem;
			margin: 5rem 0 0 0;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: row;
			gap: 5rem;
			margin: 0 -10vw;
		}

		#paradox-realities-section .display-flex-wrapper > :global(p) {
			margin-top: 5rem;
		}

		#paradox-realities-section-cover {
			background-position: center center;
			margin-bottom: -12.5rem;
			padding: 0 20vw 6.25rem 20vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 20vw 2.5rem 20vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2.5rem 0 -1.2255rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(27.5rem * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(27.5rem * -1.225);
			padding-top: calc(27.5rem * 0.5);
			width: 27.5rem;
		}

		.cover-icon-wrapper {
			height: 12.5rem;
			padding-bottom: 2.5rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.25rem;
			margin: 0 -20vw 2.5rem -20vw;
			padding: 1.25rem 2.5rem;
			width: calc(100% + 40vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 5rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.75rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.875rem;
		}

		.profile-behavior-chart {
			height: 46rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.big-number {
			font-size: 6rem;
			margin: 2.5rem 0 0 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-realities-section-cover {
			background-position: center center;
			margin-bottom: -15rem;
			padding: 0 0 7.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 3rem 0 -1.5rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(35rem * 2);
			margin: 3rem 0 0 0;
			margin-bottom: calc(35rem * -1.225);
			padding-top: calc(35rem * 0.5);
			width: 35rem;
		}

		.cover-icon-wrapper {
			height: 15rem;
			padding-bottom: 3rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.5rem;
			margin: 0 0 3rem 0;
			padding: 1.5rem 6rem;
			width: calc(100vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 6rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 1rem;
		}

		.profile-behavior-chart {
			height: 46rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.big-number {
			font-size: 7.5rem;
			margin: 3rem 0 0 0;
		}
	}
</style>
