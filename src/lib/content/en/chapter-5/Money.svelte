<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Loot from '$lib/components/Loot.svelte';

	import MoneyBigNumber from '$lib/assets/images/en/c5-money-big-number.svg';
	import MoneySourcesChart from '$lib/assets/images/en/c5-chart-money-sources.svg';

	const lootList = [
		'Streaming',
		'Parallel market',
		'Sponsorships and partnerships',
		'Championships',
		'Boost services',
		'Rewards apps',
		'Content creation',
		'Gambling',
		'Game development',
		'ORG participation',
		'Coaching',
		'Farming'
	];
</script>

<div id="map-money-cover" />
<section id="map-money-section">
	<Title type="special" color="black">Monetization</Title>
	<Title type="subsection" color="black">Making money in the Gamesphere is a reality:</Title>
	<Image src={MoneyBigNumber} alt="" />
	<Title type="component" color="black">
		The main source of income in games is content creation
	</Title>
	<div class="display-flex-wrapper">
		<div>
			<Image src={MoneySourcesChart} alt="" />
			<Legend color="black">Among people who earn or have earned money from games.</Legend>
		</div>
		<div class="profile-behavior-chart">
			<h2>Earn or have earned money in some way through games</h2>
			<img
				src={base + '/charts/chapter-5/en/3.svg'}
				alt="Earn or have earned money in some way through games"
			/>
		</div>
	</div>
	<Title type="component" color="black">How to make money from games</Title>
	<Paragraph color="black">
		Click on the buttons below to guess the ways to make money from games.
	</Paragraph>
	<div id="loot-grid">
		{#each lootList as loot, i}
			<Loot open={i == 0}>
				{loot}
			</Loot>
		{/each}
	</div>
</section>

<style>
	#map-money-cover {
		background-color: var(--color-green-normal);
		background-image: url('$lib/assets/backgrounds/background-c5-money-pattern.svg');
		background-position: top center;
		background-size: contain 100%;
		height: 18rem;
		overflow-x: clip;
	}

	#map-money-section {
		align-items: center;
		background-color: var(--color-green-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#loot-grid {
		align-items: center;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		height: fit-content;
		justify-items: center;
		margin: 0 auto;
	}

	.display-flex-wrapper {
		display: flex;
	}

	.profile-behavior-chart {
		background-color: var(--color-white);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-black);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 400;
		letter-spacing: 0.09rem;
		text-align: left;
		text-transform: uppercase;
	}

	.profile-behavior-chart img {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		#map-money-section {
			padding: 2rem 7.5vw 4rem 7.5vw;
		}

		#map-money-section > :global(h5) {
			margin-top: 3rem;
		}

		#loot-grid {
			width: 100%;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 35rem;
			margin: 2em auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-money-section {
			padding: 2.5rem 15vw 5rem 15vw;
		}

		#map-money-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#loot-grid {
			width: 90%;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 50rem;
			margin: 2.5rem auto;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-money-section {
			padding: 2.5rem 20vw 5rem 20vw;
		}

		#map-money-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#loot-grid {
			width: 80%;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
			margin: 0 -10vw;
			width: calc(100% + 20vw);
		}

		.display-flex-wrapper :global(img),
		.display-flex-wrapper :global(.p-legend) {
			width: 100%;
		}

		.profile-behavior-chart {
			height: 42rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-money-section {
			padding: 3rem 0 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-money-section > :global(h5) {
			margin-top: 4.5rem;
		}

		#loot-grid {
			width: 75%;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
			margin: 0 -10rem;
			width: calc(100% + 20rem);
		}

		.display-flex-wrapper :global(img),
		.display-flex-wrapper :global(.p-legend) {
			width: 100%;
		}

		.profile-behavior-chart {
			height: 45rem;
			margin: 0 auto;
			padding: 3rem 1.5rem;
			width: 27.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.5rem;
			text-align: center;
		}
	}
</style>
