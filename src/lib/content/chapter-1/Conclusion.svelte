<script>
	import ConclusionHighlight from '$lib/assets/images/c1-conclusion-highlight.svg';
</script>

<section id="profiles-conclusion-section">
	<img src={ConclusionHighlight} alt="" />
</section>

<style>
	#profiles-conclusion-section {
		align-items: center;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	#profiles-conclusion-section img {
		height: auto;
	}

	@media only screen and (max-width: 768px) {
		#profiles-conclusion-section {
			padding: 2rem 7.5vw;
		}

		#profiles-conclusion-section img {
			width: 85vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-conclusion-section {
			padding: 2.5rem 15vw;
		}

		#profiles-conclusion-section img {
			width: 70vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-conclusion-section {
			padding: 2.5rem 30vw;
		}

		#profiles-conclusion-section img {
			width: 60vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-conclusion-section {
			padding: 2.5rem 0;
			padding-left: calc((100% - 40rem) / 2);
			padding-right: calc((100% - 40rem) / 2);
		}

		#profiles-conclusion-section img {
			width: 50rem;
		}
	}
</style>
