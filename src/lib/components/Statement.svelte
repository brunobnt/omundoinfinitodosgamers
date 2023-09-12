<script>
	export let image;
	export let author = '';
	export let background = 'white';
	export let border = 'black';
	export let color = 'black';
</script>

<article class={`statement background-${background} border-${border}`}>
	<img src={image} alt="Imagem do(a) autor(a)" />
	<div>
		<h6 class={`color-${color}`}>{author}</h6>
		<p class={`color-${color}`}><slot /></p>
	</div>
</article>

<style>
	article {
		border: 5px solid;
		box-shadow: 10px 15px 20px rgb(0 0 0 / 0.75);
		display: flex;
		height: min-content;
		max-width: 50rem;
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

	article.background-gray-light {
		background-color: var(--color-gray-light);
	}

	article.background-red-darker {
		background-color: var(--color-red-darker);
	}

	article.background-blue-darker {
		background-color: var(--color-blue-darker);
	}

	article.background-green-darker {
		background-color: var(--color-green-darker);
	}

	article.background-darkgreen {
		background-color: var(--color-background-darkgreen);
	}

	article.border-black {
		border-color: var(--color-black);
	}

	article.border-red {
		border-color: var(--color-red-normal);
	}

	article.border-blue {
		border-color: var(--color-blue-normal);
	}

	article.border-green {
		border-color: var(--color-green-normal);
	}

	@media only screen and (max-width: 768px) {
		article {
			margin: 2rem 0;
		}

		img {
			height: 5rem;
			margin: 0;
			width: 5rem;
		}

		div {
			padding: 2rem 1.5rem;
		}

		h6 {
			font-size: 0.5rem;
			margin-bottom: 1rem;
		}

		p {
			font-size: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		article {
			margin: 2.5rem 0;
		}

		img {
			height: 10rem;
			margin: 1.5rem 1.25rem 1.5rem 1.5rem;
			width: 10rem;
		}

		div {
			padding: 1.5rem;
		}

		h6 {
			font-size: 0.6rem;
			margin-bottom: 1.25rem;
		}

		p {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		article {
			margin: 2.5rem 0;
		}

		img {
			height: 10rem;
			margin: 1.5rem 1.25rem 1.5rem 1.5rem;
			width: 10rem;
		}

		div {
			padding: 1.5rem;
		}

		h6 {
			font-size: 0.6rem;
			margin-bottom: 1.25rem;
		}

		p {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		article {
			margin: 3rem 0;
		}

		img {
			height: 12rem;
			margin: 1.75rem 0.75rem 1.75rem 2rem;
			width: 12rem;
		}

		div {
			padding: 1.75rem 2rem;
		}

		h6 {
			font-size: 0.55rem;
			margin-bottom: 1.5rem;
		}

		p {
			font-size: 1.125rem;
		}
	}
</style>
