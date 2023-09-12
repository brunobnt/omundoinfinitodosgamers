<script>
	export let type = 'section';
	export let align = 'left';
	export let color = 'black';

	const classList = `color-${color} align-${align}`;
</script>

{#if type === 'special'}
	<h2 class={classList}><slot /></h2>
{:else if type === 'section'}
	<h3 class={classList}><slot /></h3>
{:else if type === 'subsection'}
	<h4 class={classList}><slot /></h4>
{:else}
	<h5 class={classList}><slot /></h5>
{/if}

<style>
	h2 {
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		line-height: 125%;
		text-transform: uppercase;
		width: 100%;
	}

	h3 {
		display: block;
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.08rem;
		line-height: 115%;
		text-transform: uppercase;
		width: 100%;
	}

	h4 {
		font-family: 'Overpass', monospace;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.125rem;
		line-height: 125%;
		text-transform: uppercase;
		width: 100%;
	}

	h5 {
		display: block;
		font-family: 'Fraunces', serif;
		font-weight: 700;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		h2 {
			font-size: 3.25rem;
			margin-bottom: 1.5rem;
			padding-right: 0;
		}

		h3 {
			font-size: 2rem;
			margin-bottom: 1.5rem;
			padding-right: 0;
		}

		h4 {
			font-size: 1.25rem;
			margin-bottom: 1.5rem;
			padding-right: 0;
		}

		h5 {
			font-size: 1.25rem;
			margin-bottom: 1rem;
			padding-right: 0;
		}
	}

	@media only screen and (min-width: 768px) {
		h2 {
			font-size: 4.25rem;
			margin-bottom: 1.75rem;
			padding-right: 0;
		}

		h3 {
			font-size: 2.25rem;
			margin-bottom: 1.75rem;
			padding-right: 15%;
		}

		h4 {
			font-size: 1.5rem;
			margin-bottom: 1.75rem;
			padding-right: 15%;
		}

		h5 {
			font-size: 1.5rem;
			margin-bottom: 1.25rem;
			padding-right: 15%;
		}

		h3.align-center,
		h4.align-center,
		h5.align-center {
			padding: 0 7.5%;
		}
	}

	@media only screen and (min-width: 1280px) {
		h2 {
			font-size: 4.25rem;
			margin-bottom: 1.75rem;
			padding-right: 0;
		}

		h3 {
			font-size: 2.25rem;
			margin-bottom: 1.75rem;
			padding-right: 15%;
		}

		h4 {
			font-size: 1.5rem;
			margin-bottom: 1.75rem;
			padding-right: 15%;
		}

		h5 {
			font-size: 1.5rem;
			margin-bottom: 1.25rem;
			padding-right: 15%;
		}

		h3.align-center,
		h4.align-center,
		h5.align-center {
			padding: 0 7.5%;
		}
	}

	@media only screen and (min-width: 1536px) {
		h2 {
			font-size: 5.25rem;
			margin-bottom: 2rem;
			padding-right: 0;
		}

		h3 {
			font-size: 2.5rem;
			margin-bottom: 2rem;
			padding-right: 25%;
		}

		h4 {
			font-size: 1.75rem;
			margin-bottom: 2rem;
			padding-right: 25%;
		}

		h5 {
			font-size: 1.75rem;
			margin-bottom: 1.5rem;
			padding-right: 25%;
		}

		h3.align-center,
		h4.align-center,
		h5.align-center {
			padding: 0 12.5%;
		}
	}
</style>
