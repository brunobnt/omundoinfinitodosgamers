<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let category = 1;

	const chartsData = [
		{
			file: '/charts/chapter-1/en/0.svg',
			category: 1,
			title: 'Have tried virtual reality games'
		},
		{
			file: '/charts/chapter-1/en/1.svg',
			category: 1,
			title: 'Would like to try virtual reality games'
		},
		{
			file: '/charts/chapter-1/en/2.svg',
			category: 2,
			title: 'Are you or have you ever thought about playing professionally?'
		},
		{
			file: '/charts/chapter-1/en/3.svg',
			category: 2,
			title: 'You earn or have earned money in some way through gaming?'
		},
		{
			file: '/charts/chapter-1/en/4.svg',
			category: 3,
			title: 'Do you watch any e-sports tournaments?'
		},
		{
			file: '/charts/chapter-1/en/5.svg',
			category: 3,
			title: 'Access gaming-related content'
		},
		{
			file: '/charts/chapter-1/en/6.svg',
			category: 3,
			title: 'Hours per week typically spent consuming game-related content'
		},
		{
			file: '/charts/chapter-1/en/7.svg',
			category: 4,
			title: 'Spend on digital/electronic games'
		},
		{
			file: '/charts/chapter-1/en/8.svg',
			category: 4,
			title: 'Monthly amount typically spent on digital/electronic games'
		},
		{
			file: '/charts/chapter-1/en/9.svg',
			category: 5,
			title: 'How video games affect your interaction with friends'
		},
		{
			file: '/charts/chapter-1/en/10.svg',
			category: 5,
			title: 'I make a lot of friends in the gaming environment'
		},
		{
			file: '/charts/chapter-1/en/11.svg',
			category: 5,
			title: "When I'm playing, I usually communicate with my friends or teammates"
		},
		{
			file: '/charts/chapter-1/en/12.svg',
			category: 5,
			title: 'I often meet people I play with'
		},
		{
			file: '/charts/chapter-1/en/13.svg',
			category: 6,
			title: 'I intend to continue playing as I get older'
		},
		{
			file: '/charts/chapter-1/en/14.svg',
			category: 6,
			title: 'Non-gamers find it difficult to understand gamers'
		},
		{
			file: '/charts/chapter-1/en/15.svg',
			category: 6,
			title: 'Games are part of my life and my identity'
		}
	];
</script>

<section id="profiles-comparison-section">
	<Title type="special" align="center" color="gold">Comparing Profiles</Title>
	<Paragraph align="center" color="white">
		How these profiles think and behave when we talk about:
	</Paragraph>
	<select bind:value={category}>
		<option value={1}>Virtual Reality</option>
		<option value={2}>Monetizing</option>
		<option value={3}>Contents</option>
		<option value={4}>Spending</option>
		<option value={5}>Socialization</option>
		<option value={6}>Lifestyle</option>
	</select>
	<Carousel>
		{#each chartsData.filter((c) => c.category === category) as chart}
			<div class="profile-comparison-chart">
				<h2>{chart.title}</h2>
				<img src={base + chart.file} alt={chart.title} />
			</div>
		{/each}
	</Carousel>
</section>

<style>
	select {
		background-color: var(--color-background-darkblue);
		background-image: url('$lib/assets/icons/select-arrow.svg');
		background-size: 2rem auto;
		color: var(--color-green-normal);
		display: block;
		font-family: 'Overpass Mono', monospace;
		font-weight: 700;
		text-transform: uppercase;
	}

	#profiles-comparison-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: linear-gradient(
				to top,
				var(--color-background-darkblue) 0%,
				rgba(0, 0, 0, 0) 100%
			),
			url('$lib/assets/backgrounds/background-pink.png');
		background-position: bottom center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}
	.profile-comparison-chart {
		background-color: var(--color-background-darkblue);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-comparison-chart h2 {
		color: var(--color-white);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 400;
		letter-spacing: 0.09rem;
		text-align: left;
		text-transform: uppercase;
	}

	.profile-comparison-chart img {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		select {
			background-position: right 0.5rem center;
			border: 1px solid var(--color-white);
			font-size: 0.75rem;
			margin-bottom: 2rem;
			width: 100%;
		}

		#profiles-comparison-section {
			padding: 4rem 7.5vw;
		}

		.profile-comparison-chart {
			height: 38rem;
			padding: 2rem 0rem;
			width: 20rem;
		}

		.profile-comparison-chart h2 {
			font-size: 1.375rem;
			margin: 0 0 2rem 0;
			padding: 0rem 1rem;
			text-align: left;
		}

		.profile-comparison-chart img {
			padding: 0 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		select {
			background-position: right 0.5rem center;
			border: 1px solid var(--color-white);
			font-size: 0.875rem;
			margin: 0 0 1.25rem 0;
			width: 25rem;
		}

		#profiles-comparison-section {
			padding: 5rem 15vw;
		}

		.profile-comparison-chart {
			height: 45rem;
			padding: 2.5rem 0rem;
			width: 25rem;
		}

		.profile-comparison-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			padding: 0rem 1.25rem;
			text-align: left;
		}

		.profile-comparison-chart img {
			padding: 0 1.25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		select {
			background-position: right 0.5rem center;
			border: 1px solid var(--color-white);
			font-size: 0.875rem;
			margin: 0 0 1.25rem 0;
			width: 25rem;
		}

		#profiles-comparison-section {
			padding: 5rem 15vw;
		}

		.profile-comparison-chart {
			height: 45rem;
			padding: 2.5rem 0rem;
			width: 25rem;
		}

		.profile-comparison-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			padding: 0rem 1.25rem;
			text-align: left;
		}

		.profile-comparison-chart img {
			padding: 0 1.25rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		select {
			background-position: right 0.5rem center;
			border: 2px solid var(--color-white);
			font-size: 1rem;
			margin: 0 0 1.5rem 0;
			width: 30rem;
		}

		#profiles-comparison-section {
			padding: 6rem 0;
			padding-left: calc((100% - 40rem) / 2);
			padding-right: calc((100% - 40rem) / 2);
		}

		.profile-comparison-chart {
			height: 45rem;
			padding: 2.5rem 0rem;
			width: 25rem;
		}

		.profile-comparison-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			padding: 0rem 1.25rem;
			text-align: left;
		}

		.profile-comparison-chart img {
			padding: 0 1.25rem;
		}
	}
</style>
