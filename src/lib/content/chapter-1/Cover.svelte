<script>
	import { onMount } from 'svelte';

	import ProfilesDistribution from '$lib/components/charts/ProfilesDistribution.svelte';

	import PageTitle from '$lib/assets/images/c1-cover-title.png';
	import Display0 from '$lib/assets/displays/0.svelte';
	import Display1 from '$lib/assets/displays/1.svelte';
	import Display2 from '$lib/assets/displays/2.svelte';
	import Display3 from '$lib/assets/displays/3.svelte';
	import Display4 from '$lib/assets/displays/4.svelte';
	import Display5 from '$lib/assets/displays/5.svelte';

	const profiles = [
		{ name: 'Gamer de Coração', image: Display0, percent: '15,96%', rects: 8, index: 0 },
		{ name: 'Full Hardcore', image: Display1, percent: '11,53%', rects: 6, index: 1 },
		{ name: 'Hardcore Mobile', image: Display2, percent: '12,02%', rects: 6, index: 2 },
		{ name: 'Gamer, Eu?', image: Display3, percent: '23,84%', rects: 12, index: 3 },
		{ name: 'Sugar Crush', image: Display4, percent: '14,29%', rects: 7, index: 4 },
		{ name: 'Final de Semana', image: Display5, percent: '22,36%', rects: 11, index: 5 }
	];

	const chooseProfile = (index) => {
		selectedProfile = index;
	};

	let mounted = false;
	let selectedProfile = null;

	onMount(() => {
		mounted = true;
	});
</script>

<section
	id="profiles-cover-section"
	role="button"
	tabindex="0"
	on:click={() => chooseProfile(null)}
	on:keypress={() => chooseProfile(null)}
>
	<img id="profiles-cover-title" src={PageTitle} alt="Quem são os gamers em 2023?" />
	<div id="profiles-display-grid" class={mounted ? '' : 'hidden'}>
		{#each profiles as profile, index}
			<button
				class={selectedProfile === index ? `selected-profile` : ''}
				on:click|stopPropagation={() => chooseProfile(index)}
				on:mouseenter|stopPropagation={() => chooseProfile(index)}
			>
				<svelte:component this={profile.image} c />
			</button>
		{/each}
	</div>
	<ProfilesDistribution {selectedProfile} {profiles} />
</section>

<style>
	* {
		-webkit-tap-highlight-color: transparent;
	}

	#profiles-cover-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: linear-gradient(
				to bottom,
				var(--color-background-darkblue) 0%,
				rgba(0, 0, 0, 0) 100%
			),
			url('$lib/assets/backgrounds/background-pink.png');
		cursor: default;
		display: grid;
		min-height: 100vh;
		overflow-x: clip;
	}

	#profiles-cover-section button {
		background-color: transparent;
		width: 100%;
	}

	#profiles-cover-section button :global(svg) {
		margin-top: -25%;
		width: 100%;
	}

	#profiles-cover-section button :global(svg .gradient-path) {
		display: unset;
		opacity: 0;
		transition: opacity 750ms;
	}

	#profiles-cover-section :global(svg .cut-mask) {
		display: unset;
	}

	#profiles-cover-section :global(.selected-profile svg .gradient-path) {
		opacity: 1;
	}

	#profiles-cover-section :global(.selected-profile svg .cut-mask) {
		display: none;
	}

	#profiles-cover-title {
		height: auto;
	}

	#profiles-display-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		width: 100%;
	}

	#profiles-display-grid :global(button),
	#profiles-display-grid :global(button *) {
		cursor: pointer;
	}

	#profiles-display-grid.hidden {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		#profiles-cover-section {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			padding: 4rem 7.5vw;
		}

		#profiles-cover-title {
			margin: 2rem auto 0 auto;
			max-width: 35rem;
			width: 75vw;
		}

		#profiles-display-grid {
			gap: 1.5rem 1.5rem;
			grid-column: unset;
			grid-row: unset;
			margin: 4rem 0 1rem 0;
			padding: 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-cover-section {
			gap: 0;
			grid-template-columns: unset;
			grid-template-rows: unset;
			padding: 5rem 15vw;
		}
		#profiles-cover-title {
			margin: 2.5rem auto 2.5rem auto;
			max-width: 30rem;
			width: 50vw;
		}

		#profiles-display-grid {
			gap: 1.75rem 1.75rem;
			grid-column: unset;
			grid-row: unset;
			margin: 2.5rem 0 1.25rem 0;
			padding: 0 7.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-cover-section {
			gap: 0 5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			padding: 5rem 10vw 0 10vw;
		}

		#profiles-cover-title {
			margin: auto auto 3.75rem auto;
			max-width: 50rem;
			width: 35vw;
		}

		#profiles-display-grid {
			gap: 2.5rem 2.5rem;
			grid-column: 2/3;
			grid-row: 1/3;
			margin: 2.5rem 0 1.25rem 0;
			padding: 0 0 5rem 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-cover-section {
			gap: 0 7.5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			padding: 6rem 0 0 0;
			padding-left: calc((100% - 80rem) / 2);
			padding-right: calc((100% - 80rem) / 2);
		}

		#profiles-cover-title {
			margin: auto auto 4.5rem auto;
			max-width: 40rem;
			width: 30vw;
		}

		#profiles-display-grid {
			gap: 3rem 3rem;
			grid-column: 2/3;
			grid-row: 1/3;
			margin: 3rem 0 1.5rem 0;
			padding: 0 0 6rem 0;
		}
	}
</style>
