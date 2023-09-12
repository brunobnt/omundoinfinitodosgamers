<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Statement from '$lib/components/Statement.svelte';

	import StatementAuthor from '$lib/assets/images/c2-statement-author-2.png';
	import GameComunicationChart from '$lib/assets/images/c2-chart-game-comunication.svg';
	import SocialPlatformsSymbols from '$lib/assets/images/c2-social-platforms.svg';

	const chartsData = [
		{
			file: '/charts/chapter-2/0.svg',
			title: 'Quando estou jogando, costumo me comunicar com meus amigos ou companheiros de equipe'
		},
		{
			file: '/charts/chapter-2/1.svg',
			title: 'Faço muitos amigos no ambiente do jogo'
		},
		{
			file: '/charts/chapter-2/2.svg',
			title: 'Costumo encontrar pessoas com quem jogo'
		},
		{
			file: '/charts/chapter-2/3.svg',
			title: 'Jogar me faz ampliar meu círculo de amizades'
		},
		{
			file: '/charts/chapter-2/4.svg',
			title: 'A maioria dos meus amigos/grupo social joga videogames'
		}
	];
</script>

<div id="league-social-cover">
	<Title type="special" color="blue">Socialização</Title>
	<Title type="special" color="blue">Coletividade Onipresente</Title>
</div>
<section id="league-social-section">
	<Paragraph color="blue-darker">
		O digital possibilita a conexão constante, que gera pertencimento e a sensação de não estar
		sozinho/a. Mais que isso, as pessoas se sentem o tempo todo em contato (ou com a possibilidade
		de estarem em contato) com as outras, jogando ou não.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, Executivo de Marketing"
			background="blue-darker"
			border="blue"
			color="white"
		>
			“Quando eu era adolescente, o jogo era individual, o máximo que você tinha era um contra o
			outro e a ocasião em que todo mundo se juntava para jogar. Isso acabou. Deixou de ser
			individual e passou a ser um jogo de time, onde a colaboração, o raciocínio lógico, traçar
			esquemas de jogo, desenvolver mapas, passaram a serem coletivos e eu acho que por isso que as
			comunidades aceleraram tanto.”
		</Statement>
	</div>
	<Title type="component" color="blue-darker">Comportamentos sociais dos diferentes perfis</Title>
	<Carousel>
		{#each chartsData as chart}
			<div class="profile-behavior-chart">
				<h2>{chart.title}</h2>
				<img src={base + chart.file} alt={chart.title} />
			</div>
		{/each}
	</Carousel>
	<Paragraph color="blue-darker">
		Interações sociais dentro da comunidade são intensas, as pessoas se unem por terem os mesmos
		gostos.
	</Paragraph>
	<div id="social-interaction-subsection">
		<Carousel>
			<PostIt
				title="Conhecer pessoas, fazer amigos, namorar"
				author="Homem, preto, 37 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“O mundo gamer é muito coletivo. Os jogos deixaram de ser uma atividade individual e
				passaram a ser uma atividade social em que a estratégia, o trabalho de equipe e a
				colaboração são fundamentais.”
			</PostIt>
			<PostIt
				title="Encontrar amigos no presencial"
				author="Mulher, branca, 24 anos, Rio de Janeiro, RJ"
				background="blue-dark"
				color="white"
			>
				“A Heineken lançou uma propaganda que o pessoal tá falando no WhatsApp ‘vamos se encontrar
				hoje no lugar de sempre’ e no fim você descobre que o lugar de sempre é o lobby de um jogo.”
			</PostIt>
			<PostIt
				title="Competir, cooperar"
				author="Homem, pardo, 35 anos, DF"
				background="blue-dark"
				color="white"
			>
				“Você entra com 5 pessoas, pra se divertir, o intuito daquele jogo você já fala: ‘Mano’,
				hoje eu vou me divertir, a gente não vai jogar competitivo, a gente vai testar campeão, vai
				ser engraçado e às vezes a gente não está nem prestando tanta atenção no jogo, a gente está
				ali mais pela comunhão.”
			</PostIt>
			<PostIt
				title="Trabalhar em equipe"
				author="Homem, Preto, 37 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Os gamers sempre estão trocando informações, ideias, acompanhando equipes. A conexão que
				começa nos jogos formam grandes amizades!”
			</PostIt>
			<PostIt
				title="Conversar enquanto joga"
				author="Homem, branco, 36 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Realizamos encontros, mantemos contato fora dos jogos. Quando algum companheiro está
				passando por dificuldades ou algum componente do computador estraga fazemos uma vaquinha e
				compramos o que é necessário para ajudar o nosso amigo.”
			</PostIt>
			<PostIt
				title="Comunicar-se enquanto joga"
				author="Mulher, Branca, 26 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Faço parte de grupos no Whats e Discord sobre o jogo Fórmula 1. Lá trocamos dicas de
				set-ups, informações sobre novas pistas e elaboramos lobbys de treino para ajudar nas pistas
				em que temos dificuldades.”
			</PostIt>
			<PostIt
				title="Ajudar-se mutuamente (no jogo e na vida)"
				author="Mulher, Branca, 26 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Há uns anos recebi muito apoio da comunidade gamer quando perdi meu avô, então para mim é
				uma comunidade muito solidária e importante.”
			</PostIt>
		</Carousel>
	</div>
	<Title type="component" color="blue-darker">
		Comunicação com amigos ou pessoas da equipe durante jogo
	</Title>
	<div class="display-flex-wrapper">
		<div>
			<Image src={GameComunicationChart} alt="" />
			<Legend color="blue-darker">
				Multiplataforma se refere aos jogadores que jogam em mais de uma plataforma, como PC,
				console, celular...
			</Legend>
		</div>
		<div id="social-platforms-content">
			<div id="social-platforms-content-frame">
				<Image src={SocialPlatformsSymbols} alt="" />
				<Paragraph align="center" color="blue-darker">
					Twitch, Discord, WhatsApp, YouTube, Twitter, Skype, Team Speak, etc., são plataformas que
					ajudam essa comunicação a acontecer.
				</Paragraph>
			</div>
		</div>
	</div>
</section>
<div id="league-social-epilogue">
	<Title type="subsection" color="white">
		Desenvolvem laços que evoluem para algo fora dos jogos
	</Title>
	<Paragraph color="white">
		A conexão profunda entre pessoas que os jogos promovem faz nascerem amizades, namoros e até
		casamentos. Relacionamentos duradouros nascem no ambiente online, expandem para o físico e se
		transformam para toda a vida.
	</Paragraph>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="Na saúde e na doença"
			author="Mulher, branca, 19 anos, Itupeva, SP"
			background="blue-dark"
			color="white"
		>
			“Pode acontecer de tudo dentro da comunidade, desde efetivamente jogar até sei lá… um
			casamento.”
		</PostIt>
		<PostIt
			title="Padrinho"
			author="Homem, preto, 30 anos, Belo Horizonte, MG"
			background="blue-dark"
			color="white"
		>
			“Já fui padrinho de casamento de um casal que se conheceu jogando Ragnarok online.”
		</PostIt>
		<PostIt
			title="Voz"
			author="Homem, preto, 29 anos, Recife, PE"
			background="blue-dark"
			color="white"
		>
			“Geralmente os nerds se gostam. Às vezes se apaixonam pela voz.”
		</PostIt>
	</Carousel>
</div>

<style>
	#league-social-cover {
		background-color: var(--color-background-darkblue);
		background-position: bottom center;
		background-repeat: no-repeat;
		overflow-x: clip;
	}

	#league-social-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	#league-social-section .display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	#social-interaction-subsection {
		align-items: center;
		background-image: linear-gradient(
				to top,
				var(--color-gray-light) 0%,
				rgba(0, 0, 0, 0) 50%,
				rgba(0, 0, 0, 0) 100%
			),
			url('$lib/assets/backgrounds/background-c2-social-faces.png');
		background-position: top left;
		display: flex;
		justify-content: center;
	}

	#social-platforms-content {
		border: 6px dashed var(--color-blue-normal);
	}

	#social-platforms-content-frame {
		border: 6px dashed var(--color-yellow-normal);
	}

	#social-platforms-content-frame :global(img) {
		width: 90%;
	}

	#league-social-epilogue {
		background-color: var(--color-blue-darker);
		overflow-x: clip;
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

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c2-social-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 55%,
					rgba(26, 29, 56, 0) 65%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: contain;
			padding: 4rem 7.5vw 16rem 7.5vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 2.25rem;
		}

		#league-social-section {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: column;
			margin: 0;
			width: 100%;
		}

		#social-interaction-subsection {
			background-size: 50%;
			margin: 4rem -7.5vw;
			padding: 16rem 7.5vw 0 7.5vw;
			width: calc(100% + 15vw);
		}

		#social-platforms-content {
			margin: 2rem 0 2rem -0.5rem;
			padding-bottom: -1rem;
			width: 100%;
		}

		#social-platforms-content-frame {
			padding: 2rem 3rem 1rem 2rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1rem;
		}

		#league-social-epilogue {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		.statement-wrapper {
			margin-bottom: 2rem;
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

		.highlight-image-wrapper {
			height: calc(100vw * 1.2);
			margin: 2rem -7.5vw -3.25rem -7.5vw;
			width: 100vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 30%,
					rgba(26, 29, 56, 0) 50%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: contain;
			padding: 2.5rem 15vw 20rem 15vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 3.25rem;
		}

		#league-social-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: column;
			margin: 0;
			width: 100%;
		}

		#social-interaction-subsection {
			background-size: 25%;
			margin: 5rem -15vw;
			padding: 10rem 15vw 0 15vw;
			width: calc(100% + 30vw);
		}

		#social-platforms-content {
			margin: 2.5rem 0 2.5rem -0.5rem;
			padding-bottom: -1.25rem;
			width: 75%;
		}

		#social-platforms-content-frame {
			padding: 2.5rem 3.25rem 1.25rem 2.5rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.25rem;
		}

		#league-social-epilogue {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		.statement-wrapper {
			margin-bottom: 2.5rem;
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

		.highlight-image-wrapper {
			height: calc(60vw * 1.2);
			margin: 2.5rem auto -4rem auto;
			width: 60vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 20%,
					rgba(26, 29, 56, 0) 40%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: cover;
			padding: 5rem 20vw 50rem 20vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 3.25rem;
		}

		#league-social-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: row;
			margin: 1.25rem -5vw 1.25rem -15vw;
			width: calc(100% + 20vw);
		}

		#social-interaction-subsection {
			background-size: 25%;
			margin: 5rem -20vw;
			padding: 10rem 20vw 0 20vw;
			width: calc(100% + 40vw);
		}

		#social-platforms-content {
			margin: 0 0 0 -0.5rem;
			padding-bottom: -1.25rem;
			width: 50%;
		}

		#social-platforms-content-frame {
			padding: 2.5rem 3.25rem 1.25rem 2.5rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.25rem;
		}

		#league-social-epilogue {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		.statement-wrapper {
			margin-bottom: 2.5rem;
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

		.highlight-image-wrapper {
			height: calc(40vw * 1.2);
			margin: 2.5rem auto -4rem auto;
			width: 40vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 25%,
					rgba(26, 29, 56, 0) 40%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: cover;
			padding: 6rem 0 45vw 0;
			padding-left: calc((100% - 50rem) / 4);
			padding-right: calc((100% - 50rem) / 4);
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 4.25rem;
		}

		#league-social-section {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: row;
			margin: 1.5rem -15rem 1.5rem -25rem;
			width: calc(100% + 40rem);
		}

		#social-interaction-subsection {
			background-size: 12.5%;
			margin: 6rem 0;
			margin-left: calc((-100vw + 50rem) / 2);
			margin-right: calc((-100vw + 50rem) / 2);
			padding: 12rem 0 0 0;
			width: 100vw;
		}

		#social-platforms-content {
			margin: 0 0 0 -0.5rem;
			padding-bottom: -1.5rem;
			width: 30%;
		}

		#social-platforms-content-frame {
			padding: 3rem 4.5rem 1.5rem 3rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.5rem;
		}

		#league-social-epilogue {
			padding: 5rem 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		.statement-wrapper {
			margin-bottom: 3rem;
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

		.highlight-image-wrapper {
			height: calc(35rem * 1.2);
			margin: 3rem auto -5rem auto;
			width: 35rem;
		}
	}
</style>
