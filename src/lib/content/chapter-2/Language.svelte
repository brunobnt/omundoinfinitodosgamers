<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	import MemeImage1 from '$lib/assets/images/c2-language-meme-1.png';
	import MemeImage2 from '$lib/assets/images/c2-language-meme-2.png';
	import MemeImage3 from '$lib/assets/images/c2-language-meme-3.png';
	import MemeImage4 from '$lib/assets/images/c2-language-meme-4.png';
</script>

<section id="league-language-section">
	<Title type="special" color="yellow-darker">Idioma Próprio</Title>
	<Paragraph color="yellow-darker">
		A imersão em diferentes mundos ajuda a construir o senso de pertencimento: você fazendo parte de
		uma história, de um mundo lúdico, junto com outras pessoas, buscando as mesmas coisas, falando a
		mesma língua.
	</Paragraph>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="Trocar dicas"
			author="Homem, Branco, 33, São Paulo, SP"
			background="yellow"
			color="yellow-darker"
		>
			“Existe uma linguagem própria da comunidade. Falas de momentos de jogos que se tornam
			marcantes, de eventos de premiações, de pessoas relevantes da área, onde só as pessoas que
			vivem nesse círculo conhecem e entendem.”
		</PostIt>
		<PostIt
			title="Idioma compartilhado"
			author="Mulher, Preta, 43 anos, Matinhos, PR"
			background="yellow"
			color="yellow-darker"
		>
			“Acaba por se tornar uma grande comunidade, a começar pela linguagem utilizada, é um tipo de
			idioma compartilhado por gamers que não é usual fora dos jogos.”
		</PostIt>
	</Carousel>
	<div id="vocabulary-test-wrapper">
		<div>
			<Title type="component" color="yellow-darker">
				Faça o teste: quais os termos da linguagem gamer você conhece?
			</Title>
			<Paragraph color="yellow-darker">
				Selecione a opção que você acha que traduz o termo para revelar o correto
			</Paragraph>
		</div>
		<Quiz />
	</div>
	<Carousel>
		<Image src={MemeImage1} alt="" />
		<Image src={MemeImage2} alt="" />
		<Image src={MemeImage3} alt="" />
		<Image src={MemeImage4} alt="" />
	</Carousel>
	<Legend color="yellow-darker">
		Quando você finalmente entende o meme e se sente parte do grupo.
	</Legend>
</section>

<style>
	#league-language-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
	}

	#league-language-section :global(.carousel-container) {
		margin-bottom: 0;
	}

	#vocabulary-test-wrapper {
		display: flex;
	}

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/background-c2-language-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#league-language-section {
			padding: 2rem 7.5vw 4rem 7.5vw;
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2rem 0;
			gap: 0;
		}

		.highlight-image-wrapper {
			height: calc(100vw * 0.85);
			margin: 1rem 0 -2.5rem 0;
			width: 100vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-language-section {
			padding: 2.5rem 15vw 5rem 15vw;
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2.5rem 0;
			gap: 0;
		}

		.highlight-image-wrapper {
			height: calc(30rem * 0.85);
			margin: 1.25rem auto -2.75rem auto;
			width: 30rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-language-section {
			padding: 2.5rem 20vw 5rem 20vw;
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 2.5rem 0;
			gap: 2.5rem;
		}

		.highlight-image-wrapper {
			height: calc(30rem * 0.85);
			margin: 1.25rem auto -2.75rem auto;
			width: 30rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-language-section {
			padding: 3rem 0 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 3rem 0;
			gap: 3rem;
		}

		.highlight-image-wrapper {
			height: calc(35rem * 0.85);
			margin: 1.5rem auto -3rem auto;
			width: 35rem;
		}
	}
</style>
