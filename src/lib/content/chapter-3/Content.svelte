<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import MainIcon from '$lib/assets/icons/fantasy-3.svg';
	import BadSideIcon from '$lib/assets/icons/fantasy-bad-side-3.svg';
	import GoodSideIcon from '$lib/assets/icons/fantasy-good-side-3.svg';
	import ContentWords from '$lib/assets/images/c3-content-words.svg';
	import MortalKombatImage from '$lib/assets/images/c3-mortal-kombat.gif';

	const chartsData = [
		{
			file: '/charts/chapter-3/2.svg',
			title: 'Como o videogame afeta as sua habilidades intelectuais?'
		},
		{
			file: '/charts/chapter-3/3.svg',
			title: 'Como o videogame afeta as sua habilidades cognitivas?'
		}
	];
</script>

<section id="paradox-content-section">
	<div id="paradox-content-section-cover">
		<Title type="special" align="center" color="white">Forma e conteúdo</Title>
	</div>
	<div class="cover-icon-wrapper">
		<img src={MainIcon} alt="" />
	</div>
	<div id="paradox-content-subsection-1">
		<div class="paradox-subsection-divider-good">
			<img src={GoodSideIcon} alt="" />
			<div>
				<h6>Desenvolvimento intelectual e cognitivo</h6>
				<p>IMPACTO POSITIVO DA <span class="weight-700">FORMA E CONTEÚDO</span></p>
			</div>
		</div>
		<Paragraph color="blue-darker">
			Para a maioria das pessoas, o jogo treina para coisas para a vida. Relatos emocionados mostram
			que estratégia de jogo e capacidades sócio-emocionais podem ser transferidos para lidar melhor
			com momentos na “vida real”.
		</Paragraph>
		<div id="paradox-content-highlight-wrapper" />
		<Carousel>
			{#each chartsData as chart}
				<div class="profile-behavior-chart">
					<h2>{chart.title}</h2>
					<img src={base + chart.file} alt={chart.title} />
				</div>
			{/each}
		</Carousel>
		<div class="display-flex-wrapper">
			<Paragraph color="blue-darker">
				Algumas das habilidades sócio-emocionais e outras que foram apontadas nos relatos dos/as
				jogadores/as:
			</Paragraph>
			<Image src={ContentWords} alt="" />
		</div>
		<Carousel>
			<PostIt
				title="Formação de caráter"
				author="Homem, Branco, 33 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Os jogos tiveram um impacto enorme na minha vida. Eles me ensinaram lições valiosas sobre
				coragem, determinação, imaginação, amizade, perda, redenção e trabalho em equipe. Cada um
				deles, desde Chrono Trigger até The Last of Us, proporcionou experiências que moldaram
				completamente quem eu sou hoje.”
			</PostIt>
			<PostIt
				title="Concentração"
				author="Homem, Branco, 25 anos, RS"
				background="blue-dark"
				color="white"
			>
				“Os jogos me mantém muito concentrado e me auxiliam com essa questão em específico. Aprendo
				muito com os erros dentro dos jogos e isso é uma constância que espelha na vida real
				também.”
			</PostIt>
			<PostIt
				title="Persistência"
				author="Pessoa não binária, parda, 33 anos, RS"
				background="blue-dark"
				color="white"
			>
				“Nossa, eu já aprendi muito com os jogos. Desde ter força de vontade, não desistir, sempre
				pensar à frente e planejar para o futuro, saber raciocinar e não se afobar em situações de
				risco...”
			</PostIt>
		</Carousel>
	</div>
	<div id="paradox-content-subsection-2">
		<div class="paradox-subsection-divider-bad">
			<img src={BadSideIcon} alt="" />
			<div>
				<h6>Alguns jogos podem gerar sentimentos negativos?</h6>
				<p>IMPACTO NEGATIVO DA <span class="weight-700">FORMA E CONTEÚDO</span></p>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<div>
				<Paragraph color="red-darker">
					Assim como desestressa, o jogo pode gerar sensações negativas de ansiedade, segundo alguns
					relatos.
				</Paragraph>
				<Paragraph color="red-darker">
					Porém, estudos recentes (como um com 40 mil jogadores pela <a
						href="https://royalsocietypublishing.org/doi/10.1098/rsos.220411"
						target="_blank">Universidade de Oxford</a
					>) não encontram evidências de que jogar afeta o estado mental das pessoas.
				</Paragraph>
			</div>
			<div>
				<Image src={MortalKombatImage} alt="" />
				<Legend color="red-darker">
					O Friendship é um movimento de finalização do Mortal Kombat introduzido como resposta às
					controvérsias em torno dos movimentos de Fatality. Créditos:
					<a href="https://mortalkombat.fandom.com/pt-br/wiki/Mortal_Kombat_II" target="_blank"
						>Mortal Kombat Wiki</a
					>.
				</Legend>
			</div>
		</div>
		<Carousel>
			<PostIt
				title="Estressa e desestressa"
				author="Mulher, Branca, 24 anos, Rio de Janeiro, RJ"
				background="red-dark"
				color="white"
			>
				“Eu costumo sair do trabalho, geralmente, ir pro Valorant, me estressar, e aí depois a gente
				joga Human Fall Flat, para desestressar.”
			</PostIt>
			<PostIt
				title="Ansiedade e raiva"
				author="Homem, Preto, 23 anos, RS"
				background="red-dark"
				color="white"
			>
				“O jogo te dá duas sensações: ansiedade e raiva.”
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

	#paradox-content-section .display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	#paradox-content-section-cover {
		align-items: center;
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-c3-content-cover.svg');
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

	#paradox-content-subsection-1 {
		align-items: center;
		background-color: var(--color-blue-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-content-subsection-2 {
		align-items: center;
		background-color: var(--color-red-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-content-highlight-wrapper {
		background-image: url('$lib/assets/backgrounds/background-c3-content-highlight.svg');
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
		#paradox-content-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-content-section-cover {
			background-position: 80% center;
			margin-bottom: -10rem;
			padding: 0 7.5vw 5rem 7.5vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 5rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 7.5vw 2rem 7.5vw;
		}

		#paradox-content-highlight-wrapper {
			height: calc(100vw * 2);
			margin: 2rem 0 0 0;
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
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-content-section-cover {
			background-position: 90% center;
			margin-bottom: -12.5rem;
			padding: 0 15vw 6.25rem 15vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2.5rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 15vw 2.5rem 15vw;
		}

		#paradox-content-highlight-wrapper {
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
			height: 42.5rem;
			padding: 2.5rem 1.25rem;
			width: 22.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: row;
			gap: 5rem;
			margin: 0 -10vw;
		}

		#paradox-content-section .display-flex-wrapper > :global(div),
		#paradox-content-section .display-flex-wrapper > :global(p),
		#paradox-content-section .display-flex-wrapper > :global(img) {
			width: 50%;
		}

		#paradox-content-section .display-flex-wrapper :global(img),
		#paradox-content-section .display-flex-wrapper :global(.p-legend) {
			max-width: 35vw;
			width: 100%;
		}

		#paradox-content-section-cover {
			background-position: center center;
			margin-bottom: -12.5rem;
			padding: 0 20vw 6.25rem 20vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2.5rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 20vw 2.5rem 20vw;
		}

		#paradox-content-highlight-wrapper {
			height: calc(40vw * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(40vw * -1.25);
			padding-top: calc(40vw * 0.5);
			width: 40vw;
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
			height: 45rem;
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
		#paradox-content-section .display-flex-wrapper {
			flex-direction: row;
			gap: 6rem;
			margin: 0 -10rem;
		}

		#paradox-content-section .display-flex-wrapper > :global(div),
		#paradox-content-section .display-flex-wrapper > :global(p),
		#paradox-content-section .display-flex-wrapper > :global(img) {
			width: 50%;
		}

		#paradox-content-section .display-flex-wrapper :global(img),
		#paradox-content-section .display-flex-wrapper :global(.p-legend) {
			max-width: 30rem;
			width: 100%;
		}

		#paradox-content-section-cover {
			background-position: center center;
			margin-bottom: -15rem;
			padding: 0 0 7.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 3rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-content-highlight-wrapper {
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
			height: 45rem;
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
