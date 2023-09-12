<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="map-conclusion-section">
	<Highlight align="center" color="white">
		The Gamesphere expands far beyond gaming. It is an industry that is increasingly having an
		impact on the economy of various countries, including Brazil.
	</Highlight>
</section>

<style>
	#map-conclusion-section {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#map-conclusion-section {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-conclusion-section {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-conclusion-section {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-conclusion-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
