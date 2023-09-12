<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<section id="home-method-section">
	<div id="home-method-title-wrapper"><span>About the project</span></div>
	<Paragraph color="black">
		This project is a continuation and deepening of a study on gamers carried out by the research
		company Talk Inc in 2017. Now, in partnership with the ℓiⱴε agency, we are seeking to understand
		the complexity of the gaming universe, since so many things have changed in six years. So we
		combined research and communication to investigate the behavior of gamers and understand the
		role of brands in a more challenging scenario.
	</Paragraph>
	<h2>Methodology</h2>
	<div class="display-flex-wrapper">
		<div id="home-method-quantitative-info">
			<h3>Quantitative Survey</h3>
			<div>
				<h4>1597</h4>
				<h5>individuals</h5>
			</div>
			<div>
				<h6>Men and women</h6>
				<h6>16 to 50 years</h6>
				<h6>ABCD Classes</h6>
				<h6>Brazil</h6>
			</div>
		</div>
		<div>
			<div id="home-method-qualitative-info">
				<h3>Qualitative Survey</h3>
				<div>
					<h4>118</h4>
					<div>
						<h5>individuals</h5>
						<h6>Online survey</h6>
					</div>
				</div>
			</div>
			<h6><span class="color-red weight-900">+</span> 3 discussion groups</h6>
			<h6><span class="color-red weight-900">+</span> 11 interviews with experts</h6>
			<Paragraph color="black">
				People and institutions from the ecosystem (developer, ORG, content creator, event, social
				project) and marketing executives from companies/brands that invest in advertising linked to
				games.
			</Paragraph>
			<h6><span class="color-red">+</span> Desk research</h6>
		</div>
	</div>
</section>

<style>
	#home-method-section {
		align-items: center;
		background-color: var(--color-yellow-normal);
		display: flex;
		justify-content: center;
		overflow-x: clip;
	}

	#home-method-section > h2 {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 600;
		width: 100%;
	}

	#home-method-title-wrapper {
		background-image: url('$lib/assets/backgrounds/background-home-stripes-pattern.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: contain;
		color: var(--color-black);
		display: flex;
		font-family: 'Fraunces', serif;
		font-weight: 600;
	}

	#home-method-title-wrapper span {
		background-color: var(--color-yellow-normal);
		line-height: 75%;
	}

	#home-method-quantitative-info > div:first-of-type,
	#home-method-qualitative-info > div:first-of-type {
		align-items: center;
		display: flex;
		justify-content: flex-start;
	}

	#home-method-quantitative-info h3,
	#home-method-qualitative-info h3 {
		color: var(--color-red-normal);
		font-family: 'Fraunces', serif;
		font-weight: 500;
		line-height: 150%;
	}
	#home-method-quantitative-info h4,
	#home-method-qualitative-info h4 {
		color: var(--var-color-black);
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		line-height: 100%;
		text-align: right;
		text-transform: uppercase;
	}

	#home-method-quantitative-info h5,
	#home-method-qualitative-info h5 {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 600;
		line-height: 125%;
	}

	#home-method-quantitative-info h6,
	#home-method-qualitative-info h6 {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 300;
		margin: 0;
	}

	#home-method-qualitative-info h6 {
		text-align: center;
	}

	.display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	.display-flex-wrapper h6 {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 600;
		line-height: 125%;
	}

	.display-flex-wrapper :global(p:last-of-type) {
		margin-bottom: 0;
	}

	@media only screen and (max-width: 768px) {
		#home-method-section {
			flex-direction: column;
			padding: 2rem 7.5vw 4rem 7.5vw;
		}

		#home-method-section > h2 {
			font-size: 1.875rem;
			margin: 2rem 0 1rem 0;
			text-align: left;
		}

		#home-method-title-wrapper {
			font-size: 2rem;
			justify-content: flex-start;
			margin: 0 -7.5vw 1rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		#home-method-title-wrapper span {
			padding: 0 1rem;
		}

		#home-method-quantitative-info > div:first-of-type,
		#home-method-qualitative-info > div:first-of-type {
			gap: 0.75rem;
		}

		#home-method-quantitative-info h3,
		#home-method-qualitative-info h3 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}

		#home-method-qualitative-info h3 {
			margin-top: 2rem;
		}

		#home-method-quantitative-info h4,
		#home-method-qualitative-info h4 {
			font-size: 8rem;
			margin-bottom: 0.5rem;
		}

		#home-method-quantitative-info h5,
		#home-method-qualitative-info h5 {
			font-size: 1.75rem;
		}

		#home-method-quantitative-info h6,
		#home-method-qualitative-info h6 {
			font-size: 1rem;
		}

		#home-method-quantitative-info h6 {
			line-height: 160%;
			padding-left: 0.75rem;
		}

		#home-method-qualitative-info h6 {
			line-height: 125%;
		}

		.display-flex-wrapper {
			align-items: flex-start;
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		.display-flex-wrapper h6 {
			font-size: 1.375rem;
			margin: 1.5rem 0 0.25rem 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#home-method-section {
			flex-direction: column;
			padding: 2.5rem 15vw 5rem 15vw;
		}

		#home-method-section > h2 {
			font-size: 2rem;
			margin: 1.25rem 0 1.25rem 0;
			text-align: left;
		}

		#home-method-title-wrapper {
			font-size: 2.25rem;
			justify-content: flex-start;
			margin: 0 -15vw 1.25rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}

		#home-method-title-wrapper span {
			padding: 0 1rem;
		}

		#home-method-quantitative-info > div:first-of-type,
		#home-method-qualitative-info > div:first-of-type {
			gap: 0.875rem;
		}

		#home-method-quantitative-info h3,
		#home-method-qualitative-info h3 {
			font-size: 1.675rem;
			margin-bottom: 1.25rem;
		}

		#home-method-qualitative-info h3 {
			margin-top: 2.5rem;
		}

		#home-method-quantitative-info h4,
		#home-method-qualitative-info h4 {
			font-size: 10rem;
			margin-bottom: 0.5rem;
		}

		#home-method-quantitative-info h5,
		#home-method-qualitative-info h5 {
			font-size: 2rem;
		}

		#home-method-quantitative-info h6,
		#home-method-qualitative-info h6 {
			font-size: 1.125rem;
		}

		#home-method-quantitative-info h6 {
			line-height: 160%;
			padding-left: 0.875rem;
		}

		#home-method-qualitative-info h6 {
			line-height: 125%;
		}

		.display-flex-wrapper {
			align-items: flex-start;
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		.display-flex-wrapper h6 {
			font-size: 1.5rem;
			margin: 1.25rem 0 0.5rem 0;
		}
	}

	@media only screen and (min-width: 1280px) {
		#home-method-section {
			flex-direction: column;
			padding: 3.75rem 20vw 3.75rem 20vw;
		}

		#home-method-section > h2 {
			font-size: 2rem;
			margin: 2.5rem 1.25rem 1.25rem 0;
			text-align: center;
		}

		#home-method-title-wrapper {
			font-size: 2.5rem;
			justify-content: flex-start;
			margin: 0 -20vw 3.75rem -20vw;
			padding: 0 20vw;
			width: calc(100% + 40vw);
		}

		#home-method-title-wrapper span {
			margin: 0 auto;
			padding: 0 1rem;
		}

		#home-method-quantitative-info > div:first-of-type,
		#home-method-qualitative-info > div:first-of-type {
			gap: 0.875rem;
		}

		#home-method-quantitative-info h3,
		#home-method-qualitative-info h3 {
			font-size: 1.675rem;
			margin-bottom: 1.25rem;
		}

		#home-method-qualitative-info h3 {
			margin-top: 0;
		}

		#home-method-quantitative-info h4,
		#home-method-qualitative-info h4 {
			font-size: 10rem;
			margin-bottom: 0.5rem;
		}

		#home-method-quantitative-info h5,
		#home-method-qualitative-info h5 {
			font-size: 2rem;
		}

		#home-method-quantitative-info h6,
		#home-method-qualitative-info h6 {
			font-size: 1.125rem;
		}

		#home-method-quantitative-info h6 {
			line-height: 160%;
			padding-left: 0.875rem;
		}

		#home-method-qualitative-info h6 {
			line-height: 125%;
		}

		.display-flex-wrapper {
			align-items: flex-start;
			flex-direction: row;
			gap: 5rem;
			margin: 0 -5vw;
			width: calc(100% + 10vw);
		}

		.display-flex-wrapper > div {
			padding: 1.25rem 0;
		}

		.display-flex-wrapper > div:nth-child(2) {
			border-left: 3px dotted var(--color-black);
			padding-left: 5rem;
		}

		.display-flex-wrapper h6 {
			font-size: 1.5rem;
			margin: 1.25rem 0 0.5rem 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#home-method-section {
			flex-direction: column;
			padding: 4.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#home-method-section > h2 {
			font-size: 2.25rem;
			margin: 1.5rem 0;
			text-align: center;
		}

		#home-method-title-wrapper {
			font-size: 2.75rem;
			justify-content: flex-start;
			margin: 0 0 3rem 0;
			padding: 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}

		#home-method-title-wrapper span {
			line-height: 100%;
			margin: 0 auto;
			padding: 0 1rem;
		}

		#home-method-quantitative-info > div:first-of-type,
		#home-method-qualitative-info > div:first-of-type {
			gap: 0.875rem;
		}

		#home-method-quantitative-info h3,
		#home-method-qualitative-info h3 {
			font-size: 1.675rem;
			margin-bottom: 1.25rem;
		}

		#home-method-qualitative-info h3 {
			margin-top: 0;
		}

		#home-method-quantitative-info h4,
		#home-method-qualitative-info h4 {
			font-size: 10rem;
			margin-bottom: 0.5rem;
		}

		#home-method-quantitative-info h5,
		#home-method-qualitative-info h5 {
			font-size: 2rem;
		}

		#home-method-quantitative-info h6,
		#home-method-qualitative-info h6 {
			font-size: 1.125rem;
		}

		#home-method-quantitative-info h6 {
			line-height: 160%;
			padding-left: 0.875rem;
		}

		#home-method-qualitative-info h6 {
			line-height: 125%;
		}

		.display-flex-wrapper {
			align-items: flex-start;
			flex-direction: row;
			gap: 5rem;
			margin: 0;
			width: 100%;
		}

		.display-flex-wrapper > div {
			padding: 1.25rem 0;
		}

		.display-flex-wrapper > div:nth-child(2) {
			border-left: 3px dotted var(--color-black);
			padding-left: 5rem;
		}

		.display-flex-wrapper h6 {
			font-size: 1.5rem;
			margin: 1.25rem 0 0.5rem 0;
		}
	}
</style>
