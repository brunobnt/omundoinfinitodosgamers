<script>
	export let align = 'left';
	export let color = 'white';

	const classList = `p-legend color-${color} align-${align}`;
</script>

<p class={classList}>
	<slot />
</p>

<style>
	p.p-legend {
		font-family: 'Overpass', sans-serif;
		font-weight: 300;
	}

	p.p-legend :global(a) {
		cursor: pointer;
		text-decoration: underline;
	}

	p.p-legend:global(.color-black) {
		border-top: 1px dashed var(--color-black);
	}

	p.p-legend:global(.color-white) {
		border-top: 1px dashed var(--color-white);
	}

	p.p-legend:global(.color-red-darker) {
		border-top: 1px dashed var(--color-red-darker);
	}

	p.p-legend:global(.color-blue-darker) {
		border-top: 1px dashed var(--color-blue-darker);
	}

	p.p-legend:global(.color-yellow-darker) {
		border-top: 1px dashed var(--color-yellow-darker);
	}

	@media only screen and (max-width: 768px) {
		p.p-legend {
			font-size: 0.8rem;
			margin: 0.8rem auto 0 auto;
			padding-top: 0.8rem;
			width: 100%;
		}
	}

	@media only screen and (min-width: 768px) {
		p.p-legend {
			font-size: 0.875rem auto 0 auto;
			margin: 0.875rem auto 0 auto;
			padding-top: 0.875rem;
			width: 85%;
		}
	}

	@media only screen and (min-width: 1280px) {
		p.p-legend {
			font-size: 0.875rem auto 0 auto;
			margin: 0.875rem auto 0 auto;
			padding-top: 0.875rem;
			width: 70%;
		}
	}

	@media only screen and (min-width: 1536px) {
		p.p-legend {
			font-size: 1rem auto 0 auto;
			margin: 1rem auto 0 auto;
			padding-top: 1rem;
			width: 60%;
		}
	}
</style>
