<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="map-conclusion-section">
	<Highlight align="center" color="white">
		A Jogosfera se expande muito além dos jogos. É uma indústria que cada vez mais tem impacto na
		economia de diversos países, incluindo no Brasil.
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
