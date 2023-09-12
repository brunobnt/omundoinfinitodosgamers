<script>
	import CoverTitle from '$lib/assets/images/en/c4-cover-title.png';
</script>

<section id="toxic-cover-section">
	<img src={CoverTitle} alt="The toxic side of the gamesphere" />
</section>

<style>
	#toxic-cover-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		flex-direction: column;
		display: flex;
		justify-content: space-between;
		height: 100vh;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		#toxic-cover-section img {
			margin: 16rem auto;
			max-width: 35rem;
			width: 75vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-cover-section img {
			margin: 15rem auto;
			max-width: 40rem;
			width: 70vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-cover-section img {
			margin: 10rem auto;
			max-width: 40rem;
			width: 70vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-cover-section img {
			margin: 6rem auto;
			max-width: 50rem;
			width: 60vw;
		}
	}
</style>
