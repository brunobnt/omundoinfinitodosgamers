<script>
	import Title from '$lib/components/Title.svelte';

	import InsightsCoverCubes from '$lib/assets/images/insights-cover-cubes.png';
</script>

<section id="insights-cover-section">
	<Title type="special" align="center" color="black">Insights para marcas</Title>
	<img src={InsightsCoverCubes} alt="" />
</section>

<style>
	#insights-cover-section {
		align-items: center;
		background-color: var(--color-yellow-normal);
		background-image: url('$lib/assets/backgrounds/background-yellow.png');
		background-position: center center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#insights-cover-section :global(h2) {
			font-size: 4rem;
		}

		#insights-cover-section {
			padding-top: 8rem;
		}

		#insights-cover-section img {
			margin: 2rem 0 0 0;
			width: 100%;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-cover-section :global(h2) {
			font-size: 5rem;
		}

		#insights-cover-section {
			padding-top: 10rem;
		}

		#insights-cover-section img {
			margin: 2.5rem 0 0 0;
			width: 75%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-cover-section :global(h2) {
			font-size: 5rem;
		}

		#insights-cover-section {
			padding-top: 10rem;
		}

		#insights-cover-section img {
			margin: 2.5rem 0 0 0;
			width: 60%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-cover-section :global(h2) {
			font-size: 8rem;
		}

		#insights-cover-section {
			padding-top: 6rem;
		}

		#insights-cover-section img {
			margin: 1.5rem 0 0 0;
			width: 50%;
		}
	}
</style>
