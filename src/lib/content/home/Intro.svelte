<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import ReportForm from '$lib/components/ReportForm.svelte';
</script>

<section id="home-intro-section">
	<Paragraph color="black">
		Entenda os hábitos e comportamentos de quem joga no Brasil atualmente. Explore as principais
		descobertas do estudo e encontre insights para marcas. Baixe um relatório super completo e
		mergulhe nos dados coletados se é curioso, estudioso ou do mundo acadêmico. Divirta-se enquanto
		navega, responda pequenas enquetes sobre o tema e fique por dentro desse universo.
	</Paragraph>
	<ReportForm />
</section>

<style>
	#home-intro-section {
		align-items: flex-start;
		background-color: var(--color-white);
		background-image: url('$lib/assets/backgrounds/background-white.png');
		background-position: center center;
		background-size: cover;
		display: flex;
		justify-self: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#home-intro-section {
			flex-direction: column;
			gap: 0;
			padding: 4rem 7.5vw 2rem 7.5vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#home-intro-section {
			flex-direction: column;
			gap: 0;
			padding: 5rem 15vw 2.5rem 15vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#home-intro-section {
			flex-direction: row;
			gap: 5rem;
			padding: 2.5rem 10vw 1.25rem 10vw;
		}

		#home-intro-section > :global(p) {
			margin-top: 2.5rem;
			max-width: 45%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#home-intro-section {
			flex-direction: row;
			gap: 6rem;
			padding: 3rem 0 1.5rem 0;
			padding-left: calc((100% - 60rem) / 2);
			padding-right: calc((100% - 60rem) / 2);
		}

		#home-intro-section > :global(p) {
			margin-top: 2.5rem;
			max-width: 45%;
		}
	}
</style>
