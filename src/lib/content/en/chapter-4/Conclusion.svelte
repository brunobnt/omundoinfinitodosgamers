<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="toxic-conclusion-section">
	<Highlight align="center" color="white">
		With all these characteristics, the Gamesphere has become a fertile environment for toxic
		behavior and replicates inequalities that already exist in the real world.
	</Highlight>
</section>

<style>
	#toxic-conclusion-section {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#toxic-conclusion-section {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-conclusion-section {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-conclusion-section {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-conclusion-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
