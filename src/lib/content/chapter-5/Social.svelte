<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import StatementAuthor from '$lib/assets/images/c5-statement-author-2.png';
	import AfrogamesImage from '$lib/assets/images/c5-afrogames-image.svg';
	import PerifaconImage from '$lib/assets/images/c5-perifacon-image.svg';
	import TDFImage from '$lib/assets/images/c5-tdf-image.svg';
</script>

<section id="map-social-section">
	<Title type="special" color="black">Transformação Social</Title>
	<Paragraph color="black">
		Iniciativas sociais fomentam o cenário e estimulam jovens de baixa renda ou com menor acesso a
		se sustentar e melhorar as suas realidades a partir dos jogos.
	</Paragraph>
	<Carousel>
		<PostIt
			title="Game como trabalho"
			author="Homem, pardo, 20 anos, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“Os jogos são de extrema importância para mim, porque antes era um hobby e hoje se tornou um +
			trabalho. Os games me ajudaram a me desenvolver pessoalmente e profissionalmente.”
		</PostIt>
		<PostIt
			title="Viver do meu sonho"
			author="Homem, pardo, 22 anos, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“Graças aos games eu consegui sair da casa dos meus pais e viver do meu sonho, e conquistar
			tudo que venho conquistando até hoje!”
		</PostIt>
		<PostIt
			title="Bolsa atleta"
			author="Homem, pardo, 15 anos, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“O jogo continua fazendo parte da minha vida em questão de ajudar meus pais, pois eu sou
			profissional e recebo uma bolsa atleta por isso.”
		</PostIt>
	</Carousel>
	<Highlight color="black">Iniciativas da periferia e das favelas:</Highlight>
	<Title type="subsection" color="black">Afrogames</Title>
	<Paragraph color="black">
		A AfroGames treina no jogo, ensina inglês e tecnologia e oferece uma estrutura para que os
		jovens consigam trabalhar em diferentes partes da indústria: design, programação, trilha sonora,
		conteúdo e outros.
	</Paragraph>
	<Image src={AfrogamesImage} alt="" />
	<br />
	<iframe
		width="560"
		height="315"
		src="https://www.youtube-nocookie.com/embed/GqmDQSFN-_I?controls=0"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, Afrogames"
			background="red-darker"
			border="red"
			color="white"
		>
			“O jovem da favela que aprende futebol, só aprende futebol. O jovem que aprende a ser gamer,
			aprende a trabalhar em planilha, a usar o computador, aprende inglês, está mais preparado para
			o mercado de trabalho como um todo, mesmo que ele não vire um jogador profissional.”
		</Statement>
	</div>
	<Title type="subsection" color="black">Perifacon</Title>
	<Paragraph color="black">
		PerifaCon é uma plataforma que reúne histórias em quadrinhos e cultura pop, com eventos que são
		realizados desde 2019 com foco em integrar a cultura nerd ao público periférico de São Paulo. Na
		edição de 2023, o evento passou a integrar também o universo dos jogos com o Gamer Perifa,
		através de bate papos e painéis sobre jogos independentes e seus desenvolvedores.
	</Paragraph>
	<Image src={PerifaconImage} alt="" />
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, fundadora da Perifacon"
			background="red-darker"
			border="red"
			color="white"
		>
			“Nesta edição a gente trouxe um espaço para dialogar sobre os jogos, trouxe a galera do
			esporte eletrônico, porque a gente entende muito que os games tem um potencial de mudar a vida
			das pessoas. A nossa grande vontade era trazer um pouco mais dessa vivência para as pessoas
			que querem entender mais sobre games, sobre como fazer jogo, como funciona esse universo, e
			entender a possibilidade de empregabilidade que ele tem.”
		</Statement>
	</div>
	<Title type="subsection" color="black">Taça das Favelas Free Fire - CUFA</Title>
	<Paragraph color="black">
		A Taça das Favelas Free Fire é o maior campeonato de Free Fire entre favelas. Criada e realizada
		pela CUFA e Garena em 2020, contou com apoio da Globo e Loud e em 2022 passou a ter patrocínio
		master do Itaú e contou com mais de 60 mil inscritos. Hoje é totalmente produzida por e pela
		favela (produção de vídeo, evento, comunicação, etc.).
	</Paragraph>
	<Image src={TDFImage} alt="" />
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, Taça da Favelas / CUFA"
			background="red-darker"
			border="red"
			color="white"
		>
			“A Taça das Favelas Free Fire surge na pandemia como alternativa ao campeonato de futebol que
			começou em 2011. A gente decidiu ir para um caminho que ainda conseguisse engajar as
			comunidades, principalmente os jovens das favelas e escolheu o Free Fire por ser um jogo
			democrático, que era e ainda é o principal jogo jogado nas favelas e super fácil de rodar em
			qualquer celular. Desde o começo, tivemos parceria com a Garena, e o campeonato vai se
			desenvolvendo de uma forma que a partir de 2021 a gente consegue fazer ele todo por pessoas
			das favelas e por produtos de favelas: a gente usa a Digital Favela pra divulgar, os seus
			influenciadores para aumentar o alcance da competição, produzimos todos os vídeos com a Favela
			Filmes, usou a comunidade pra criar banner, distribuiu chip de internet pros jogadores.”
		</Statement>
	</div>
</section>

<style>
	#map-social-section {
		align-items: center;
		background-color: var(--color-blue-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#map-social-section > :global(iframe) {
		max-width: 100%;
	}

	.statement-wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#map-social-section {
			padding: 4rem 7.5vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.25rem;
			width: 100%;
		}

		#map-social-section > :global(iframe) {
			min-height: 15rem;
			max-width: 100%;
		}

		.statement-wrapper {
			margin: 0 -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#map-social-section {
			padding: 5rem 15vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.5rem;
			width: 100%;
		}

		#map-social-section > :global(iframe) {
			min-height: 20rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 0 -15vw 2.5rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-social-section {
			padding: 5rem 20vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.5rem;
			width: 75%;
		}

		#map-social-section > :global(iframe) {
			min-height: 22.5rem;
			width: 75%;
		}

		.statement-wrapper {
			margin: 0 -20vw 2.5rem -20vw;
			padding: 0 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-social-section {
			padding: 5rem 20vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.75rem;
			width: 70%;
		}

		#map-social-section > :global(iframe) {
			min-height: 25rem;
			width: 70%;
		}

		.statement-wrapper {
			margin: 0 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: 100vw;
		}
	}
</style>
