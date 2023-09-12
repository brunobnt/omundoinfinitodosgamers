<script>
	export let align = 'left';
	export let color = 'black';

	const classList = `p-highlight color-${color} align-${align}`;
</script>

<p class={classList}>
	<slot />
</p>

<style>
	p.p-highlight {
		display: block;
		font-family: 'Fraunces', serif;
		font-weight: 600;
		line-height: 125%;
	}

	@media only screen and (max-width: 768px) {
		p.p-highlight {
			font-size: 1.5rem;
			margin: 0 0 1.5rem 0;
			text-align: left;
		}
	}

	@media only screen and (min-width: 768px) {
		p.p-highlight {
			font-size: 1.75rem;
			margin: 0 10% 2rem 10%;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1280px) {
		p.p-highlight {
			font-size: 1.75rem;
			margin: 0 10% 2rem 10%;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1536px) {
		p.p-highlight {
			font-size: 2rem;
			margin: 0 20% 2.5rem 20%;
			text-align: center;
		}
	}
</style>
