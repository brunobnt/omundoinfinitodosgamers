<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';

	import WorldImage from '$lib/assets/images/insights-environment-world-image.svg';
	import DataImage1 from '$lib/assets/images/en/insights-environment-data-1.svg';
	import DataImage2 from '$lib/assets/images/en/insights-environment-data-2.svg';
	import HighlightImage from '$lib/assets/images/en/insights-environment-highlight-image.svg';
</script>

<section id="insights-environment-section">
	<Title type="special" color="yellow">
		3. Transforming the Gamesphere into a friendlier environment
	</Title>
	<Paragraph color="white">
		The Gamesphere has room for everyone. However, <span class="weight-700"
			>not everyone feels comfortable</span
		> or welcome in this universe. There is no shortage of initiatives to change this reality, but but
		they are very early efforts.
	</Paragraph>
	<Paragraph color="white">
		There is an opportunity for <span class="weight-700"
			>brands to be protagonists in this moment of transformation</span
		>, embracing initiatives to transform this space into a more positive and inclusive environment.
	</Paragraph>
	<Image src={WorldImage} alt="" />
	<Title type="component" color="white">Promoting a healthy relationship with gaming</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="white">
		Brands can (and should) encourage a healthy relationship with gaming, exploring its potential
		and discouraging abuse.
	</Paragraph>
	<Paragraph color="white">
		Care must be taken not to encourage alienation from gaming, whether through its impact on sleep
		routines, exercise or even social interaction.
	</Paragraph>
	<Paragraph color="white">
		Gaming is just one of the activities that are part of a person's day-to-day life, and brands can
		adopt attitudes to promote personal well-being, proposing a balance between the time dedicated
		to gaming and other tasks, for example.
	</Paragraph>
	<Title type="component" color="white">The game as a stimulus for discussing social issues</Title>
	<Image src={HighlightImage} alt="" />
	<Paragraph color="white">
		Fantasy and a playful environment make games a powerful ally for <span class="weight-700"
			>talking about sensitive topics of collective interest in a creative and less intrusive way</span
		>. Thus, there is room for this to also be a platform for brands to address issues of social
		responsibility and positive agenda, so that the virtual world can contribute to raising
		awareness of improvements in the physical world.
	</Paragraph>
	<div id="insights-environment-separator" />
	<Title type="component" color="white">Developing products that make games more accessible</Title>
	<Image src={DataImage2} alt="" />
	<Paragraph color="white">
		Is the Gamesphere for everyone? People with physical or motor limitations can find it difficult
		to live a complete and immersive gaming experience.
	</Paragraph>
	<Paragraph color="white">
		Developing <span class="weight-700"
			>solutions that bring games closer to people who haven't been able to enjoy them before</span
		> could be a way for brands to expand the reach of the Gamesphere even further.
	</Paragraph>
</section>

<style>
	#insights-environment-section {
		background-color: var(--color-red-normal);
		overflow-x: clip;
	}

	#insights-environment-section :global(.p-legend) {
		border: none;
	}

	#insights-environment-separator {
		background-image: linear-gradient(to bottom, var(--color-red-normal) 0%, rgba(0, 0, 0, 0) 50%),
			url('$lib/assets/backgrounds/background-insights-separator-3.svg');
		background-position: bottom center;
	}

	@media only screen and (max-width: 768px) {
		#insights-environment-section {
			padding: 4rem 7.5vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2rem 0;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 0 2rem 0;
		}

		#insights-environment-separator {
			background-size: 50%;
			height: 100vw;
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-environment-section {
			padding: 5rem 15vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2.5rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-environment-separator {
			background-size: 25%;
			height: 20rem;
			margin: 2.5rem -15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-environment-section {
			padding: 5rem 20vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2.5rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-environment-separator {
			background-size: 12.5%;
			height: 25rem;
			margin: 2.5rem -20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-environment-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-environment-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 3rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 3rem auto;
		}

		#insights-environment-separator {
			background-size: 50%;
			height: 37.5rem;
			margin: 3rem 0;
			width: 50rem;
		}
	}
</style>
