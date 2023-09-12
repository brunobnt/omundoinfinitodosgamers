<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Portals from '$lib/components/Portals.svelte';

	import MainIcon from '$lib/assets/icons/fantasy-1.svg';
	import BadSideIcon from '$lib/assets/icons/fantasy-bad-side-1.svg';
	import GoodSideIcon from '$lib/assets/icons/fantasy-good-side-1.svg';

	const chartsData = [
		{
			file: '/charts/chapter-3/en/0.svg',
			title: 'How do video games affect your mental health?'
		}
	];
</script>

<section id="paradox-realities-section">
	<div id="paradox-realities-section-cover">
		<Title type="special" align="center" color="white">Experiencing other realities</Title>
	</div>
	<div class="cover-icon-wrapper">
		<img src={MainIcon} alt="" />
	</div>
	<div id="paradox-realities-subsection-1">
		<div class="paradox-subsection-divider-good">
			<img src={GoodSideIcon} alt="" />
			<div>
				<h6>Therapeutic effect</h6>
				<p>POSITIVE IMPACT OF <span class="weight-700">EXPERIENCING OTHER REALITIES</span></p>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<Paragraph color="blue-darker">
				Many people report the game's ability to distract, as a form of entertainment, but there are
				also those who say it helps them deal with a reality that can be stressful or boring. This
				leisure time is seen as therapeutic - relaxing, de-stressing - and even helping to deal with
				depression. By overcoming challenges, they say they learn and feel better about themselves.
			</Paragraph>
			<div>
				<div id="paradox-realities-highlight-wrapper" />
				{#each chartsData as chart}
					<div class="profile-behavior-chart">
						<h2>{chart.title}</h2>
						<img src={base + chart.file} alt={chart.title} />
					</div>
				{/each}
			</div>
		</div>
		<Title type="component" color="blue-darker">Combats stress, anxiety and depression</Title>
		<Carousel>
			<PostIt
				title="Journey to another reality"
				author="Female, 25 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“I find in games a journey to another reality - magical, creative, intriguing, full of
				adventure and puzzles - which helps me deal with the stress of routine.”
			</PostIt>
			<PostIt
				title="De-stressing"
				author="Female, 43, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“I think gaming has a therapeutic importance in my life, because through it I forget about
				the real world and de-stress.”
			</PostIt>
			<PostIt
				title="Peace and family"
				author="Female, 38 years old, Salvador, BA"
				background="blue-dark"
				color="white"
			>
				“It brings me peace, reduces my anxiety and brings me closer to my daughter.”
			</PostIt>
			<PostIt
				title="Pastime"
				author="Woman, 42 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“It's my favorite pastime. You could say it's a daily anti-depressant.”
			</PostIt>
			<PostIt
				title="Escape valve"
				author="Male, 29 years old, Niterói, RJ"
				background="blue-dark"
				color="white"
			>
				“Today it's my escape valve, it took me out of a depressive moment.”
			</PostIt>
		</Carousel>
		<Title type="component" color="blue-darker">Self-esteem and empowerment</Title>
		<Carousel>
			<PostIt
				title="Courage"
				author="Male, 21 years old, Salvador, BA"
				background="blue-dark"
				color="white"
			>
				“I was a child who was very shy, very reclusive and the access to games enabled me to meet
				people, to develop, because if you had contact with other people, even if you weren't there
				physically, so you had more courage. It's something the internet provides, so it made me
				develop my more outgoing aspect a lot, I started to not be afraid of expressing myself.”
			</PostIt>
			<PostIt
				title="Empowerment"
				author="Male, 35 years old, DF"
				background="blue-dark"
				color="white"
			>
				“I like choosing ou becoming that character - or the one I used to play in the video game
				with and who gave me the feeling of freedom, of empowerment. I am capable, I want to, I
				can.”
			</PostIt>
			<PostIt
				title="Potential"
				author="Female, 29 years old, DF"
				background="blue-dark"
				color="white"
			>
				“With games I learn that I am capable of whatever I want and that I can always learn
				something new every day.”
			</PostIt>
		</Carousel>
	</div>
	<div id="paradox-realities-subsection-2">
		<div class="paradox-subsection-divider-bad">
			<img src={BadSideIcon} alt="" />
			<div>
				<h6>Escape from reality</h6>
				<p>NEGATIVE IMPACT OF <span class="weight-700">EXPERIENCING OTHER REALITIES</span></p>
			</div>
		</div>
		<Portals>
			<Highlight align="center" color="white">
				Living immersed in other realities can also have an escapist aspect, not always positive,
				which can lead to social reclusion
			</Highlight>
			<span class="big-number">19%</span>
			<Highlight align="center" color="white">
				of respondents say that escaping from reality is a motivation to play
			</Highlight>
		</Portals>
		<Carousel>
			<PostIt
				title="Playing too much can have negative consequences"
				author="Female, 26 years old, São Paulo, SP"
				background="red-dark"
				color="white"
			>
				“I believe that everything has to be done with balance. Extreme dedication to gaming can get
				in the way of family life, erode relationships and even cause relationships to break down.
				I've heard of people who were so addicted to games that they would spend the night playing
				and miss work/study, resulting in layoffs and loss of the school year.”
			</PostIt>
			<PostIt
				title="Not seeing time pass..."
				author="Male, 27 years old, São Paulo, SP"
				background="red-dark"
				color="white"
			>
				“Sometimes I can get distracted from my surroundings when I'm playing games... and don't pay
				as much attention to things at home in general. Sometimes I've spent enough time playing
				games that I haven't even noticed the time.”
			</PostIt>
			<PostIt
				title="Detachment from reality"
				author="Female, 33 years old, Santo André, SP"
				background="red-dark"
				color="white"
			>
				“I believe that there is support and connection between “geeks” (myself included) who seek
				to distance themselves a little from reality and find people with similar feelings.”
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

	#paradox-realities-section .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#paradox-realities-section .display-flex-wrapper div {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#paradox-realities-section-cover {
		align-items: center;
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-c3-realities-cover.svg');
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

	#paradox-realities-subsection-1 {
		align-items: center;
		background-color: var(--color-blue-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-realities-subsection-2 {
		align-items: center;
		background-color: var(--color-black-dark);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-realities-highlight-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c3-realities-highlight.svg');
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

	.big-number {
		color: var(--color-white);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		line-height: 150%;
		text-align: center;
	}

	@media only screen and (max-width: 768px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-realities-section-cover {
			background-position: 80% center;
			margin-bottom: -10rem;
			padding: 0 7.5vw 5rem 7.5vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 5rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 7.5vw 2rem 7.5vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2rem 0 -1rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(100vw * 2);
			margin: 2rem -7.5vw 0 -7.5vw;
			margin-bottom: calc(100vw * -1.225);
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

		.big-number {
			font-size: 5rem;
			margin: 4rem 0 0 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			margin: 0;
		}

		#paradox-realities-section-cover {
			background-position: 90% center;
			margin-bottom: -12.5rem;
			padding: 0 15vw 6.25rem 15vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 15vw 2.5rem 15vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2.5rem 0 -1.2255rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(70vw * 2);
			margin: 2.5rem -15vw 0 -15vw;
			margin-bottom: calc(70vw * -1.225);
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
			height: 52.5rem;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}

		.big-number {
			font-size: 6rem;
			margin: 5rem 0 0 0;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-realities-section .display-flex-wrapper {
			flex-direction: row;
			gap: 5rem;
			margin: 0 -10vw;
		}

		#paradox-realities-section .display-flex-wrapper > :global(p) {
			margin-top: 5rem;
		}

		#paradox-realities-section-cover {
			background-position: center center;
			margin-bottom: -12.5rem;
			padding: 0 20vw 6.25rem 20vw;
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 6rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 20vw 2.5rem 20vw;
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 2.5rem 0 -1.2255rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(27.5rem * 2);
			margin: 2.5rem -20vw 0 -20vw;
			margin-bottom: calc(27.5rem * -1.225);
			padding-top: calc(27.5rem * 0.5);
			width: 27.5rem;
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
			height: 46rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.big-number {
			font-size: 6rem;
			margin: 2.5rem 0 0 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-realities-section-cover {
			background-position: center center;
			margin-bottom: -15rem;
			padding: 0 0 7.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-realities-section-cover :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-realities-subsection-1,
		#paradox-realities-subsection-2 {
			padding: 0 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#paradox-realities-subsection-1 > :global(h5) {
			margin: 3rem 0 -1.5rem 0;
		}

		#paradox-realities-highlight-wrapper {
			height: calc(35rem * 2);
			margin: 3rem 0 0 0;
			margin-bottom: calc(35rem * -1.225);
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
			height: 46rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.big-number {
			font-size: 7.5rem;
			margin: 3rem 0 0 0;
		}
	}
</style>
