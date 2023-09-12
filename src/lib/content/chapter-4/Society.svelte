<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import GTAImage from '$lib/assets/images/c4-gta-image.gif';
	import SocietySectionCover from '$lib/assets/images/c4-society-intro-cover.png';
	import DiscriminationEvolutionChart from '$lib/assets/images/c4-chart-discrimination-evolution.svg';
	import DiscriminationBigNumbers from '$lib/assets/images/c4-discrimination-big-numbers.svg';
	import SocietySectionHighlight from '$lib/assets/images/c4-society-highlight-image.svg';
	import DiscriminationGroupsChart from '$lib/assets/images/c4-chart-discrimination-groups.png';
</script>

<div id="gta-gif-wrapper">
	<Image src={GTAImage} alt="" />
	<Legend align="center" color="white">GTA San Andreas. Créditos: Rockstar Games.</Legend>
</div>
<section id="toxic-society-section">
	<Title type="special" color="green">Sociedade da Jogosfera</Title>
	<div class="image-wrapper">
		<Image src={SocietySectionCover} alt="" />
	</div>
	<Title type="component" color="green">
		A presença de diversos tipos de preconceitos teve crescimento de 2017 para 2023
	</Title>
	<Image src={DiscriminationEvolutionChart} alt="" />
	<Legend color="white">
		Percentual de pessoas que responderam que já presenciaram ou sofreram cada tipo de preconceito.
	</Legend>
	<Title type="component" color="green">
		Depoimentos sobre diferentes preconceitos sofridos online
	</Title>
	<Carousel>
		<PostIt
			title="Assédio"
			author="Mulher, Branca, 26 anos, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“Além da dificuldade de skins, também é muito complicado lidar com os assediadores online.
			Sempre com muitas palavras chulas e isso faz com que muitas mulheres não suportem a pressão e
			deixem de jogar por esses incômodos.”
		</PostIt>
		<PostIt
			title="Capacitismo"
			author="Homem, Pardo, 20 anos, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“Eu já presenciei diversos tipos de preconceito, inclusive já sofri algumas vezes capacitismo.
			Para melhorar essa questão é necessário levar informação de que alguns termos usados nos games
			são pejorativos e ofensivos.”
		</PostIt>
		<PostIt
			title="Homofobia"
			author="Homem, Preto, 23 anos, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Por eu ser um homem gay, já passei por situações de preconceitos com jogos online onde
			procurei denunciar a conta do jogador para a plataforma, o que resultou no banimento dele.”
		</PostIt>
		<PostIt
			title="Classe social"
			author="Homem, Preto, 23 anos, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“Existe bastante preconceito em todos os games. Mais ainda quando se é preto de favela. Já
			reconhecem só pela nossa gíria e não mudou: só piorou o que já estava ruim.”
		</PostIt>
		<PostIt
			title="Racismo latente"
			author="Homem, Branco, 26 anos, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“A comunidade tende a ser bem preconceituosa, assim como vemos na internet. Racismo é o mais
			latente.”
		</PostIt>
		<PostIt
			title="Preconceito político"
			author="Homem, Pardo, 20 anos, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“Vejo pessoas discutindo sobre política e gerando conflitos com ofensas.”
		</PostIt>
	</Carousel>
	<Paragraph color="green">
		A percepção de que sofreu ou presenciou situações de preconceito é ainda maior
		<span class="weight-700">entre as pessoas com idades entre 16 e 26 anos</span>.
	</Paragraph>
	<Image src={DiscriminationBigNumbers} alt="" />
	<Paragraph color="green">
		O grupo de pessoas mais jovens também tem uma percepção maior do
		<span class="weight-700">preconceito político, novidade da pesquisa de 2023</span>.
	</Paragraph>
	<Image src={SocietySectionHighlight} alt="" />
	<Title type="component" align="center" color="green">
		Essa percepção é ainda mais crítica entre os grupos:
	</Title>
	<div class="chart-wrapper">
		<Image src={DiscriminationGroupsChart} alt="" />
	</div>
</section>

<style>
	#gta-gif-wrapper {
		align-items: center;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#gta-gif-wrapper :global(.p-legend) {
		border-top: none;
		margin-top: 0;
	}

	#toxic-society-section {
		align-items: center;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	.image-wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.image-wrapper :global(img) {
		margin: 0;
	}

	.chart-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		#gta-gif-wrapper {
			padding: 0;
		}

		#toxic-society-section {
			padding: 4rem 7.5vw;
		}

		#toxic-society-section > :global(h5) {
			margin-top: 4rem;
		}

		#toxic-society-section :global(img:nth-of-type(2)),
		#toxic-society-section :global(img:nth-of-type(3)) {
			margin: 2rem 0;
		}

		.image-wrapper {
			width: 150vw;
		}

		.chart-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#gta-gif-wrapper {
			padding: 2.5rem 0;
		}

		#toxic-society-section {
			padding: 5rem 15vw;
		}

		#toxic-society-section > :global(h5) {
			margin-top: 5rem;
		}

		#toxic-society-section :global(img:nth-of-type(2)),
		#toxic-society-section :global(img:nth-of-type(3)) {
			margin: 2.5rem 0;
		}

		.image-wrapper {
			width: 125vw;
		}

		.chart-wrapper {
			margin: 2.5rem -15vw 5rem -15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#gta-gif-wrapper {
			padding: 2.5rem 10vw;
		}

		#toxic-society-section {
			padding: 5rem 20vw;
		}

		#toxic-society-section > :global(h5) {
			margin-top: 5rem;
		}

		#toxic-society-section :global(img:nth-of-type(2)),
		#toxic-society-section :global(img:nth-of-type(3)) {
			margin: 2.5rem 0;
		}

		.image-wrapper {
			width: 100vw;
		}

		.chart-wrapper {
			margin: 2.5rem -20vw 5rem -20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#gta-gif-wrapper {
			padding: 3rem 20vw;
		}

		#toxic-society-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-society-section > :global(h5) {
			margin-top: 6rem;
		}

		#toxic-society-section :global(img:nth-of-type(2)),
		#toxic-society-section :global(img:nth-of-type(3)) {
			margin: 3rem 0;
		}

		.image-wrapper {
			width: 75vw;
		}

		.chart-wrapper {
			margin: 3rem 0 6rem 0;
			width: 100rem;
		}
	}
</style>
