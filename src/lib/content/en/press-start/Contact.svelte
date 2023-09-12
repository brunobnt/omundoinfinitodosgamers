<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';

	import LiveTalkLogo from '$lib/assets/images/talk-live-en.png';
</script>

<section id="press-start-contact-section">
	<div id="press-start-contact-subsection-1">
		<Title type="special" align="center" color="white">
			The next step is to get in touch with our team
		</Title>
		<Paragraph align="center" color="white">
			<span class="weight-700">
				The participation of brands in the gamesphere has only just begun. Your brand can get
				started with the best strategies.
			</span>
		</Paragraph>
		<a href="mailto:contato@omundoinfinitodosgamers.com.br" target="_blank"> Get in Contact </a>
	</div>
	<div id="press-start-contact-subsection-2">
		<div>
			<img src={LiveTalkLogo} alt="" />
			<div>
				<span>contato @</span>
				<span class="weight-700">o mundo infinito dos gamers</span>
				<span>.com.br</span>
			</div>
		</div>
		<div>
			<a href="mailto:contato@omundoinfinitodosgamers.com.br" target="_blank">
				contato@omundoinfinitodosgamers.com.br
			</a>
		</div>
	</div>
</section>

<style>
	#press-start-contact-section a {
		cursor: pointer;
	}

	#press-start-contact-subsection-1,
	#press-start-contact-subsection-2 {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#press-start-contact-subsection-1 {
		background-color: black;
	}

	#press-start-contact-subsection-1 a {
		background-color: var(--color-yellow-normal);
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 700;
		text-align: center;
		width: fit-content;
	}

	#press-start-contact-subsection-1 a:hover {
		color: var(--color-red-normal);
	}

	#press-start-contact-subsection-2 {
		background-color: var(--color-red-normal);
	}

	#press-start-contact-subsection-2 > div:nth-of-type(1) {
		align-items: center;
		background-color: var(--color-red-normal);
		color: var(--color-white);
		display: flex;
		font-family: 'Fraunces', serif;
		font-weight: 400;
		justify-content: center;
		line-height: 125%;
	}

	#press-start-contact-subsection-2 > div:nth-of-type(2) {
		background-color: var(--color-red-normal);
		color: var(--color-white);
		cursor: pointer;
		font-family: 'Fraunces', serif;
		font-weight: 700;
		margin: 0 auto;
		text-align: center;
		text-decoration: underline;
		width: fit-content;
	}

	#press-start-contact-subsection-2 span {
		display: block;
		width: fit-content;
	}

	@media only screen and (max-width: 768px) {
		#press-start-contact-subsection-1 {
			padding: 4rem 7.5vw;
		}

		#press-start-contact-subsection-1 :global(h2) {
			font-size: 4rem;
			max-width: 16rem;
		}

		#press-start-contact-subsection-1 a {
			border-radius: 0.25rem;
			font-size: 1.125rem;
			margin-top: 2rem;
			padding: 0.75rem 1.25rem 0.875rem 1.25rem;
		}

		#press-start-contact-subsection-2 {
			padding: 2rem 7.5vw;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(1) {
			font-size: 1.5rem;
			gap: 1.25rem;
			margin-bottom: 2rem;
			max-width: unset;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(2) {
			font-size: 0.875rem;
		}

		#press-start-contact-subsection-2 img {
			height: auto;
			width: 5.25rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#press-start-contact-subsection-1 {
			padding: 5rem 20vw;
		}

		#press-start-contact-subsection-1 :global(h2) {
			font-size: 4.5rem;
			max-width: 18rem;
		}

		#press-start-contact-subsection-1 a {
			border-radius: 0.375rem;
			font-size: 1.25rem;
			margin-top: 1.25rem;
			padding: 0.75rem 1.75rem 0.875rem 1.75rem;
		}

		#press-start-contact-subsection-2 {
			padding: 5rem 20vw;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(1) {
			font-size: 1.875rem;
			gap: 1.25rem;
			margin-bottom: 2.5rem;
			max-width: 25rem;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(2) {
			font-size: 1.25rem;
		}

		#press-start-contact-subsection-2 img {
			height: auto;
			width: 8rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#press-start-contact-subsection-1 {
			padding: 5rem 25vw;
		}

		#press-start-contact-subsection-1 :global(h2) {
			font-size: 4.5rem;
			max-width: 18rem;
		}

		#press-start-contact-subsection-1 a {
			border-radius: 0.375rem;
			font-size: 1.25rem;
			margin-top: 1.25rem;
			padding: 0.75rem 1.75rem 0.875rem 1.75rem;
		}

		#press-start-contact-subsection-2 {
			padding: 2.5rem 25vw;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(1) {
			font-size: 1.875rem;
			gap: 1.25rem;
			margin-bottom: 2.5rem;
			max-width: 25rem;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(2) {
			font-size: 1.25rem;
		}

		#press-start-contact-subsection-2 img {
			height: auto;
			width: 8rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#press-start-contact-subsection-1 {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#press-start-contact-subsection-1 :global(h2) {
			font-size: 5rem;
			max-width: 20rem;
		}

		#press-start-contact-subsection-1 a {
			border-radius: 0.5rem;
			font-size: 1.5rem;
			margin-top: 1.5rem;
			padding: 0.75rem 2rem 0.875rem 2rem;
		}

		#press-start-contact-subsection-2 {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#press-start-contact-subsection-2 > div:nth-of-type(1) {
			font-size: 2rem;
			gap: 1.5rem;
			margin-bottom: 3rem;
			max-width: 30rem;
		}

		#press-start-contact-subsection-2 > div:nth-of-type(2) {
			font-size: 1.5rem;
		}

		#press-start-contact-subsection-2 img {
			height: auto;
			width: 10rem;
		}
	}
</style>
