<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="paradox-conclusion-section">
	<Highlight align="center" color="white">
		Jogar pode ter impactos positivos na vida fora do ambiente digital, como relaxar, fazer amigos,
		desenvolver habilidades; mas também pode ser uma ferramenta de escapismo e isolamento.
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
