<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import MainIcon from '$lib/assets/icons/fantasy-3.svg';
	import BadSideIcon from '$lib/assets/icons/fantasy-bad-side-3.svg';
	import GoodSideIcon from '$lib/assets/icons/fantasy-good-side-3.svg';
	import ContentWords from '$lib/assets/images/en/c3-content-words.svg';
	import MortalKombatImage from '$lib/assets/images/c3-mortal-kombat.gif';

	const chartsData = [
		{
			file: '/charts/chapter-3/en/2.svg',
			title: 'How do video games affect your intellectual abilities?'
		},
		{
			file: '/charts/chapter-3/en/3.svg',
			title: 'How do video games affect your cognitive abilities?'
		}
	];
</script>

<section id="paradox-content-section">
	<div id="paradox-content-section-cover">
		<Title type="special" align="center" color="white">Form and content</Title>
	</div>
	<div class="cover-icon-wrapper">
		<img src={MainIcon} alt="" />
	</div>
	<div id="paradox-content-subsection-1">
		<div class="paradox-subsection-divider-good">
			<img src={GoodSideIcon} alt="" />
			<div>
				<h6>Intellectual and cognitive development</h6>
				<p>POSITIVE IMPACT OF <span class="weight-700">FORM AND CONTENT</span></p>
			</div>
		</div>
		<Paragraph color="blue-darker">
			For most people, gaming trains them for things in life. Emotional reports show that game
			strategy and socio-emotional skills can be transferred to better deal with moments in “real
			life”.
		</Paragraph>
		<div id="paradox-content-highlight-wrapper" />
		<Carousel>
			{#each chartsData as chart}
				<div class="profile-behavior-chart">
					<h2>{chart.title}</h2>
					<img src={base + chart.file} alt={chart.title} />
				</div>
			{/each}
		</Carousel>
		<div class="display-flex-wrapper">
			<Paragraph color="blue-darker">
				Some of the socio-emotional and other skills that were pointed out in the players' reports:
			</Paragraph>
			<Image src={ContentWords} alt="" />
		</div>
		<Carousel>
			<PostIt
				title="Character formation"
				author="Male, 33 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“The games have had a huge impact on my life. They have taught me valuable lessons about
				courage, determination, imagination, friendship, loss, redemption and teamwork. Each one,
				from Chrono Trigger to The Last of Us, has provided experiences that have completely shaped
				who I am today.”
			</PostIt>
			<PostIt
				title="Concentration"
				author="Male, 25 years old, RS"
				background="blue-dark"
				color="white"
			>
				“Games keep me very focused and help me with this particular issue. I learn a lot from my
				mistakes in games and this is a constant that is mirrored in real life too.”
			</PostIt>
			<PostIt
				title="Persistence"
				author="Non-binary, 33 years old, Porto Alegre, RS"
				background="blue-dark"
				color="white"
			>
				“Wow, I've learned a lot from gaming. From having willpower, not giving up, always thinking
				ahead and planning for the future, knowing how to reason and not rushing into risky
				situations...”
			</PostIt>
		</Carousel>
	</div>
	<div id="paradox-content-subsection-2">
		<div class="paradox-subsection-divider-bad">
			<img src={BadSideIcon} alt="" />
			<div>
				<h6>Can some games generate negative feelings?</h6>
				<p>NEGATIVE IMPACT OF <span class="weight-700">FORM AND CONTENT</span></p>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<div>
				<Paragraph color="red-darker">
					As well as de-stressing, gaming can generate negative feelings of anxiety, according to
					some reports.
				</Paragraph>
				<Paragraph color="red-darker">
					However, recent studies (such as one with 40,000 gamers by <a
						href="https://royalsocietypublishing.org/doi/10.1098/rsos.220411"
						target="_blank">Oxford University</a
					>) have found no evidence that gaming affects people's mental state.
				</Paragraph>
			</div>
			<div>
				<Image src={MortalKombatImage} alt="" />
				<Legend color="red-darker">
					Friendship is a Mortal Kombat finishing move introduced in response to the controversies
					surrounding Fatality moves. Credits:
					<a href="https://mortalkombat.fandom.com/pt-br/wiki/Mortal_Kombat_II" target="_blank"
						>Mortal Kombat Wiki</a
					>.
				</Legend>
			</div>
		</div>
		<Carousel>
			<PostIt
				title="Stress and de-stress"
				author="Female, 24 years old, Rio de Janeiro, RJ"
				background="red-dark"
				color="white"
			>
				“I usually leave work, go to Valorant, get stressed out, and then we play Human Fall Flat to
				de-stress.”
			</PostIt>
			<PostIt title="Anxiety and anger" author="Male, 23, RS" background="red-dark" color="white">
				“The game gives you two sensations: anxiety and anger.”
			</PostIt>
		</Carousel>
	</div>
</section>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#paradox-content-section .display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	#paradox-content-section-cover {
		align-items: center;
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-c3-content-cover.svg');
		background-size: cover;
		background-repeat: repeat-x;
		overflow-x: clip;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		position: sticky;
		top: 0;
		z-index: -1;
	}

	#paradox-content-subsection-1 {
		align-items: center;
		background-color: var(--color-blue-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-content-subsection-2 {
		align-items: center;
		background-color: var(--color-red-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-content-highlight-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c3-content-highlight.svg');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.cover-icon-wrapper {
		align-items: center;
		background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);
		display: flex;
		justify-content: center;
	}

	.cover-icon-wrapper img {
		animation: spin 10s linear infinite;
		height: 100%;
	}

	.paradox-subsection-divider-bad,
	.paradox-subsection-divider-good {
		align-items: center;
		background-color: var(--color-white);
		display: flex;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.paradox-subsection-divider-bad {
		border-bottom: 3px solid var(--color-red-normal);
	}

	.paradox-subsection-divider-good {
		border-bottom: 3px solid var(--color-blue-normal);
	}

	.paradox-subsection-divider-bad h6,
	.paradox-subsection-divider-good h6 {
		font-family: 'Fraunces', serif;
		font-weight: 600;
		line-height: 115%;
	}

	.paradox-subsection-divider-bad h6 {
		color: var(--color-red-normal);
	}

	.paradox-subsection-divider-good h6 {
		color: var(--color-blue-normal);
	}

	.paradox-subsection-divider-bad p,
	.paradox-subsection-divider-good p {
		color: var(--color-black);
		font-family: 'Overpass Mono', monospace;
		font-weight: 300;
		letter-spacing: -0.025rem;
		line-height: 125%;
		text-transform: uppercase;
	}

	.profile-behavior-chart {
		background-color: var(--color-white);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-black);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 400;
		letter-spacing: 0.09rem;
		text-align: left;
		text-transform: uppercase;
	}

	.profile-behavior-chart img {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-content-section-cover {
			background-position: 80% center;
			margin-bottom: -10rem;
			padding: 0 7.5vw 5rem 7.5vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 5rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 7.5vw 2rem 7.5vw;
		}

		#paradox-content-highlight-wrapper {
			height: calc(100vw * 2);
			margin: 2rem 0 0 0;
			margin-bottom: calc(100vw * -1.25);
			padding-top: calc(100vw * 0.5);
			width: 100vw;
		}

		.cover-icon-wrapper {
			height: 10rem;
			padding-bottom: 2rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1rem;
			margin: 0 -7.5vw 2rem -7.5vw;
			padding: 0.75rem 0.75rem;
			width: calc(100% + 15vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 4rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.5rem;
			margin-bottom: 0.25rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.75rem;
		}

		.profile-behavior-chart {
			height: 38rem;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-content-section-cover {
			background-position: 90% center;
			margin-bottom: -12.5rem;
			padding: 0 15vw 6.25rem 15vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2.5rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 15vw 2.5rem 15vw;
		}

		#paradox-content-highlight-wrapper {
			height: calc(70vw * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(70vw * -1.25);
			padding-top: calc(70vw * 0.5);
			width: 70vw;
		}

		.cover-icon-wrapper {
			height: 12.5rem;
			padding-bottom: 2.5rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.25rem;
			margin: 0 -15vw 2.5rem -15vw;
			padding: 1.25rem 2.5rem;
			width: calc(100% + 30vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 5rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.75rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.875rem;
		}

		.profile-behavior-chart {
			height: 42.5rem;
			padding: 2.5rem 1.25rem;
			width: 22.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: row;
			gap: 5rem;
			margin: 0 -10vw;
		}

		#paradox-content-section .display-flex-wrapper > :global(div),
		#paradox-content-section .display-flex-wrapper > :global(p),
		#paradox-content-section .display-flex-wrapper > :global(img) {
			width: 50%;
		}

		#paradox-content-section .display-flex-wrapper :global(img),
		#paradox-content-section .display-flex-wrapper :global(.p-legend) {
			max-width: 35vw;
			width: 100%;
		}

		#paradox-content-section-cover {
			background-position: center center;
			margin-bottom: -12.5rem;
			padding: 0 20vw 6.25rem 20vw;
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 2.5rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 20vw 2.5rem 20vw;
		}

		#paradox-content-highlight-wrapper {
			height: calc(40vw * 2);
			margin: 2.5rem 0 0 0;
			margin-bottom: calc(40vw * -1.25);
			padding-top: calc(40vw * 0.5);
			width: 40vw;
		}

		.cover-icon-wrapper {
			height: 12.5rem;
			padding-bottom: 2.5rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.25rem;
			margin: 0 -20vw 2.5rem -20vw;
			padding: 1.25rem 2.5rem;
			width: calc(100% + 40vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 5rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 1.75rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 0.875rem;
		}

		.profile-behavior-chart {
			height: 45rem;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-content-section .display-flex-wrapper {
			flex-direction: row;
			gap: 6rem;
			margin: 0 -10rem;
		}

		#paradox-content-section .display-flex-wrapper > :global(div),
		#paradox-content-section .display-flex-wrapper > :global(p),
		#paradox-content-section .display-flex-wrapper > :global(img) {
			width: 50%;
		}

		#paradox-content-section .display-flex-wrapper :global(img),
		#paradox-content-section .display-flex-wrapper :global(.p-legend) {
			max-width: 30rem;
			width: 100%;
		}

		#paradox-content-section-cover {
			background-position: center center;
			margin-bottom: -15rem;
			padding: 0 0 7.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-content-section-cover :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-content-subsection-1 :global(.carousel-container:nth-of-type(3)) {
			margin-bottom: 3rem;
		}

		#paradox-content-subsection-1,
		#paradox-content-subsection-2 {
			padding: 0 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-content-highlight-wrapper {
			height: calc(35rem * 2);
			margin: 3rem 0 0 0;
			margin-bottom: calc(35rem * -1.25);
			padding-top: calc(35rem * 0.5);
			width: 35rem;
		}

		.cover-icon-wrapper {
			height: 15rem;
			padding-bottom: 3rem;
		}

		.paradox-subsection-divider-bad,
		.paradox-subsection-divider-good {
			gap: 1.5rem;
			margin: 0 0 3rem 0;
			padding: 1.5rem 6rem;
			width: calc(100vw);
		}

		.paradox-subsection-divider-bad img,
		.paradox-subsection-divider-good img {
			width: 6rem;
		}

		.paradox-subsection-divider-bad h6,
		.paradox-subsection-divider-good h6 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		.paradox-subsection-divider-bad p,
		.paradox-subsection-divider-good p {
			font-size: 1rem;
		}

		.profile-behavior-chart {
			height: 45rem;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}
	}
</style>
