<script>
	export let title = '';
	export let author = '';
	export let background = 'white';
	export let color = 'black';
</script>

<article class={`postit background-${background}`}>
	<h5 class={`color-${color}`}>{title}</h5>
	<p class={`color-${color}`}><slot /></p>
	<h6 class={`color-${color}`}>{author}</h6>
</article>

<style>
	article {
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		text-align: left;
	}

	h5 {
		font-family: 'Fraunces', serif;
		font-weight: 700;
		line-height: 150%;
	}

	h6 {
		font-family: 'Press Start 2P', monospace;
		letter-spacing: -0.005rem;
		line-height: 160%;
		text-decoration: underline;
		text-transform: uppercase;
	}

	p {
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-weight: 300;
		line-height: 125%;
	}

	article.background-white {
		background-color: var(--color-white);
	}

	article.background-red {
		background-color: var(--color-red-normal);
	}

	article.background-yellow {
		background-color: var(--color-yellow-normal);
	}

	article.background-green {
		background-color: var(--color-green-normal);
	}

	article.background-blue-light {
		background-color: var(--color-blue-light);
	}

	article.background-yellow-light {
		background-color: var(--color-yellow-light);
	}

	article.background-red-dark {
		background-color: var(--color-red-dark);
	}

	article.background-blue-dark {
		background-color: var(--color-blue-dark);
	}

	@media only screen and (max-width: 768px) {
		article {
			margin: 1rem auto;
			padding: 1rem;
			width: 18rem;
		}

		h5 {
			font-size: 1rem;
			margin-bottom: 1rem;
		}

		h6 {
			font-size: 0.5rem;
			margin-top: 1.25rem;
		}

		p {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		article {
			margin: 1.25rem auto;
			padding: 1.25rem;
			width: 20rem;
		}

		h5 {
			font-size: 1rem;
			margin-bottom: 1.25rem;
		}

		h6 {
			font-size: 0.525rem;
			margin-top: 1.5rem;
		}

		p {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		article {
			margin: 1.25rem auto;
			padding: 1.25rem;
			width: 20rem;
		}

		h5 {
			font-size: 1rem;
			margin-bottom: 1.25rem;
		}

		h6 {
			font-size: 0.525rem;
			margin-top: 1.5rem;
		}

		p {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		article {
			margin: 1.5rem auto;
			padding: 1.5rem;
			width: 22rem;
		}

		h5 {
			font-size: 1.125rem;
			margin-bottom: 1.5rem;
		}

		h6 {
			font-size: 0.55rem;
			margin-top: 1.75rem;
		}

		p {
			font-size: 1.125rem;
		}
	}
</style>
