<script>
	let carousel;

	const handleMouseMove = (event) => {
		if (event.buttons > 0) carousel.scrollLeft -= event.movementX;
	};
</script>

<div class="carousel-container" bind:this={carousel}>
	<div class="carousel-sub-container">
		<button class="carousel-items" on:mousemove={handleMouseMove}>
			<slot />
		</button>
	</div>
</div>

<style>
	.carousel-container {
		cursor: grab;
		display: flex;
		justify-content: center;
		max-width: 100vw;
		overflow: auto;
	}

	.carousel-container::-webkit-scrollbar {
		display: none;
	}

	.carousel-sub-container {
		max-width: min-content;
		width: 100%;
	}

	.carousel-items {
		cursor: grab;
		display: flex;
		justify-content: space-between;
	}

	.carousel-items > :global(*) {
		pointer-events: none;
		user-select: none;
	}

	@media only screen and (max-width: 768px) {
		.carousel-container {
			margin: 1rem -7.5vw;
			padding-bottom: 1rem;
			width: calc(100% + 15vw);
		}

		.carousel-items {
			gap: 1rem;
			padding: 0 1rem;
		}

		.carousel-items :global(img) {
			max-width: unset;
			width: 16rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.carousel-container {
			margin: 1.25rem -15vw;
			padding-bottom: 1.25rem;
			width: calc(100% + 30vw);
		}

		.carousel-items {
			gap: 1.25rem;
			padding: 0 1.25rem;
		}

		.carousel-items :global(img) {
			max-width: unset;
			width: 16rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		.carousel-container {
			margin: 1.25rem -20vw;
			padding-bottom: 1.25rem;
			width: calc(100% + 40vw);
		}

		.carousel-items {
			gap: 1.25rem;
			padding: 0 1.25rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		.carousel-container {
			margin: 1.5rem 0;
			margin-left: calc((-100vw + 50rem) / 2);
			margin-right: calc((-100vw + 50rem) / 2);
			padding-bottom: 1.5rem;
			width: unset;
		}

		.carousel-items {
			gap: 1.5rem;
			padding: 0 1.5rem;
		}
	}
</style>
