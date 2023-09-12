<script>
	import Title from '$lib/components/Title.svelte';

	import WorldImage from '$lib/assets/images/press-start-world-image.png';
</script>

<section id="press-start-cover-section">
	<Title type="special" align="center" color="yellow">Press Start</Title>
	<img src={WorldImage} alt="" />
</section>
<div class="black-section-divider" />

<style>
	@keyframes floating-world {
		0%,
		100% {
			transform: translateY(-5%);
			animation-timing-function: ease-in-out;
		}
		50% {
			transform: translateY(2.5%);
			animation-timing-function: ease-in-out;
		}
	}

	#press-start-cover-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		min-height: 100svh;
		flex-direction: column;
		overflow-x: clip;
	}

	#press-start-cover-section :global(h2) {
		margin: 0;
	}

	#press-start-cover-section img {
		animation: floating-world 5s infinite;
		max-width: unset;
	}

	.black-section-divider {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-press-start-black-pattern.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#press-start-cover-section {
			padding: 6rem 7.5vw 0 7.5vw;
		}

		#press-start-cover-section :global(h2) {
			font-size: 8rem;
		}

		#press-start-cover-section img {
			margin-top: -4rem;
			width: 150vw;
		}

		.black-section-divider {
			height: 2rem;
			margin-top: -2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#press-start-cover-section {
			padding: 5rem 15vw 0 15vw;
		}

		#press-start-cover-section :global(h2) {
			font-size: 9rem;
		}

		#press-start-cover-section img {
			margin-top: -5rem;
			width: 80vw;
		}

		.black-section-divider {
			height: 2.5rem;
			margin-top: -2.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#press-start-cover-section {
			padding: 5rem 20vw 0 20vw;
		}

		#press-start-cover-section :global(h2) {
			font-size: 10rem;
		}

		#press-start-cover-section img {
			margin-top: -5rem;
			width: 50vw;
		}

		.black-section-divider {
			height: 2.5rem;
			margin-top: -2.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#press-start-cover-section {
			padding: 6rem 0 0 0;
		}

		#press-start-cover-section :global(h2) {
			font-size: 12rem;
		}

		#press-start-cover-section img {
			margin-top: -6rem;
			width: 40rem;
		}

		.black-section-divider {
			height: 3rem;
			margin-top: -3rem;
		}
	}
</style>
