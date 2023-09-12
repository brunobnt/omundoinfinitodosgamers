<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	import StatementAuthor from '$lib/assets/images/c4-statement-author.png';
	import GameRepresentationChart from '$lib/assets/images/c4-chart-game-representation.png';

	let quizData = [
		{
			word: 'FLAMER',
			options: [
				{ text: 'é o jogador que insulta em excesso os outros.', correct: true },
				{ text: 'é o jogador que gosta de jogar com personagens do elemento fogo.', correct: false }
			]
		},
		{
			word: 'GRIEFING',
			options: [
				{
					text: 'Agir dentro do jogo de maneira a atrapalhar a experiência de jogo dos demais.',
					correct: true
				},
				{
					text: 'Jogadores que gostam de se mostrar no jogo usando skins (itens cosméticos) caras.',
					correct: false
				}
			]
		},
		{
			word: 'SPAMMING',
			options: [
				{
					text: 'Mandar muitas mensagens no chat do jogo atrapalhando as conversas.',
					correct: true
				},
				{ text: 'Ignorar pessoas que têm comportamentos tóxicos nos chats.', correct: false }
			]
		},
		{
			word: 'TROLLAGEM',
			options: [
				{ text: 'Sacanear, enganar ou zoar participantes em chats e fóruns.', correct: true },
				{ text: 'Usar palavrões em chats e fóruns na internet.', correct: false }
			]
		},
		{
			word: 'BM',
			options: [
				{
					text: 'gíria de Bad Manners - ser uma pessoa de comportamento ruim no jogo.',
					correct: true
				},
				{
					text: 'gíria do inglês para BooMers, que significa alguém muito velho para jogar.',
					correct: false
				}
			]
		}
	];
</script>

<section id="toxic-environment-section-intro">
	<div id="toxic-environment-section-smoke" />
	<Title type="special" color="green-darker">Ambiente</Title>
	<Title type="subsection" color="black">Um mundo que permite comportamentos tóxicos</Title>
	<Paragraph color="black">
		Muitas vezes os jogadores desenvolvem entre si dinâmicas violentas na linguagem e trato com os
		demais.
	</Paragraph>
</section>
<section id="toxic-environment-section-content">
	<div id="toxic-environment-pipes-wrapper" />
	<Carousel>
		<PostIt
			title="Saúde Mental"
			author="Mulher, branca, 27 anos, Brasília, DF"
			background="green"
			color="green-darker"
		>
			“Ultimamente eu estou jogando mais LoL e no mundo do League of Legends você tira a sanidade
			mental das pessoas ou você perde a sua, porque as pessoas costumam xingar muito, o verbo
			tiltar, de ficar com raiva mesmo e ‘descoisar’ toda a raiva dele em você.”
		</PostIt>
		<PostIt
			title="Leis"
			author="Homem, preto, 23 anos, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“A internet é uma terra sem lei.”
		</PostIt>
	</Carousel>
	<Paragraph color="black">
		É comum esconder sua verdadeira identidade nos nicknames e isso, aliado ao que estudiosos chamam
		de “desinibição online”, gera um ambiente tóxico.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="John Suler, autor e professor de psicologia na Rider University"
			background="green-darker"
			border="green"
			color="white"
		>
			“É a segurança proporcionada pelo digital para praticar comportamentos não aceitos fora dela,
			como o excesso de críticas, linguagem obscena, ameaças e agressão verbal.”
		</Statement>
	</div>
	<div id="vocabulary-test-wrapper">
		<div>
			<Title type="subsection" color="green-darker">Glossário do jogo tóxico</Title>
			<Paragraph color="black">
				Até o dicionário da Jogosfera possui termos específicos para designar atitudes tóxicas.
				Clique nas traduções abaixo para tentar adivinhar o que eles significam:
			</Paragraph>
		</div>
		<Quiz data={quizData} />
	</div>
	<Title type="subsection" color="green-darker">Ambiente pouco regulado</Title>
	<Paragraph color="black">
		O anonimato também permite que todo tipo de preconceito seja exposto. E não há uma regulação
		eficiente no ambiente digital, como as leis e punições do mundo real.
	</Paragraph>
	<div class="special-postit-wrapper">
		<PostIt
			title="Crime no digital"
			author="Homem, preto, 37 anos, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“Em 2020, um jogador sofreu ataques racistas durante partida do Valorant. Infelizmente não é
			um caso isolado, isso ocorre com uma certa regularidade, é preciso que as plataformas tenham
			mais pulso para banir e lesar essas pessoas, além da questão judicial ser acionada.”
		</PostIt>
	</div>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, wildlife"
			background="green-darker"
			border="green"
			color="white"
		>
			“Acho que é uma minoria (barulhenta, mas minoria), que ainda é contra as iniciativas de
			diversidade que as desenvolvedoras e o mercado têm proposto. A gente tenta não se inibir
			porque acredita que tem mais pontos positivos do que negativos em ações desse tipo.”
		</Statement>
	</div>
	<Paragraph color="black">
		Apesar de existir um movimento de inclusão do mercado, os esforços não acompanham a velocidade
		das mudanças. Muitos ainda não se reconhecem nos cenários e personagens dos jogos e não se
		sentem representados em suas diversidades em jogos e campeonatos.
	</Paragraph>
	<Image src={GameRepresentationChart} alt="" />
	<Legend color="black">
		Estudo que compilou a quantidade de personagens de mais de 100 jogos lançados entre 2017 e 2021
		/ Fonte: <a href="https://diamondlobby.com/geeky-stuff/diversity-in-gaming/" target="_blank">
			Diversity in Gaming Report: An Analysis of Diversity in Video Game Characters</a
		>.
	</Legend>
	<Carousel>
		<PostIt
			title="Personagem cadeirante"
			author="Pessoa não binária, parda, 33 anos, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Todos deveriam ter uma chance de se ver nos jogos. Nunca esqueço o fenômeno que foi quando o
			filme do Pantera Negra foi aos cinemas e pessoas negras se sentiram representados e sentiram o
			que é pra uma pessoa branca que se vê sempre nas telas sendo representada como herói e tendo
			sua cultura difundida. O mesmo deveria ser com jogos. Um desses exemplos foi quando descobri
			que num dos meus jogos favoritos pra jogar com amigos, 'Overcooked', um dos personagens é
			cadeirante. Me fez pensar muito no que isso representava e no como cadeirantes não tinham
			personagens com quem eles pudessem se vincular no mundo dos games.”
		</PostIt>
		<PostIt
			title="Personagens carregam histórias e representatividade"
			author="Mulher, Branca, 35, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Uma vez que em uma comunidade online a representação das pessoas passa pelo personagem, é
			fundamental que eles sejam mais diversos e representem de forma mais adequadas as mulheres,
			principalmente por causa do reflexo disso na 'vida real', mas também por causa do tratamento
			que as mulheres recebem dentro do ambiente dos games.”
		</PostIt>
		<PostIt
			title="Progressos"
			author="Homem, branco, 33 anos, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“A indústria dos jogos tem feito progressos na inclusão de personagens e narrativas diversas,
			mas ainda há muito espaço para melhorias. Os jogos podem promover a representação de
			diferentes grupos étnicos, culturais, de gênero, LGBTQIA+ e pessoas com deficiência, para que
			todos possam se sentir incluídos e representados.”
		</PostIt>
	</Carousel>
</section>

<style>
	#toxic-environment-section-intro {
		background-color: var(--color-green-normal);
		overflow-x: clip;
	}

	#toxic-environment-section-smoke {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-2.svg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		position: relative;
		z-index: 1;
	}

	#toxic-environment-section-content {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#toxic-environment-pipes-wrapper {
		background-image: url('$lib/assets/images/c4-toxic-pipes.png');
		background-position: center center;
		background-size: cover;
	}

	#vocabulary-test-wrapper {
		display: flex;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		justify-content: center;
	}

	.special-postit-wrapper {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-3.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#toxic-environment-section-intro {
			padding: 2rem 7.5vw;
		}

		#toxic-environment-section-smoke {
			height: calc(200vw * 0.75);
			left: -7.5vw;
			margin: 0 -50vw;
			margin-bottom: calc(200vw * -0.375);
			top: calc(200vw * -0.25);
			width: 200vw;
		}

		#toxic-environment-section-content {
			padding: 0 7.5vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 20rem;
			margin: 0 -7.5vw -8rem -7.5vw;
			width: calc(100% + 15vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2rem 0;
			gap: 0;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		.special-postit-wrapper {
			margin: 0rem -7.5vw 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-environment-section-intro {
			padding: 2.5rem 15vw;
		}

		#toxic-environment-section-smoke {
			height: calc(150vw * 0.75);
			left: -15vw;
			margin: 0 -22.5vw;
			margin-bottom: calc(150vw * -0.375);
			top: calc(150vw * -0.25);
			width: 150vw;
		}

		#toxic-environment-section-content {
			padding: 0 15vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2.5rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 25rem;
			margin: 0 -15vw -5rem -15vw;
			width: calc(100% + 30vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2.5rem 0;
			gap: 0;
		}

		.statement-wrapper {
			margin: 1.25rem -15vw 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}

		.special-postit-wrapper {
			margin: 0rem -15vw 2.5rem -15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-environment-section-intro {
			padding: 2.5rem 20vw;
		}

		#toxic-environment-section-smoke {
			height: calc(100vw * 0.75);
			left: -20vw;
			margin: 0;
			margin-bottom: calc(100vw * -0.375);
			top: calc(100vw * -0.25);
			width: 100vw;
		}

		#toxic-environment-section-content {
			padding: 0 15vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2.5rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 30rem;
			margin: 0 -20vw -10rem -20vw;
			width: calc(100% + 40vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 2.5rem 0;
			gap: 2.5rem;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}

		.special-postit-wrapper {
			margin: 0rem -20vw 2.5rem -20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-environment-section-intro {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-environment-section-smoke {
			height: calc(90rem * 0.75);
			left: -20rem;
			margin: 0;
			margin-bottom: calc(90rem * -0.4);
			top: calc(90rem * -0.25);
			width: 90rem;
		}

		#toxic-environment-section-content {
			padding: 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 3rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 40rem;
			margin: 0 0 -12rem 0;
			width: calc(100vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 3rem 0;
			gap: 3rem;
		}

		.statement-wrapper {
			margin: 3rem 0 6rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}

		.special-postit-wrapper {
			margin: 0rem 0 3rem 0;
			width: calc(100vw);
		}
	}
</style>
