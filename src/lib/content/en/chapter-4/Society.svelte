<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import GTAImage from '$lib/assets/images/c4-gta-image.gif';
	import SocietySectionCover from '$lib/assets/images/c4-society-intro-cover.png';
	import DiscriminationEvolutionChart from '$lib/assets/images/en/c4-chart-discrimination-evolution.svg';
	import DiscriminationBigNumbers from '$lib/assets/images/en/c4-discrimination-big-numbers.svg';
	import SocietySectionHighlight from '$lib/assets/images/en/c4-society-highlight-image.svg';
	import DiscriminationGroupsChart from '$lib/assets/images/en/c4-chart-discrimination-groups.png';
</script>

<div id="gta-gif-wrapper">
	<Image src={GTAImage} alt="" />
	<Legend align="center" color="white">GTA San Andreas. Credits: Rockstar Games.</Legend>
</div>
<section id="toxic-society-section">
	<Title type="special" color="green">Gamesphere society</Title>
	<div class="image-wrapper">
		<Image src={SocietySectionCover} alt="" />
	</div>
	<Title type="component" color="green">
		The presence of various types of prejudice grew from 2017 to 2023
	</Title>
	<Image src={DiscriminationEvolutionChart} alt="" />
	<Legend color="white">
		Percentage of people who answered that they had witnessed or suffered each type of prejudice.
	</Legend>
	<Title type="component" color="green">
		Testimonials about different types of prejudice suffered online
	</Title>
	<Carousel>
		<PostIt
			title="Harassment"
			author="Female, 26 years old, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“In addition to the difficulty of skins, it's also very complicated to deal with online
			harassers. They always use a lot of foul language and this makes many women feel they can't
			stand the pressure and stop playing because of these annoyances.”
		</PostIt>
		<PostIt
			title="Capacitism"
			author="Male, 20 years old, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“I've witnessed different types of prejudice, and I've even suffered from ableism a few times.
			In order to improve this issue, it's necessary to inform people that some of the terms used in
			games are pejorative and offensive.”
		</PostIt>
		<PostIt
			title="Homophobia"
			author="Male, 23 years old, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“As a gay man, I have experienced prejudice in online games where I tried to report the
			player's account to the platform, which resulted in him being banned.”
		</PostIt>
		<PostIt
			title="Social class"
			author="Male, 23 years old, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“There is a lot of prejudice in all games. Even more so when you're black from the favela.
			They already recognize it just from our slang and it hasn't changed: it's only made what was
			already bad worse.”
		</PostIt>
		<PostIt
			title="Latent racism"
			author="Male, 26, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“The community tends to be very prejudiced, as we see on the internet. Racism is the most
			latent.”
		</PostIt>
		<PostIt
			title="Political prejudice"
			author="Male, 20 years old, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“I see people arguing about politics and generating conflicts with offenses.”
		</PostIt>
	</Carousel>
	<Paragraph color="green">
		The perception of having suffered or witnessed prejudice is even higher
		<span class="weight-700">among people aged between 16 and 26</span>.
	</Paragraph>
	<Image src={DiscriminationBigNumbers} alt="" />
	<Paragraph color="green">
		Younger people also have a higher perception of
		<span class="weight-700">political prejudice, something new in the 2023 survey</span>.
	</Paragraph>
	<Image src={SocietySectionHighlight} alt="" />
	<Title type="component" align="center" color="green">
		This perception is even more critical across groups:
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
