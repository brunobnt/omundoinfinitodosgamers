<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import MainIcon from '$lib/assets/icons/fantasy-2.svg';
	import BadSideIcon from '$lib/assets/icons/fantasy-bad-side-2.svg';
	import GoodSideIcon from '$lib/assets/icons/fantasy-good-side-2.svg';
	import AnimalCrossingImage from '$lib/assets/images/c3-animal-crossing.png';
	import MobileInfographic from '$lib/assets/images/c3-time-infographics-mb.svg';
	import DesktopInfographic from '$lib/assets/images/c3-time-infographics-pc.svg';

	const chartsData = [
		{
			file: '/charts/chapter-3/1.svg',
			title: 'Como o videogame afeta sua convivência com os amigos?'
		}
	];
</script>

<section id="paradox-time-section">
	<div id="paradox-time-section-cover">
		<Title type="special" align="center" color="white">Tempo passado no jogo</Title>
	</div>
	<div class="cover-icon-wrapper">
		<img src={MainIcon} alt="" />
	</div>
	<div id="paradox-time-subsection-1">
		<div class="paradox-subsection-divider-good">
			<img src={GoodSideIcon} alt="" />
			<div>
				<h6>Entretenimento/ Socialização</h6>
				<p>IMPACTO POSITIVO DO <span class="weight-700">TEMPO PASSADO NO JOGO</span></p>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<div>
				<Paragraph color="blue-darker">
					Jogar com amigos e familiares é uma diversão coletiva que aproxima, cria intimidade e
					reforça laços, mesmo quando as pessoas estão distantes fisicamente. E conversar enquanto
					jogam ajuda nessa conexão.
				</Paragraph>
				<Image src={AnimalCrossingImage} alt="" />
				<Legend color="blue-darker">
					Vários jogadores celebrando o aniversário de um deles no jogo <a
						href="https://nookipedia.com/wiki/Animal_Crossing:_New_Horizons"
						target="_blank">Animal Crossing: New Horizons</a
					>. Screenshot do Nintendo Switch.
				</Legend>
			</div>
			<div>
				<div id="paradox-time-highlight-wrapper" />
				{#each chartsData as chart}
					<div class="profile-behavior-chart">
						<h2>{chart.title}</h2>
						<img src={base + chart.file} alt={chart.title} />
					</div>
				{/each}
			</div>
		</div>
		<Carousel>
			<PostIt
				title="Diversão e comunhão"
				author="Homem, Pardo, 35 anos, Brasília, DF"
				background="blue-dark"
				color="white"
			>
				“Você entra com 5 pessoas, pra se divertir, o intuito daquele jogo você já fala: ‘Mano’,
				hoje eu vou me divertir, a gente não vai jogar competitivo, a gente vai testar campeão, vai
				ser engraçado e às vezes a gente não está nem prestando tanta atenção no jogo, a gente está
				ali mais pela comunhão.”
			</PostIt>
			<PostIt
				title="Matar a saudade"
				author="Mulher, Branca, 25 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Encontro meus amigos que moram fora do país nesse metaverso e matamos um pouco da saudade
				enquanto realizamos missões. Me conecto com meus sobrinhos que também jogam, de 10, 15, 18
				anos - e com meus amigos de 30, 35, 40. É a atividade de lazer mais democrática que conheço
				e amo.”
			</PostIt>
			<PostIt
				title="Alívio do estresse"
				author="Pessoa não binária, Parda, 33 anos, Porto Alegre, RS"
				background="blue-dark"
				color="white"
			>
				“Me ajuda a focar, me acalmar e me aliviar de estresses da vida. Me dá um motivo para chegar
				em casa e poder curtir minhas noites com meus amigos.”
			</PostIt>
		</Carousel>
	</div>
	<div id="paradox-time-subsection-2">
		<div class="paradox-subsection-divider-bad">
			<img src={BadSideIcon} alt="" />
			<div>
				<h6>Dedicação a família, estudos e trabalho</h6>
				<p>IMPACTO NEGATIVO DO <span class="weight-700">TEMPO PASSADO NO JOGO</span></p>
			</div>
		</div>
		<Image src={MobileInfographic} alt="" />
		<Image src={DesktopInfographic} alt="" />
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

	#paradox-time-section .display-flex-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	#paradox-time-section-cover {
		align-items: center;
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-c3-time-cover.svg');
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

	#paradox-time-subsection-1 {
		align-items: center;
		background-color: var(--color-blue-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-time-subsection-2 {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-time-highlight-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c3-time-highlight.svg');
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

	@media only screen and (max-width: 768px) {
		#paradox-time-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-time-section-cover {
			background-position: 80% center;
			margin-bottom: -10rem;
			padding: 0 7.5vw 5rem 7.5vw;
		}

		#paradox-time-section-cover :global(h2) {
			font-size: 5rem;
		}

		#paradox-time-subsection-1,
		#paradox-time-subsection-2 {
			padding: 0 7.5vw 2rem 7.5vw;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(1)) {
			display: unset;
			margin: -2rem -7.5vw -2rem -7.5vw;
			max-width: unset;
			width: calc(100% + 15vw);
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(2)) {
			display: none;
		}

		#paradox-time-highlight-wrapper {
			height: calc(100vw * 2);
			margin: 2rem -7.5vw 0 -7.5vw;
			margin-bottom: calc(100vw * -1.25);
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
			margin: 0 auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-time-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-time-section-cover {
			background-position: 90% center;
			margin-bottom: -12.5rem;
			padding: 0 15vw 6.25rem 15vw;
		}

		#paradox-time-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-time-subsection-1,
		#paradox-time-subsection-2 {
			padding: 0 15vw 2.5rem 15vw;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(1)) {
			display: none;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(2)) {
			display: unset;
			margin: -2.5rem -15vw -2.5rem -15vw;
			max-width: unset;
			width: 100vw;
		}

		#paradox-time-highlight-wrapper {
			height: calc(70vw * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(70vw * -1.25);
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
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-time-section .display-flex-wrapper {
			flex-direction: row;
			gap: 5rem;
			margin: 0 -10vw;
		}

		#paradox-time-section .display-flex-wrapper > div:nth-child(1) {
			margin-top: 5rem;
		}

		#paradox-time-section .display-flex-wrapper > div > :global(img),
		#paradox-time-section .display-flex-wrapper > div > :global(.p-legend) {
			width: 30rem;
		}

		#paradox-time-section-cover {
			background-position: center center;
			margin-bottom: -12.5rem;
			padding: 0 20vw 6.25rem 20vw;
		}

		#paradox-time-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-time-subsection-1,
		#paradox-time-subsection-2 {
			padding: 0 20vw 2.5rem 20vw;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(1)) {
			display: none;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(2)) {
			display: unset;
			margin: 0 0 0 0;
			max-width: unset;
			width: 60vw;
		}

		#paradox-time-highlight-wrapper {
			height: calc(27.5rem * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(27.5rem * -1.25);
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
	}

	@media only screen and (min-width: 1536px) {
		#paradox-time-section .display-flex-wrapper {
			flex-direction: row;
			gap: 6rem;
			margin: 0 -10rem;
		}

		#paradox-time-section .display-flex-wrapper > div:nth-child(1) {
			margin-top: 6rem;
		}

		#paradox-time-section .display-flex-wrapper > div > :global(img),
		#paradox-time-section .display-flex-wrapper > div > :global(.p-legend) {
			width: 35rem;
		}

		#paradox-time-section-cover {
			background-position: center center;
			margin-bottom: -15rem;
			padding: 0 0 7.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-time-section-cover :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-time-subsection-1,
		#paradox-time-subsection-2 {
			padding: 0 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(1)) {
			display: none;
		}

		#paradox-time-subsection-2 > :global(img:nth-of-type(2)) {
			display: unset;
			margin: 0 0 0 0;
			max-width: unset;
			width: 50rem;
		}

		#paradox-time-highlight-wrapper {
			height: calc(35rem * 2);
			margin: 3rem 0 0 0;
			margin-bottom: calc(35rem * -1.25);
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
	}
</style>
