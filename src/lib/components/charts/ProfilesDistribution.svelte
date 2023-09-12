<script>
	export let selectedProfile = null;
	export let profiles = [];

	let rectWidth = 4;

	let bars = [];

	profiles.forEach((profile) => {
		for (let i = 0; i < profile.rects; i++) {
			bars.push({ profile: profile.name, index: profile.index });
		}
	});
</script>

<div
	id="profiles-dist-wrapper"
	class={selectedProfile !== null ? `profile-${selectedProfile}` : ''}
>
	<h3>
		{selectedProfile !== null
			? `${profiles[selectedProfile].percent} dos respondentes`
			: 'Distribuição dos perfis da pesquisa'}
	</h3>
	<svg id="profiles-distribution-bars" viewBox="0 0 302 18" fill="none">
		{#each bars as bar, i}
			<rect
				class="bar profile-{bar.index} 
					{selectedProfile == bar.index || selectedProfile == null ? 'selected' : ''}"
				x={i * (rectWidth + 2)}
				width={rectWidth}
				height="16"
				rx="2"
				stroke="#010033"
				stroke-width="0.5"
				fill="#010033"
			/>
		{/each}
	</svg>
</div>

<style>
	svg {
		width: 100%;
	}

	#profiles-dist-wrapper {
		width: 100%;
	}

	#profiles-dist-wrapper h3 {
		color: var(--color-white);
		font-family: 'Overpass Mono', monospace;
		font-weight: 600;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.05rem;
	}

	.bar {
		stroke: var(--color-background-darkblue);
		fill: var(--color-background-darkblue);
		transition: fill 300ms ease-in;
	}

	.bar.profile-0.selected {
		fill: var(--color-profile-green);
	}

	.bar.profile-1.selected {
		fill: var(--color-profile-yellow);
	}

	.bar.profile-2.selected {
		fill: var(--color-profile-red);
	}

	.bar.profile-3.selected {
		fill: var(--color-profile-pink);
	}

	.bar.profile-4.selected {
		fill: var(--color-profile-blue);
	}

	.bar.profile-5.selected {
		fill: var(--color-profile-purple);
	}

	@media only screen and (max-width: 768px) {
		#profiles-dist-wrapper {
			margin: 2rem 0 0 0;
		}

		#profiles-dist-wrapper h3 {
			font-size: 0.75rem;
			margin-bottom: 0.25rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-dist-wrapper {
			margin: 1.25rem 0 0 0;
		}

		#profiles-dist-wrapper h3 {
			font-size: 1rem;
			margin-bottom: 0.375rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-dist-wrapper {
			margin: 0 0 auto 0;
		}

		#profiles-dist-wrapper h3 {
			font-size: 1rem;
			margin-bottom: 0.375rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-dist-wrapper {
			margin: 0 0 auto 0;
		}

		#profiles-dist-wrapper h3 {
			font-size: 1rem;
			margin-bottom: 0.375rem;
		}
	}
</style>
