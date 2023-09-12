<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';

	import IntroBrandsChart from '$lib/assets/images/en/insights-chart-intro-brands.svg';
</script>

<section id="insights-intro-section">
	<Highlight color="white">There is room for brands to grow in the Gamesphere.</Highlight>
	<Paragraph color="white">
		Even though brands have been more present and relevant to gamers, 50% of the gamer audience are
		unexplored opportunities.
	</Paragraph>
	<Image src={IntroBrandsChart} alt="" />
	<Legend color="white">
		Did you see or have you seen brands participating in the gaming environment while playing games?
	</Legend>
	<div class="highlight-image-wrapper" />
</section>

<style>
	#insights-intro-section {
		background-color: var(--color-black);
	}

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-insights-intro-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#insights-intro-section {
			padding: 4rem 7.5vw 0 7.5vw;
		}

		#insights-intro-section :global(img) {
			margin: 2rem 0 0 0;
			width: 100%;
		}

		.highlight-image-wrapper {
			height: calc(100vw * 1.5);
			margin: 4rem 0 calc(100vw / -1.5) 0;
			width: 100%;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-intro-section {
			padding: 5rem 15vw 0 15vw;
		}

		#insights-intro-section :global(img) {
			margin: 2.5rem auto 0 auto;
			width: 75%;
		}

		.highlight-image-wrapper {
			height: calc(50vw * 1.5);
			margin: 5rem auto calc(50vw / -1.5) auto;
			width: 75%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-intro-section {
			padding: 5rem 20vw 0 20vw;
		}

		#insights-intro-section :global(img) {
			margin: 2.5rem auto 0 auto;
			width: 60%;
		}

		.highlight-image-wrapper {
			height: calc(40vw * 1.5);
			margin: 5rem auto calc(40vw / -1.5) auto;
			width: 60%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-intro-section {
			padding: 6rem 0 0 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-intro-section :global(img) {
			margin: 3rem auto 0 auto;
		}

		.highlight-image-wrapper {
			height: calc(25vw * 1.5);
			margin: 6rem auto calc(25vw / -1.5) auto;
			width: 50%;
		}
	}
</style>
