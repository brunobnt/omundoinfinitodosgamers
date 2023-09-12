<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';

	import DataImage1 from '$lib/assets/images/insights-diversity-data-1.svg';
	import DataImage2 from '$lib/assets/images/insights-diversity-data-2.svg';
	import HighlightImage from '$lib/assets/images/insights-diversity-highlight-image.svg';
	import BetasStatistics from '$lib/assets/images/insights-betas-profiles-statistics.png';
	import ProfileStatistics from '$lib/assets/images/insights-diversity-profile-statistics.svg';
</script>

<section id="insights-diversity-section">
	<Title type="special" color="black">2. Promover uma Jogosfera mais plural e diversa</Title>
	<Paragraph color="black">
		Há jogadores em todos os cantos do país, com diferentes fenótipos, personalidades, profissões e,
		principalmente, formas de se relacionar com o jogo. Reconhecer essa diversidade é o primeiro
		passo para ser notado pela comunidade de gamers brasileiros.
	</Paragraph>
	<div id="insights-diversity-separator" />
	<Title type="component" color="black">
		Fomentar uma cadeia de produção mais diversa e inclusiva
	</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="black">
		Levar a diversidade observada entre os gamers para toda a cadeia envolvida no desenvolvimento e
		promoção dos jogos pode elevar a Jogosfera a outro patamar.
	</Paragraph>
	<Paragraph color="black">
		A combinação de diferentes perspectivas, do desenvolvedor ao atleta, promete uma explosão de
		novas ideias, muito mais democráticas e plurais, levando a uma <span class="weight-700">
			diversificação da forma como personagens, temas e histórias são representados no jogo
		</span>.
	</Paragraph>
	<Paragraph color="black">
		Se associar a esse movimento de mudança é o caminho para a marca que deseja se projetar como
		líder dessa nova geração.
	</Paragraph>
	<Title type="component" color="black">Mais diversidade na representação da pessoa que joga</Title>
	<Image src={HighlightImage} alt="" />
	<Paragraph color="black">
		Os gamers querem se ver representados não apenas nos jogos, mas na comunicação feita sobre e
		para eles e elas. Ao dar visibilidade a essa pluralidade, as marcas abrem portas para se
		conectar com essas pessoas.
	</Paragraph>
	<Title type="component" color="black">
		Diferentes perfis, diferentes estratégias de abordagem
	</Title>
	<Paragraph color="black">
		Gamers nem são todos iguais, nem totalmente diferentes. Para definir com quem e como a marca vai
		falar, <span class="weight-700">
			o nível de envolvimento com o jogo é o principal driver que deve ser levado em consideração
		</span>.
	</Paragraph>
	<Paragraph color="black">
		Três dos perfis mapeados pelo estudo vivem o jogo de forma
		<span class="weight-700">muito engajada e representam 40% da pesquisa.</span>
		São os <span class="weight-700">“betas” do game</span>.
	</Paragraph>
	<Image src={BetasStatistics} alt="" />
	<Legend color="black">
		<span class="color-red">*</span> Importante verificar que os perfis são bastante diferentes entre
		si, sendo similares apenas no engajamento.
	</Legend>
	<Paragraph color="black">
		<span class="weight-700">Os betas são as pessoas mais envolvidas com o jogo.</span> Para elas, jogo
		é estilo de vida: consomem conteúdo, fazem parte de comunidades, investem em recursos para melhorar
		sua jogabilidade… Jogar faz parte da sua rotina e, para muitos e muitas, da sua vida profissional
		também.
	</Paragraph>
	<Paragraph color="black">
		Marcas ganham relevância entre estes grupo quando reconhecem seu estilo de vida gamer e se
		posicionam como uma parceira dos/as jogadores/as.
	</Paragraph>
	<Paragraph color="black">
		São o tipo de gamer mais aberto a experimentar novas tecnologias, como a realidade virtual.
	</Paragraph>
	<Paragraph color="black">
		49% Full Hardcore e 60% de Gamers de {'<3'} já experimentaram jogos em realidade virtual.
	</Paragraph>
	<div class="profile-behavior-chart">
		<h2>Já experimentou jogos em realidade virtual</h2>
		<img src={base + '/charts/insights/0.svg'} alt="Já experimentou jogos em realidade virtual" />
	</div>
	<Paragraph color="black">E os que mais gastam dinheiro em jogos:</Paragraph>
	<div class="profile-behavior-chart">
		<h2>Valor mensal tipicamente gasto com jogos digitais/eletrônicos</h2>
		<img
			src={base + '/charts/insights/1.svg'}
			alt="Valor mensal tipicamente gasto com jogos digitais/eletrônicos"
		/>
	</div>
	<Paragraph color="black">
		Também há os gamers <span class="weight-700">mais descompromissados</span>, pessoas um pouco ou
		menos envolvidas com o jogo, mas ainda assim <span class="weight-700">assíduas</span>.
	</Paragraph>
	<Paragraph color="black">
		São menos competitivas, consomem menos conteúdo. Não se percebem como “gamers”, não costumam
		jogar em PC ou console e gastam pouco com jogos. Para elas, tudo é mais centrado no
		entretenimento e representam 38% do universo:
	</Paragraph>
	<Image src={ProfileStatistics} alt="" />
	<Legend color="black">
		<span class="color-red">*</span> Importante verificar que os perfis são bastante diferentes entre
		si, sendo similares apenas no engajamento.
	</Legend>
	<Paragraph color="black">
		Marcas ganham visibilidade com esses perfis sendo genuínas, adaptando-se à linguagem e estética
		dos seus jogos preferidos.
	</Paragraph>
	<Paragraph color="black">
		Mesmo não sendo os/as mais engajados/as, fazem parte da Jogosfera ativamente,
	</Paragraph>
	<Image src={DataImage2} alt="" />
</section>

<style>
	#insights-diversity-section {
		background-color: var(--color-yellow-normal);
		overflow-x: clip;
	}

	#insights-diversity-section :global(.p-legend) {
		border: none;
	}

	#insights-diversity-separator {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-4.svg');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.profile-behavior-chart {
		align-items: center;
		background-color: var(--color-black);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-white);
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
		#insights-diversity-section {
			padding: 4rem 7.5vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 0 2rem 0;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2rem 0 0 0;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 0 2rem 0;
		}

		#insights-diversity-separator {
			height: calc(115vw);
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}

		.profile-behavior-chart {
			margin: 2rem -2.5vw 4rem -2.5vw;
			padding: 2rem 0 1rem 0;
			width: 90vw;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin: 0 auto 1rem auto;
			padding: 0 1rem;
			width: 100%;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1rem;
			width: 100% !important;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-diversity-section {
			padding: 5rem 15vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-separator {
			height: 70vw;
			margin: 0 auto;
			width: 70vw;
		}

		.profile-behavior-chart {
			margin: 2.5rem auto 5rem auto;
			padding: 2.5rem 0 1.25rem 0;
			width: 75%;
		}

		.profile-behavior-chart h2 {
			font-size: 2rem;
			margin: 0 auto 1.25rem auto;
			padding: 0 1.25rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.25rem;
			width: 100%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-diversity-section {
			padding: 5rem 20vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-separator {
			height: 45vw;
			margin: 0 auto;
			width: 45vw;
		}

		.profile-behavior-chart {
			margin: 2.5rem auto 5rem auto;
			padding: 2.5rem 0 1.25rem 0;
			width: 60%;
		}

		.profile-behavior-chart h2 {
			font-size: 2rem;
			margin: 0 auto 1.25rem auto;
			padding: 0 1.25rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.25rem;
			width: 100% !important;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-diversity-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-diversity-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 3rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 3rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 3rem auto;
		}

		#insights-diversity-separator {
			height: 35rem;
			margin: 0 auto;
			width: 35rem;
		}

		.profile-behavior-chart {
			margin: 3rem auto 6rem auto;
			padding: 3rem 0 1.5rem 0;
			width: 50%;
		}

		.profile-behavior-chart h2 {
			font-size: 2.5rem;
			margin: 0 auto 1.5rem auto;
			padding: 0 1.5rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.5rem;
			width: 100% !important;
		}
	}
</style>
