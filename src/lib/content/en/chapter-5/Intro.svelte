<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';

	import IntroHighlightImage from '$lib/assets/images/en/c5-intro-highlight-image.svg';
	import ContentTypesChart from '$lib/assets/images/en/c5-chart-content-types.svg';
	import ContentPercentage from '$lib/assets/images/en/c5-intro-content-percentage.svg';
	import ContentOutgameChart from '$lib/assets/images/en/c5-chart-content-outgame.svg';
</script>

<section id="map-intro-section">
	<div id="map-intro-section-content">
		<Image src={IntroHighlightImage} alt="" />
		<Title type="component" color="black">Content consumed by non-gamers</Title>
		<Image src={ContentTypesChart} alt="" />
		<Legend color="black">Percentage of non-gamers who access some kind of content.</Legend>
		<Paragraph>Among gamers, engagement goes far beyond the game.</Paragraph>
		<Image src={ContentPercentage} alt="" />
		<Title type="component" color="black">
			More than half of gamers get involved beyond the game and its content
		</Title>
		<Image src={ContentOutgameChart} alt="" />
		<Legend color="black">
			The percentages refer to the total base of 1015 players. Total engaged players: 526 (52% of
			the base).
		</Legend>
	</div>
</section>

<style>
	#map-intro-section {
		align-items: center;
		background-color: var(--color-gray-light);
		background-image: url('$lib/assets/backgrounds/background-white.png');
		background-position: center center;
		background-size: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#map-intro-section-content {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		#map-intro-section-content {
			margin: -8rem 0 0 0;
			padding: 0rem 7.5vw 2rem 7.5vw;
		}

		#map-intro-section-content :global(h5) {
			margin-top: 3rem;
		}

		#map-intro-section-content :global(.p-legend) {
			margin-bottom: 2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-intro-section-content {
			margin: -7.5rem 0 0 0;
			padding: 0rem 15vw 2.5rem 15vw;
		}

		#map-intro-section-content :global(h5) {
			margin-top: 3.75rem;
		}

		#map-intro-section-content :global(.p-legend) {
			margin-bottom: 2.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-intro-section-content {
			margin: -7.5rem 0 0 0;
			padding: 0rem 20vw 2.5rem 20vw;
		}

		#map-intro-section-content :global(h5) {
			margin-top: 3.75rem;
		}

		#map-intro-section-content :global(.p-legend) {
			margin-bottom: 2.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-intro-section-content {
			margin: -9rem 0 0 0;
			padding: 0rem 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-intro-section-content :global(h5) {
			margin-top: 4.5rem;
		}

		#map-intro-section-content :global(.p-legend) {
			margin-bottom: 3rem;
		}
	}
</style>
