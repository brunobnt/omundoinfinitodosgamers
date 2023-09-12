<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	import StatementAuthor from '$lib/assets/images/c4-statement-author.png';

	import DonutChart1 from '$lib/assets/images/en/c4-chart-donut-1.png';
	import DonutChart2 from '$lib/assets/images/en/c4-chart-donut-2.png';
	import DonutChart3 from '$lib/assets/images/en/c4-chart-donut-3.png';
	import DiversityBigNumber from '$lib/assets/images/en/c4-diversity-big-number.svg';
	import DiversityIndustryChart from '$lib/assets/images/en/c4-chart-diversity-industry.svg';

	const chartsData = [
		{
			title: 'The global developer market is mostly male.',
			file: DonutChart1
		},
		{
			title:
				'And this scenario is even worse* in Brazil, with fewer trans and non-binary people...',
			file: DonutChart2
		},
		{
			title: "...which doesn't reflect the gender profile of the gamers who answered our survey.",
			file: DonutChart3
		}
	];
</script>

<div id="toxic-smoke-highlight">
	<div id="toxic-people-section-smoke-top" />
	<Highlight align="center" color="red">
		Despite its infinite possibilities, the Gamesphere has not only reflected the worst parts of our
		society, it has amplified prejudices and stereotypes. How did this happen?
	</Highlight>
	<div id="toxic-people-section-smoke-bottom" />
</div>
<section id="toxic-people-section">
	<Title type="special" color="white">Who makes the Gamesphere?</Title>
	<Title type="component" color="white">A traditionally male industry</Title>
	<Paragraph color="white">
		Video games seem to be created from the point of view of men, for men and by men.
	</Paragraph>
	<Carousel>
		{#each chartsData as chart}
			<div class="donut-chart-card">
				{chart.title}
				<img src={chart.file} alt={chart.title} />
			</div>
		{/each}
	</Carousel>
	<Legend color="white">
		* Data from Abragames (2022) on gender representation in the Brazilian games industry
	</Legend>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="John Suler, author and professor of psychology at Rider University"
			background="green-darker"
			border="green"
			color="white"
		>
			“It is the security provided by the digital world to practice behaviors that are not accepted
			outside of it, such as excessive criticism, obscene language, threats and verbal aggression.”
		</Statement>
	</div>
	<Image src={DiversityBigNumber} alt="" />
	<Title type="component" color="white">Who is being included and who is being left out?</Title>
	<Paragraph color="white">
		Frequency of Diversity, Equity and Inclusion (DEI) policies in game development companies:
	</Paragraph>
	<Carousel>
		<img id="wide-carousel-image" src={DiversityIndustryChart} alt="" />
	</Carousel>
	<Legend color="white">
		Source: Abragames, Brazilian Games Industry Production Capacity Survey (2022) - 195 respondents
		(multiple answers)
	</Legend>
</section>

<style>
	#toxic-smoke-highlight {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		overflow-x: clip;
	}

	#toxic-smoke-highlight :global(.p-highlight) {
		z-index: 10;
	}

	#toxic-people-section-smoke-top,
	#toxic-people-section-smoke-bottom {
		background-color: transparent;
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		position: absolute;
		z-index: 1;
	}

	#toxic-people-section-smoke-top {
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-4.svg');
	}

	#toxic-people-section-smoke-bottom {
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-5.svg');
	}

	#toxic-people-section {
		align-items: center;
		background-color: var(--color-red-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#wide-carousel-image {
		max-width: unset;
	}

	.donut-chart-card {
		align-items: center;
		background-color: var(--color-background-darkblue);
		border-radius: 0.5rem;
		color: var(--color-white);
		display: flex;
		flex-direction: column;
		font-family: 'Fraunces', serif;
		font-weight: 700;
		justify-content: space-between;
		text-align: left;
	}

	.donut-chart-card img {
		display: block;
		max-width: unset;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		#toxic-smoke-highlight {
			padding: 10rem 7.5vw 16rem 7.5vw;
		}
		#toxic-people-section-smoke-top {
			height: calc(100vw * 0.5);
			top: calc(100vw * -0.25);
			width: 100vw;
		}

		#toxic-people-section-smoke-bottom {
			bottom: calc(100vw * -0.3);
			height: calc(100vw * 0.8);
			width: 100vw;
		}

		#toxic-people-section {
			padding: 0 7.5vw 4rem 7.5vw;
			padding-top: calc(100vw * 0.3);
		}

		#toxic-people-section :global(h5) {
			margin-top: 4rem;
		}

		#toxic-people-section :global(h5:first-of-type) {
			margin-top: 0;
		}

		#wide-carousel-image {
			height: 22.5rem;
			width: auto;
		}

		.donut-chart-card {
			font-size: 1.25rem;
			height: calc(20rem * 1.5);
			padding: 2rem 2rem 4rem 2rem;
			width: 20rem;
		}

		.donut-chart-card img {
			margin-top: 2rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-smoke-highlight {
			padding: 14rem 15vw 18rem 15vw;
		}

		#toxic-people-section-smoke-top {
			height: calc(90vw * 0.5);
			top: calc(90vw * -0.2);
			width: 90vw;
		}

		#toxic-people-section-smoke-bottom {
			bottom: calc(90vw * -0.4);
			height: calc(90vw * 0.8);
			width: 90vw;
		}

		#toxic-people-section {
			padding: 0 15vw 5rem 15vw;
			padding-top: calc(90vw * 0.3);
		}

		#toxic-people-section :global(h5) {
			margin-top: 5rem;
		}

		#toxic-people-section :global(h5:first-of-type) {
			margin-top: 0;
		}

		#wide-carousel-image {
			height: 25rem;
			width: auto;
		}

		.donut-chart-card {
			font-size: 1.5rem;
			height: calc(25rem * 1.5);
			padding: 2.5rem 2.5rem 5rem 2.5rem;
			width: 25rem;
		}

		.donut-chart-card img {
			margin-top: 2.5rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 2.5rem -15vw 5rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-smoke-highlight {
			padding: 14rem 20vw 20rem 20vw;
		}

		#toxic-people-section-smoke-top {
			height: calc(60vw * 0.5);
			top: calc(60vw * -0.2);
			width: 60vw;
		}

		#toxic-people-section-smoke-bottom {
			bottom: calc(60vw * -0.4);
			height: calc(60vw * 0.8);
			width: 60vw;
		}

		#toxic-people-section {
			padding: 0 20vw 5rem 20vw;
			padding-top: calc(60vw * 0.3);
		}

		#toxic-people-section :global(h5) {
			margin-top: 5rem;
		}

		#toxic-people-section :global(h5:first-of-type) {
			margin-top: 0;
		}

		#wide-carousel-image {
			height: 30rem;
			width: auto;
		}

		.donut-chart-card {
			font-size: 1.5rem;
			height: calc(25rem * 1.5);
			padding: 2.5rem 2.5rem 5rem 2.5rem;
			width: 25rem;
		}

		.donut-chart-card img {
			margin-top: 2.5rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-smoke-highlight {
			padding: 17.5rem 0 22.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-people-section-smoke-top,
		#toxic-people-section-smoke-bottom {
			height: calc(60rem * 0.8);
			width: 60rem;
		}

		#toxic-people-section-smoke-top {
			top: calc(60rem * -0.2);
		}

		#toxic-people-section-smoke-bottom {
			bottom: calc(60rem * -0.4);
		}

		#toxic-people-section {
			padding: 0 0 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			padding-top: calc(60rem * 0.3);
		}

		#toxic-people-section :global(h5) {
			margin-top: 6rem;
		}

		#toxic-people-section :global(h5:first-of-type) {
			margin-top: 0;
		}

		#wide-carousel-image {
			height: 30rem;
			width: auto;
		}

		.donut-chart-card {
			font-size: 1.75rem;
			height: calc(27.5rem * 1.5);
			padding: 3rem 3rem 3rem 3rem;
			width: 27.5rem;
		}

		.donut-chart-card img {
			margin-top: 3rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 3rem 0 6rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}
	}
</style>
