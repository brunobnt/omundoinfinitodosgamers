<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';

	import WorldImage from '$lib/assets/images/insights-legitimacy-world-image.svg';
	import DataImage1 from '$lib/assets/images/en/insights-legitimacy-data-1.svg';
	import DataImage2 from '$lib/assets/images/en/insights-legitimacy-data-2.svg';
	import DataImage3 from '$lib/assets/images/en/insights-legitimacy-data-3.svg';
	import DataImage4 from '$lib/assets/images/en/insights-legitimacy-data-4.svg';
	import WordPapers from '$lib/assets/images/en/insights-legitimacy-word-papers.svg';
	import ProfileImage from '$lib/assets/images/insights-legitimacy-profile-image.png';
	import HighlightImage from '$lib/assets/images/en/insights-legitimacy-highlight-image.svg';
</script>

<section id="insights-legitimacy-section">
	<Title type="special" color="red">1. Recognizing the legitimacy of the Gamesphere</Title>
	<Paragraph color="black">
		Knowing how to navigate <span class="weight-700"
			>the codes and experiences of the gaming world</span
		> is fundamental to connecting with and gaining the trust of those who play. Understanding the needs
		of those involved in games is the first step towards a relevant role in this universe.
	</Paragraph>
	<Image src={WorldImage} alt="" />
	<Title type="component" color="black">Fostering the ecosystem</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="black">People understand that brands can play a fundamental role:</Paragraph>
	<Paragraph color="black">
		<li>Supporting players</li>
		<li>Supporting content creators</li>
		<li>Creating or enabling championships</li>
	</Paragraph>
	<Paragraph color="black">
		There is a demand for companies that are committed to expanding and strengthening this
		ecosystem, investing in actions and not just in communication.
	</Paragraph>
	<Image src={WordPapers} alt="" />
	<Title type="component" color="black">Speak gaming lingo</Title>
	<Paragraph color="black">
		Gamers want brands to enter this environment. However, the gaming universe has its <span
			class="weight-700">own language and codes</span
		> - anyone who wants to be legitimized by the gaming community should consider incorporating them
		into their communication.
	</Paragraph>
	<Paragraph color="black">
		<span class="color-red weight-700">But be careful!</span> Using the wrong terms is worse than not
		using any gamer expression at all. If the brand is new to this universe, it's a good idea to take
		things slowly, identifying the most common terms in the community and incorporating the new glossary
		little by little.
	</Paragraph>
	<Image src={ProfileImage} alt="" />
	<Title type="component" color="black">
		Associate with those who are already recognized in the gamer community
	</Title>
	<Image src={DataImage2} alt="" />
	<Paragraph color="black">
		The brand doesn't have to and shouldn't act alone: <span class="weight-700"
			>partnering with content creators and personalities who are relevant</span
		> to the gamer community is a powerful strategy for gaining relevance and legitimacy among the public.
	</Paragraph>
	<Paragraph color="black">
		Content creation is in the hands of people, influencers who can be part of ORGs or be 100%
		independent.
	</Paragraph>
	<div id="insights-legitimacy-separator-1" />
	<Title type="component" color="black">Explore the game as a context for socialization</Title>
	<Paragraph color="black">
		One way of showing that the brand understands the role the game plays in the lives of those who
		play it is precisely to think of it as a backdrop for the development of <span
			class="weight-700">interpersonal relationships</span
		> - something that already happens in the lives of gamers and is highly valued.
	</Paragraph>
	<Paragraph color="black">
		Illustrating how the game can be part of the demonstration of affection and the routine of
		affective relationships of friendship, family and romance is a way of taking the logic of games
		that are more popular with the public to actions of loyalty and recommendation.
	</Paragraph>
	<div id="insights-legitimacy-separator-2" />
	<Title type="component" color="black">
		Consider the game as a meeting point between brand and consumer (on and off screen)
	</Title>
	<Paragraph color="black">
		The gaming environment can also serve as a place for brands do advertise and communicate on a
		wide variety of topics.
	</Paragraph>
	<Image src={DataImage3} alt="" />
	<Paragraph color="black">
		However, even in the virtual environment, <span class="weight-700"
			>the presence of products must always be contextualized</span
		>, serving <span class="weight-700">the story of the game</span> and the tasks that challenge the
		gamer. Bringing the brand in just for the sake of exposure is not the best way to participate in
		this scenario and the potential for connection it offers.
	</Paragraph>
	<Image src={DataImage4} alt="" />
	<Paragraph color="black">
		<span class="weight-700">Important:</span> this relationship does not have to be restricted to the
		online environment. It is possible (and desirable) for brands to take the gaming universe beyond
		the screen.
	</Paragraph>
	<Image src={HighlightImage} alt="" />
</section>

<style>
	#insights-legitimacy-section {
		background-color: var(--color-gray-light);
		overflow-x: clip;
	}

	#insights-legitimacy-separator-1,
	#insights-legitimacy-separator-2 {
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	#insights-legitimacy-separator-1 {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-1.svg');
	}

	#insights-legitimacy-separator-2 {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-2.svg');
	}

	#insights-legitimacy-section :global(img) {
		height: auto;
	}

	#insights-legitimacy-section :global(img:nth-of-type(8)) {
		max-width: unset;
	}

	@media only screen and (max-width: 768px) {
		#insights-legitimacy-section {
			padding: 4rem 7.5vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2rem 0;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 0 2rem 0;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2rem -7.5vw 0 -7.5vw;
			width: calc(100% + 15vw);
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(100vw / 1.5);
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-legitimacy-section {
			padding: 5rem 15vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.25rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(70vw / 1.5);
			margin: 2.5rem auto;
			width: calc(70vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-legitimacy-section {
			padding: 5rem 20vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.25rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto;
			width: 60%;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(45vw / 1.5);
			margin: 2.5rem auto;
			width: calc(45vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-legitimacy-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.5rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 3rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 3rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 3rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(35rem / 1.5);
			margin: 3rem auto;
			width: 35rem;
		}
	}
</style>
