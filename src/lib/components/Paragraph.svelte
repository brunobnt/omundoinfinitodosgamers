<script>
	export let align = 'left';
	export let color = 'black';

	const classList = `color-${color} align-${align}`;
</script>

<p class={classList}>
	<slot />
</p>

<style>
	p {
		font-family: 'Fraunces', serif;
		font-weight: 300;
		line-height: 150%;
		width: 100%;
	}

	p :global(a) {
		color: inherit;
		cursor: pointer;
		text-decoration: underline;
	}

	@media only screen and (max-width: 768px) {
		p {
			font-size: 1rem;
			margin-bottom: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		p {
			font-size: 1.125rem;
			margin-bottom: 1.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		p {
			font-size: 1.125rem;
			margin-bottom: 1.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		p {
			font-size: 1.25rem;
			margin-bottom: 1.75rem;
		}
	}
</style>
