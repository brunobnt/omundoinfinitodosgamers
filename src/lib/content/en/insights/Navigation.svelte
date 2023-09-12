<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import ReportForm from '$lib/components/en/ReportForm.svelte';

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<section id="insights-navigation-section">
	<Title type="special" color="black">3 strategies</Title>
	<Title type="component" color="black">
		for brands that want to be part of the Gamesphere and don't know how
	</Title>
	<Paragraph color="black">Click on the summary to navigate:</Paragraph>
	<nav id="insights-navigation-options">
		<button on:click={() => scrollToSection('insights-legitimacy-section')}>
			<span class="color-red">1 - </span>Recognize the legitimacy of the Gamesphere
		</button>
		<button on:click={() => scrollToSection('insights-diversity-section')}>
			<span class="color-red">2 - </span>Promote a more plural and diverse Gamesphere
		</button>
		<button on:click={() => scrollToSection('insights-environment-section')}>
			<span class="color-red">3 - </span>Transform the Gamesphere into a friendlier environment
		</button>
		<button on:click={() => scrollToSection('insights-contact-section')}>
			<span class="color-red">Get in touch</span>
		</button>
	</nav>
	<ReportForm />
</section>

<style>
	#insights-navigation-section {
		background-color: var(--color-yellow-normal);
		overflow-x: clip;
	}

	#insights-navigation-section :global(h2) {
		margin-bottom: 0;
	}

	#insights-navigation-options {
		margin-top: 1rem;
	}

	#insights-navigation-options button {
		border-bottom: 3px dotted var(--color-black);
		display: block;
		color: var(--color-black);
		cursor: pointer;
		font-family: 'Press Start 2P', monospace;
		font-size: 0.75rem;
		line-height: 150%;
		text-align: left;
		text-transform: uppercase;
		padding: 2rem 0;
		width: 100%;
	}

	#insights-navigation-options button:hover {
		color: var(--color-red-normal);
	}

	#insights-navigation-options button:last-of-type {
		border: none;
	}

	@media only screen and (max-width: 768px) {
		#insights-navigation-section {
			padding: 4rem 7.5vw;
		}

		#insights-navigation-section :global(h5) {
			margin-bottom: 2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-navigation-section {
			padding: 5rem 15vw;
		}

		#insights-navigation-section :global(h5) {
			margin-bottom: 2.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-navigation-section {
			padding: 5rem 20vw;
		}

		#insights-navigation-section :global(h5) {
			margin-bottom: 2.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-navigation-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-navigation-section :global(h5) {
			margin-bottom: 3rem;
		}
	}
</style>
