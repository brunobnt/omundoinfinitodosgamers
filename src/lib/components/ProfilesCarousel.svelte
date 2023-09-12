<script>
	import { base } from '$app/paths';

	export let data;
	export let active;
	export let chooseProfile;

	let carousel;
	let lastClick;

	const handleMouseUp = (event, index) => {
		const clickDelay = new Date().getTime() - lastClick;

		if (clickDelay < 200) {
			chooseProfile(index);

			const element = event.srcElement;
			const scrollLeft = element.offsetLeft - carousel.offsetWidth / 2 + element.offsetWidth / 2;
			carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });
		}
	};

	const handleMouseDown = () => {
		lastClick = new Date().getTime();
	};

	const handleMouseMove = (event) => {
		if (event.buttons > 0) carousel.scrollLeft -= event.movementX;
	};
</script>

<div id="profile-carousel-container-wrapper">
	<div id="profile-carousel-container" bind:this={carousel}>
		<div id="profile-carousel-items">
			{#each data as profile, index}
				<button
					id="profile-button-{index}"
					class={active === index ? 'selected-profile' : ''}
					on:mousedown={handleMouseDown}
					on:mouseup={(e) => handleMouseUp(e, index)}
					on:mousemove={(e) => handleMouseMove(e)}
					on:mouseenter={() => chooseProfile(index)}
				>
					<div style:background-color={profile.color}>
						<img src={base + profile.image} alt={profile.name} />
					</div>
					<h6 style:color={profile.color}>{profile.name}</h6>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	#profile-carousel-container-wrapper {
		align-items: center;
		display: flex;
		background-image: linear-gradient(
			to bottom,
			var(--color-background-darkblue) 75%,
			transparent 100%
		);
		justify-content: center;
		position: sticky;
		top: 0;
		width: 100vw;
		z-index: 5;
	}

	#profile-carousel-container {
		background-color: transparent;
		cursor: grab;
		display: flex;
		justify-content: center;
		max-width: fit-content;
		overflow: auto;
	}

	#profile-carousel-container::-webkit-scrollbar {
		display: none;
	}

	#profile-carousel-items {
		align-items: center;
		cursor: grab;
		display: flex;
		justify-content: flex-start;
		width: 100%;
	}

	#profile-carousel-items button {
		align-items: center;
		cursor: grab;
		display: flex;
		flex-direction: column;
		opacity: 0.5;
		transition: opacity 500ms;
		user-select: none;
	}

	#profile-carousel-items button:nth-child(1) img,
	#profile-carousel-items button:nth-child(3) img,
	#profile-carousel-items button:nth-child(5) img {
		margin-right: auto;
	}

	#profile-carousel-items button:nth-child(2) img,
	#profile-carousel-items button:nth-child(4) img,
	#profile-carousel-items button:nth-child(6) img {
		margin-left: auto;
	}

	#profile-carousel-items div {
		pointer-events: none;
		transition: all 400ms;
	}

	#profile-carousel-items img {
		height: 100%;
		pointer-events: none;
	}

	#profile-carousel-items h6 {
		font-family: 'Fugaz One', sans-serif;
		font-weight: 900;
		line-height: 125%;
		text-align: center;
		text-transform: uppercase;
		width: 100%;
	}

	#profile-carousel-items .selected-profile {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		#profile-carousel-container {
			min-height: 12rem;
			padding: 0.5rem 1rem 3rem 1rem;
		}

		#profile-carousel-items {
			gap: 0.25rem;
			margin: 0 auto;
		}

		#profile-carousel-items div {
			height: 5rem;
			margin-right: 0.5rem;
			width: 5rem;
		}

		#profile-carousel-items h6 {
			font-size: 0.875rem;
			margin-top: 0.25rem;
			max-width: 5rem;
		}

		#profile-carousel-items .selected-profile div {
			height: 7rem;
			width: 7rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#profile-carousel-container {
			min-height: 12rem;
			padding: 0.75rem 1.25rem 3.75rem 1.25rem;
		}

		#profile-carousel-items {
			gap: 0.25rem;
			margin: 0 auto;
		}

		#profile-carousel-items div {
			height: 6rem;
			margin-right: 0.5rem;
			width: 6rem;
		}

		#profile-carousel-items h6 {
			font-size: 0.925rem;
			margin-top: 0.375rem;
			max-width: 5rem;
		}

		#profile-carousel-items .selected-profile div {
			height: 8rem;
			width: 8rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profile-carousel-container {
			min-height: 12rem;
			padding: 0.75rem 1.25rem 3.75rem 1.25rem;
		}

		#profile-carousel-items {
			gap: 0.25rem;
			margin: 0 auto;
		}

		#profile-carousel-items div {
			height: 6rem;
			margin-right: 0.5rem;
			width: 6rem;
		}

		#profile-carousel-items h6 {
			font-size: 0.925rem;
			margin-top: 0.375rem;
			max-width: 5rem;
		}

		#profile-carousel-items .selected-profile div {
			height: 8rem;
			width: 8rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profile-carousel-container {
			min-height: 15rem;
			padding: 1rem 1.5rem 4.5rem 1.5rem;
		}

		#profile-carousel-items {
			gap: 0.25rem;
			margin: 0 auto;
		}

		#profile-carousel-items div {
			height: 7rem;
			margin-right: 0.5rem;
			width: 7rem;
		}

		#profile-carousel-items h6 {
			font-size: 0.95rem;
			margin-top: 0.5rem;
			max-width: 5rem;
		}

		#profile-carousel-items .selected-profile div {
			height: 9rem;
			width: 9rem;
		}
	}
</style>
