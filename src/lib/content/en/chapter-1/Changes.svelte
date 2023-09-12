<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';

	import PlatformChart from '$lib/assets/images/en/c1-chart-platform-evolution.svg';
	import StatementAuthor from '$lib/assets/images/c1-statement-author.png';
	import TinderCard1 from '$lib/assets/images/en/c1-tinder-card-1.png';
	import TinderCard2 from '$lib/assets/images/en/c1-tinder-card-2.png';
	import TinderCard3 from '$lib/assets/images/en/c1-tinder-card-3.png';
</script>

<section id="profiles-changes-section">
	<div id="section-title-container">
		<Title type="special" color="white">Why gamers changed from 2017 to 2023?</Title>
		<div>
			<Title type="subsection" color="white">Smartphone as a gateway to the gaming world</Title>
			<Paragraph color="white">
				If games used to be restricted to people who could afford to buy and access expensive
				consoles and computers with lots of memory and high capacity, mobile has broken this logic.
				Smartphones have more and more power, are more accessible and have become essential,
				becoming the main gateway to the gaming universe.
			</Paragraph>
		</div>
	</div>
	<div id="platform-chart-grid">
		<Title type="component" color="white">
			Smartphones isolate themselves as the main gaming platform
		</Title>
		<Image src={PlatformChart} alt={''} />
		<Legend>
			From 2017 to 2023, the percentage of gamers fell on all platforms except mobile. While in 2017
			it was common to use a smartphone in association with another platform, in 2023 mobile is
			often the only platform used by gamers.
		</Legend>
	</div>
	<Paragraph align="center" color="white">
		Take a look at <a
			href="https://www.visualcapitalist.com/wp-content/uploads/2020/11/history-of-gaming-by-revenue-share-full-size.html"
			target="_blank">this infographic</a
		>
		and pay attention to growth of mobile over the years.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, XisGG"
			background="darkgreen"
			border="red"
			color="white"
		>
			“Today we have smartphones that have processors close to what we had in computers five years
			ago. There was a vision in the games industry that this could be profitable, not just to focus
			on people who can afford a computer or a console, but to focus on more accessible games that
			run on more devices.”
		</Statement>
	</div>

	<div class="narrow-text">
		<Title type="subsection" color="white">Gamer is the new sexy</Title>
		<Paragraph color="white">
			Nowadays, almost everyone plays something. Profiles show that very different people play
			games. In 2023, being a gamer is no longer frowned upon.
		</Paragraph>
	</div>
	<Carousel>
		<Image src={TinderCard1} alt="" />
		<Image src={TinderCard2} alt="" />
		<Image src={TinderCard3} alt="" />
	</Carousel>
	<Legend>
		Being a gamer is so cool that it's worth putting on your Tinder profile (in 2017 you'd be seen
		as an incorrigible nerd).
	</Legend>
</section>

<style>
	#profiles-changes-section {
		align-items: center;
		background-color: var(--color-background-darkblue);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#profiles-changes-section > :global(.p-legend) {
		margin-top: 0;
	}

	#section-title-container {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#platform-chart-grid {
		display: grid;
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
		#profiles-changes-section {
			padding: 2rem 7.5vw 4rem 7.5vw;
		}

		#section-title-container {
			flex-direction: column;
			gap: 1rem;
		}

		#platform-chart-grid {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 4rem 0;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		#profiles-changes-section :global(.carousel-container img) {
			width: 18rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-changes-section {
			padding: 2.5rem 15vw 5rem 15vw;
		}

		#section-title-container {
			flex-direction: column;
			gap: 1.25rem;
			margin: 0;
		}

		#platform-chart-grid {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 2.5rem 0 5rem 0;
		}

		.statement-wrapper {
			margin: 2.5rem -15vw 5rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}

		#profiles-changes-section :global(.carousel-container img) {
			width: 20rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-changes-section {
			padding: 2.5rem 20vw 5rem 20vw;
		}

		#section-title-container {
			flex-direction: row;
			gap: 2.5rem;
			margin: 0 0 2.5rem 0;
		}

		#section-title-container :global(h2) {
			margin: 0;
			min-width: 50%;
			width: 50%;
		}

		#platform-chart-grid {
			gap: 0 5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 2.5rem -10vw 2.5rem -10vw;
		}

		#platform-chart-grid :global(img) {
			grid-column: 2/3;
			grid-row: 1/3;
			width: 100%;
		}

		#platform-chart-grid :global(h5) {
			margin-top: auto;
			text-align: left;
		}

		#platform-chart-grid :global(.p-legend) {
			border: none;
			margin-bottom: auto;
			width: 100%;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}

		#profiles-changes-section :global(.carousel-container img) {
			width: 22.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-changes-section {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#profiles-changes-section :global(.carousel-container img) {
			width: 25rem;
		}

		#section-title-container {
			flex-direction: row;
			gap: 3rem;
			margin: 0 0 3rem 0;
		}

		#section-title-container :global(h2) {
			margin: 0;
			min-width: 50%;
			width: 50%;
		}

		#platform-chart-grid {
			gap: 0 6rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			margin: 3rem -10rem 3rem -10rem;
		}

		#platform-chart-grid :global(img) {
			grid-column: 2/3;
			grid-row: 1/3;
			width: 100%;
		}

		#platform-chart-grid :global(h5) {
			margin-top: auto;
			text-align: left;
		}

		#platform-chart-grid :global(.p-legend) {
			border: none;
			margin-bottom: auto;
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
