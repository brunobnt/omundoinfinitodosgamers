<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="paradox-conclusion-section">
	<Highlight align="center" color="white">
		Gaming can have positive impacts on life outside the digital environment, such as relaxing,
		making friends, developing skills; but it can also be a tool for escapism and isolation.
	</Highlight>
</section>

<style>
	#paradox-conclusion-section {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#paradox-conclusion-section {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-conclusion-section {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-conclusion-section {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-conclusion-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
