<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Quiz from '$lib/components/en/Quiz.svelte';

	import MemeImage1 from '$lib/assets/images/c2-language-meme-1.png';
	import MemeImage2 from '$lib/assets/images/c2-language-meme-2.png';
	import MemeImage3 from '$lib/assets/images/c2-language-meme-3.png';
	import MemeImage4 from '$lib/assets/images/c2-language-meme-4.png';
</script>

<section id="league-language-section">
	<Title type="special" color="yellow-darker">Their Own Language</Title>
	<Paragraph color="yellow-darker">
		Being immersed in different worlds helps build a sense of belonging: you're part of a story, a
		playful world, with other people, looking for the same things, speaking the same language.
	</Paragraph>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="Exchanging tips"
			author="Male, 33 years old, São Paulo, SP"
			background="yellow"
			color="yellow-darker"
		>
			“The community has its own language. We talk about moments in games that are memorable, award
			events, relevant people in the field, where only people who live in this circle know and
			understand.”
		</PostIt>
		<PostIt
			title="Shared language"
			author="Female, 43 years old, Matinhos, PR"
			background="yellow"
			color="yellow-darker"
		>
			“It ends up becoming a great community, starting with the language used, it's a type of
			language shared by gamers that isn't usual outside of games.”
		</PostIt>
	</Carousel>
	<div id="vocabulary-test-wrapper">
		<div>
			<Title type="component" color="yellow-darker">
				Take the quiz: which gamer slangs do you know?
			</Title>
			<Paragraph color="yellow-darker">
				Select the option that you think translates the term to reveal the correct one
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
		When you finally understand the meme and feel part of the group.
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
		background-image: url('$lib/assets/backgrounds/en/background-c2-language-highlight.png');
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
