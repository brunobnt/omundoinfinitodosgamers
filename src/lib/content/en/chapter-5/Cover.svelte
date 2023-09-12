<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';

	import CoverTitle from '$lib/assets/images/en/c5-cover-title.png';
	import WorldCompass from '$lib/assets/images/en/c5-world-compass.png';
</script>

<section id="map-cover-section">
	<div id="map-cover-section-texture">
		<img src={CoverTitle} alt="Exploring the map of the Gamesphere: gaming as a profession" />
	</div>
	<div id="map-cover-section-content">
		<Image src={WorldCompass} alt="" />
		<Paragraph color="white">
			There is much more to be explored in the Gamesphere than just games. E-sports championships, a
			wide variety of content (to create and to consume), professionalization, various forms of
			monetization... And all with the potential for social transformation.
		</Paragraph>
		<Paragraph color="white">And this is not exclusive to gamers.</Paragraph>
	</div>
</section>

<style>
	#map-cover-section {
		overflow-x: clip;
	}

	#map-cover-section-texture {
		align-items: flex-end;
		background-color: #505933;
		background-image: url('$lib/assets/backgrounds/background-c5-cover-texture.png');
		background-position: top center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: height 2000ms;
	}

	#map-cover-section-texture img {
		width: fit-content;
	}

	#map-cover-section-content {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	@media only screen and (max-width: 768px) {
		#map-cover-section-texture {
			height: 50vh;
			width: auto;
		}

		#map-cover-section-texture img {
			height: 40vh;
			margin: 0 auto -2vh auto;
			max-height: unset;
			width: auto;
		}

		#map-cover-section-content {
			padding: 4rem 7.5vw 10rem 7.5vw;
		}

		#map-cover-section-content :global(img) {
			margin: 0rem -2.5vw 2.5rem -2.5vw;
			width: 95vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-cover-section-texture {
			height: 100svh;
			width: 100vw;
		}

		#map-cover-section-texture img {
			height: 35rem;
			margin: auto;
			max-height: 75vh;
			width: auto;
		}

		#map-cover-section-content {
			padding: 5rem 15vw 10rem 15vw;
		}

		#map-cover-section-content :global(img) {
			margin: 0rem -2.5vw 2.5rem -2.5vw;
			width: 95vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-cover-section-texture {
			height: 100svh;
			width: 100vw;
		}

		#map-cover-section-texture img {
			height: 35rem;
			margin: auto;
			max-height: 75vh;
			width: auto;
		}

		#map-cover-section-content {
			padding: 5rem 20vw 9rem 20vw;
		}

		#map-cover-section-content :global(img) {
			margin: 0rem auto 2.5rem auto;
			width: 45vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-cover-section-texture {
			height: 100svh;
			width: 100vw;
		}

		#map-cover-section-texture img {
			height: 35rem;
			margin: auto;
			max-height: 75vh;
			width: auto;
		}

		#map-cover-section-content {
			padding: 6rem 0 10rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-cover-section-content :global(img) {
			margin: 0rem auto 3rem auto;
			width: 40rem;
		}
	}
</style>
