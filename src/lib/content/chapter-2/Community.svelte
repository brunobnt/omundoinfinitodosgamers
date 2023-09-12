<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Highlight from '$lib/components/Highlight.svelte';

	import CoverImage from '$lib/assets/images/c2-community-section-cover.svg';
	import CommunityComplexity from '$lib/assets/images/c2-community-complexity.png';
</script>

<section id="league-community-section">
	<div id="league-community-cover">
		<Title type="special" align="center" color="white">Fractal de comunidades</Title>
		<Image src={CoverImage} alt="" />
	</div>
	<div id="league-community-content">
		<div class="display-flex-wrapper">
			<div>
				<Paragraph color="blue-darker">
					A solidariedade (quantidade de interação dentro de um grupo social) e efervescência
					coletiva (uma coletividade que se une para se expressar em conjunto, por compartilhar dos
					mesmos gostos) promovem a conexão que forma uma ou muitas comunidades.
				</Paragraph>
				<Title type="component" color="blue-darker">
					Entenda a complexidade dessas comunidades:
				</Title>
			</div>
			<Image src={CommunityComplexity} alt="" />
		</div>
		<Carousel>
			<PostIt
				title="Identidade e plataforma"
				author="Mulher, Branca, 25 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Como toda comunidade, tem seus nichos e nem todos se dão bem entre si - tem incels, tem
				gaymers, tem nintendistas, etc - mas todos unidos pelo interesse comum em jogar, apoiar o
				desenvolvimento da indústria que gira em torno dos games e competir.”
			</PostIt>
			<PostIt
				title="Jogos"
				author="Homem, Preto, 25 anos, Recife, PE"
				background="blue-dark"
				color="white"
			>
				“No mundo dos games as comunidades se criam em torno dos jogos, franquias e marcas e possuem
				formas de se comunicar nos diversos tipos de plataformas, seja nos jogos, redes sociais e
				até mesmo encontros presenciais.”
			</PostIt>
			<PostIt
				title="Comunidade"
				author="Homem, Pardo, 37 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Toda uma galera que se reúne com interesses comuns é uma comunidade. Assim como a
				comunidade do carnaval, do vôlei de praia, a comunidade do e-sports também deve ser
				considerada.”
			</PostIt>
			<PostIt
				title="Identidade"
				author="Mulher, Branca, 25 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Outras comunidades - como a lgbtqia+, têm discussões que são internas. Mas para fora
				estamos unidos pela causa de normalizar os games como entretenimento e desmistificar a
				imagem do “gamer”. E nos reunimos em fóruns para discutir os avanços e problemas da
				comunidade.”
			</PostIt>
			<PostIt
				title="Jogos"
				author="Homem, Branco, 35 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				"Existem gostos muito diversos. Tem comunidades menores onde os jogadores têm mais
				identificação um com o outro. Por exemplo, existem pessoas que só jogam FPS (como CS),
				existem pessoas que curtem somente jogos survival, existem pessoas que curtem jogos com uma
				história e montar fanfics para preencher lacunas dos roteiros.”
			</PostIt>
			<PostIt
				title="Tipos de Jogos"
				author="Homem, Branco, 29 anos, Niterói, RJ"
				background="blue-dark"
				color="white"
			>
				“Todos têm uma coisa em comum: o amor por jogos. Mas uma forma de aliviar a imensidão é
				dividir a comunidade em categorias. Por exemplo, quem gosta de LoL, pode frequentar diversos
				grupos sobre.”
			</PostIt>
			<PostIt
				title="Influencers"
				author="Homem, Branco, 52 anos, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Maior prova de subcomunidades é a Tribo do Gaulês.”
			</PostIt>
		</Carousel>
	</div>
	<div id="league-community-conclusion">
		<Highlight align="center" color="white">
			Quem joga se sente parte de uma grande comunidade, conectada pelo amor e afeto pelos jogos;
			por um idioma próprio; e pela criação de laços sociais que se ampliam para fora dos jogos e do
			digital.
		</Highlight>
	</div>
</section>

<style>
	#league-community-cover {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		overflow-x: clip;
	}

	#league-community-cover :global(img) {
		width: 100%;
	}

	#league-community-content {
		background-color: var(--color-gray-light);
	}

	#league-community-content :global(h5) {
		margin-bottom: 0;
	}

	#league-community-content .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#league-community-conclusion {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#league-community-cover {
			padding-top: 4rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 4rem;
		}

		#league-community-cover :global(img) {
			margin-top: 4rem;
		}

		#league-community-content {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#league-community-content :global(img) {
			margin-bottom: 2rem;
		}

		#league-community-conclusion {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-community-cover {
			padding-top: 5rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 5rem;
		}

		#league-community-cover :global(img) {
			margin-top: 5rem;
			width: 75%;
		}

		#league-community-content {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#league-community-content :global(img) {
			margin-bottom: 2.5rem;
		}

		#league-community-conclusion {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-community-cover {
			padding-top: 5rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 5rem;
		}

		#league-community-cover :global(img) {
			margin-top: 5rem;
			width: 60%;
		}

		#league-community-content {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
		}

		#league-community-content .display-flex-wrapper :global(img) {
			width: 55%;
		}

		#league-community-content :global(img) {
			margin-bottom: 2.5rem;
		}

		#league-community-conclusion {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-community-cover {
			padding-top: 6rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 6rem;
		}

		#league-community-cover :global(img) {
			margin-top: 6rem;
			width: 50%;
		}

		#league-community-content {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			overflow-x: clip;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
		}

		#league-community-content .display-flex-wrapper :global(img) {
			width: 55%;
		}

		#league-community-content :global(img) {
			margin-bottom: 3rem;
		}

		#league-community-conclusion {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
