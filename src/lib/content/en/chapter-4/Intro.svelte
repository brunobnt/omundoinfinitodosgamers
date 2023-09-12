<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Image from '$lib/components/Image.svelte';

	import WorldImage from '$lib/assets/images/c4-intro-world-image.png';
</script>

<section id="toxic-intro-section">
	<div id="toxic-intro-content">
		<div id="toxic-intro-section-smoke" />
		<div class="toxic-intro-dialogue">In the 1950s a new world was born</div>
		<div class="toxic-intro-dialogue">
			Digital and interactive, it has grown as a part and reflection of our planet and society
		</div>
		<div class="toxic-intro-dialogue">Today, it has more than 3 billion "inhabitants"</div>
		<div class="toxic-intro-dialogue">Welcome to the Gamesphere!</div>
		<Image src={WorldImage} alt="" />
		<Paragraph color="white">
			Despite having its own characteristics, the Gamesphere inherits social contexts and behavior
			patterns from our society, since both the Earth and the Gamesphere are inhabited by the same
			people.
		</Paragraph>
		<Paragraph color="white">
			The Gamesphere is home to an infinite number of other worlds. In it, you can be someone else,
			possess items that you wouldn't have on our planet, experience new, magical and different
			realities.
		</Paragraph>
		<Highlight color="green">
			As much as the Gamesphere had the potential to be better than our original society, it hasn't
			managed - and perhaps hasn't even tried - to do that
		</Highlight>
	</div>
</section>

<style>
	#toxic-intro-section {
		align-items: flex-start;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#toxic-intro-section-smoke {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-1.svg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 100%;
		position: absolute;
		z-index: 1;
	}

	#toxic-intro-content {
		overflow-x: clip;
	}

	.toxic-intro-dialogue {
		background-color: var(--color-red-normal);
		border: 4px solid var(--color-white);
		border-radius: 0.25rem;
		color: var(--color-white);
		font-family: 'Press Start 2P', monospace;
		line-height: 150%;
		text-align: center;
	}

	@media only screen and (max-width: 768px) {
		#toxic-intro-section {
			padding: 0 7.5vw;
			padding-bottom: calc(200vw * 0.2);
			padding-top: calc(100vw * 0.2);
		}

		#toxic-intro-section-smoke {
			bottom: calc(100vw * 0.2);
			height: calc(100vw * 0.6);
			left: 0;
			margin-bottom: -45%;
			width: 100vw;
		}

		#toxic-intro-content {
			padding-top: 2rem;
		}

		#toxic-intro-content :global(img) {
			margin: 2rem auto;
		}

		#toxic-intro-content :global(.p-highlight) {
			margin: 2rem auto 4rem auto;
		}

		.toxic-intro-dialogue {
			font-size: 0.875rem;
			margin-bottom: 0.5rem;
			padding: 1rem 2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-intro-section {
			padding: 0 15vw;
			padding-bottom: calc(150vw * 0.2);
			padding-top: calc(90vw * 0.2);
		}

		#toxic-intro-section-smoke {
			bottom: calc(90vw * 0.2);
			height: calc(90vw * 0.6);
			left: 5vw;
			margin-bottom: -45%;
			width: 90vw;
		}

		#toxic-intro-content {
			overflow-x: clip;
			padding-top: 2.5rem;
		}

		#toxic-intro-content :global(img) {
			margin: 2.5rem auto;
		}

		#toxic-intro-content :global(.p-highlight) {
			margin: 2.5rem auto 5rem auto;
		}

		.toxic-intro-dialogue {
			font-size: 1rem;
			margin-bottom: 0.75rem;
			padding: 1.25rem 2.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-intro-section {
			padding: 0 20vw;
			padding-bottom: calc(100vw * 0.2);
			padding-top: calc(80vw * 0.2);
		}

		#toxic-intro-section-smoke {
			bottom: calc(80vw * 0.2);
			height: calc(80vw * 0.6);
			left: 10vw;
			margin-bottom: -40%;
			width: 80vw;
		}

		#toxic-intro-content {
			padding-top: 2.5rem;
		}

		#toxic-intro-content :global(img) {
			margin: 2.5rem auto;
		}

		#toxic-intro-content :global(.p-highlight) {
			margin: 2.5rem auto 5rem auto;
		}

		.toxic-intro-dialogue {
			font-size: 1rem;
			margin-bottom: 0.75rem;
			padding: 1.25rem 2.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-intro-section {
			padding-bottom: calc(90rem * 0.2);
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			padding-top: calc(75vw * 0.2);
		}

		#toxic-intro-section-smoke {
			bottom: calc(75vw * 0.2);
			height: calc(75vw * 0.6);
			left: 12.5vw;
			margin-bottom: -35%;
			width: 75vw;
		}

		#toxic-intro-content {
			padding-top: 3rem;
		}

		#toxic-intro-content :global(img) {
			margin: 3rem auto;
		}

		#toxic-intro-content :global(.p-highlight) {
			margin: 3rem auto 6rem auto;
		}

		.toxic-intro-dialogue {
			font-size: 1rem;
			margin-bottom: 1rem;
			padding: 1.5rem 3rem;
		}
	}
</style>
