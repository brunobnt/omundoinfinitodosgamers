<script>
	import Title from '$lib/components/Title.svelte';
</script>

<section id="insights-download-section">
	<Title type="special" align="center" color="white">
		The work of brands in the Gamesphere has only just begun
	</Title>
</section>
<section id="insights-contact-section">
	<div>Get in touch with our team to customize insights for your company.</div>
	<div>
		<span>contato @</span>
		<span class="weight-700">o mundo infinito dos gamers</span>
		<span>.com.br</span>
	</div>
	<div>
		<a href="mailto:contato@omundoinfinitodosgamers.com.br" target="_blank">
			contato@omundoinfinitodosgamers.com.br
		</a>
	</div>
</section>

<style>
	#insights-download-section {
		align-items: center;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#insights-download-section :global(h2) {
		margin-bottom: 0;
	}

	#insights-contact-section {
		overflow-x: clip;
	}

	#insights-contact-section > div:nth-of-type(1) {
		background-color: var(--color-black);
		color: var(--color-white);
		font-family: 'Fraunces', serif;
		font-weight: 700;
		line-height: 150%;
	}

	#insights-contact-section > div:nth-of-type(2) {
		background-color: var(--color-red-normal);
		color: var(--color-white);
		font-family: 'Fraunces', serif;
		font-weight: 400;
		line-height: 125%;
	}

	#insights-contact-section > div:nth-of-type(3) {
		background-color: var(--color-red-normal);
		color: var(--color-white);
		cursor: pointer;
		font-family: 'Fraunces', serif;
		font-weight: 700;
		text-align: center;
		text-decoration: underline;
	}

	#insights-contact-section span {
		display: block;
	}

	@media only screen and (max-width: 768px) {
		#insights-download-section {
			padding: 4rem 7.5vw;
		}

		#insights-download-section :global(h2) {
			font-size: 4rem;
		}

		#insights-contact-section > div:nth-of-type(1) {
			font-size: 1rem;
			padding: 2rem 7.5vw;
			text-align: left;
		}

		#insights-contact-section > div:nth-of-type(2) {
			font-size: 2rem;
			padding: 2rem 7.5vw;
		}

		#insights-contact-section > div:nth-of-type(3) {
			font-size: 0.875rem;
			padding: 0 7.5vw 2rem 7.5vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-download-section {
			padding: 5rem 15vw;
		}

		#insights-download-section :global(h2) {
			font-size: 4.5rem;
		}

		#insights-contact-section > div:nth-of-type(1) {
			font-size: 1.25rem;
			padding: 2.5rem 15vw;
			text-align: center;
		}

		#insights-contact-section > div:nth-of-type(2) {
			font-size: 3rem;
			padding: 2.5rem 15vw;
		}

		#insights-contact-section > div:nth-of-type(3) {
			font-size: 1.125rem;
			padding: 0 15vw 2.5rem 15vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-download-section {
			padding: 5rem 20vw;
		}

		#insights-download-section :global(h2) {
			font-size: 5rem;
		}

		#insights-contact-section > div:nth-of-type(1) {
			font-size: 1.25rem;
			padding: 2.5rem 20vw;
			text-align: center;
		}

		#insights-contact-section > div:nth-of-type(2) {
			font-size: 3rem;
			padding: 2.5rem 20vw;
		}

		#insights-contact-section > div:nth-of-type(3) {
			font-size: 1.125rem;
			padding: 0 20vw 2.5rem 20vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-download-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-download-section :global(h2) {
			font-size: 6rem;
		}

		#insights-contact-section > div:nth-of-type(1) {
			font-size: 1.5rem;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-contact-section > div:nth-of-type(2) {
			font-size: 3.25rem;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-contact-section > div:nth-of-type(3) {
			font-size: 1.25rem;
			padding: 0 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
