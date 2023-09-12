<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import ESportsBigNumber from '$lib/assets/images/en/c5-esports-big-number.svg';
	import ChampionshipFinals from '$lib/assets/images/c5-championship-finals.png';
	import WorldsAudienceChart from '$lib/assets/images/en/c5-chart-worlds-audience.svg';
	import ProplayerRoutine from '$lib/assets/images/en/c5-proplayer-routine.png';
	import ProfessionalInterestChart from '$lib/assets/images/en/c5-chart-professional-interest.svg';
	import StatementAuthor from '$lib/assets/images/c5-statement-author-2.png';
</script>

<section id="map-esports-section">
	<Title type="special" color="black">E-sports</Title>
	<Title type="component" color="black">
		Brazil is the seventh country with the highest percentage of e-sports fans in the world. In 2023
		we have:
	</Title>
	<Image src={ESportsBigNumber} alt="" />
	<Paragraph color="black">
		Both in Brazil and worldwide, competitive e-sports events have numbers and investment comparable
		to the Super Bowl and the World Cup:
	</Paragraph>
	<Image src={ChampionshipFinals} alt="" />
	<Legend color="black">Worlds Final in 2022. Credits: Kelly Sullivan/Riot Games.</Legend>
	<div class="display-flex-wrapper">
		<div>
			<Title type="component">
				Audience for Worlds, the League of Legends championship, since 2020.
			</Title>
			<Paragraph color="black">In millions of viewers</Paragraph>
			<Image src={WorldsAudienceChart} alt="" />
			<Legend color="black">
				Data source: <a href="https://escharts.com/pt" target="_blank">Esports Charts</a>.
			</Legend>
		</div>
		<div class="profile-behavior-chart">
			<h2>Watches any e-sports championships</h2>
			<img src={base + '/charts/chapter-5/en/0.svg'} alt="Watches any e-sports championships" />
		</div>
	</div>
	<Highlight color="black">
		But being a pro-player is no easy task. It requires dedication, investment and sponsorship.
	</Highlight>
	<Image src={ProplayerRoutine} alt="" />
	<Carousel>
		<PostIt
			title="Leisure in obligation"
			author="Male, 33 years old, São Paulo, SP"
			background="yellow-light"
			color="yellow-darker"
		>
			“I see the career as exciting and rewarding, with lots of opportunities. However, at the same
			time, I can't help thinking that it's worrying for young people who become professional gamers
			at an early age, and even their families. A competitive, demanding environment, where leisure
			becomes an obligation, can often frustrate them because they don't achieve the desired
			success.”
		</PostIt>
		<PostIt
			title="Few leagues, few spaces"
			author="Male, 29 years old, Curitiba, PR"
			background="yellow-light"
			color="yellow-darker"
		>
			“I think that this profession will increasingly be taken seriously, just as we take other
			sportspeople seriously. But it's still very selective (unless you're in perhaps the top 50 in
			the country, it's impossible to survive in the profession), and it needs new leagues or ways
			to develop.”
		</PostIt>
	</Carousel>
	<Paragraph color="black">
		Today, being a professional gamer isn't the only option. With other doors opening up in this
		lucrative market, the desire to be the number one player has dropped since 2017.
	</Paragraph>
	<Title type="component" color="black">Are you thinking of becoming an esports professional?</Title
	>
	<Image src={ProfessionalInterestChart} alt="" />
	<Legend color="black">
		Being a pro gamer is a selective space for the few, and there is an increasing awareness of
		these difficulties.
	</Legend>
	<div class="statement-wrapper">
		<Highlight align="center" color="white">A company like any other</Highlight>
		<Statement
			image={StatementAuthor}
			author="Expert, Afrogames"
			background="red-darker"
			border="red"
			color="white"
		>
			“I started studying the world of gaming and e-sports in 2017 and was invited to a championship
			in Seattle at the time. Then, in one of life's coincidences, José Júnior from Afroreggae
			called me to have a chat and I gave him a presentation on games, everything I was seeing. When
			I'd finished, he said, 'I didn't see a black person playing. I didn't see a black man next to
			you in the stands'. And that's when the idea for Afrogames came about, which is the first and
			so far the only training center for e-sports players and game programmers inside favelas in
			the world.”
		</Statement>
	</div>
	<Highlight color="black">
		Given the difficulty of becoming a pro gamer, many gamers ended up pursuing a career in content
		creation. And the pandemic has had an important role in this.
	</Highlight>
</section>

<style>
	#map-esports-section {
		align-items: center;
		background-color: var(--color-yellow-normal);
		background-image: url('$lib/assets/backgrounds/background-yellow.png');
		background-position: center center;
		background-size: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#map-esports-section > :global(h5:first-of-type) {
		margin-top: 0;
	}

	.display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
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

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.statement-wrapper :global(.p-highlight) {
		margin: 0;
	}

	@media only screen and (max-width: 768px) {
		#map-esports-section {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 -7.5vw -6rem -7.5vw;
			max-width: unset;
			width: 100vw;
		}

		.display-flex-wrapper {
			flex-direction: column;
			margin: 2rem 0;
			gap: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 34rem;
			margin: 2em auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}

		.statement-wrapper {
			margin: 4rem -7.5vw;
			padding: 2rem 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#map-esports-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2.5rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -7.5rem 0;
			max-width: unset;
			width: 75vw;
		}

		#map-esports-section > :global(.p-legend) {
			margin-bottom: 2rem;
		}

		.display-flex-wrapper {
			flex-direction: column;
			margin: 2.5rem 0;
			gap: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 48rem;
			margin: 2.5rem auto;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}

		.statement-wrapper {
			margin: 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-esports-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2.5rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -7.5vw 0;
			max-width: unset;
			width: 35vw;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
			margin: 5rem -10vw;
			width: calc(100% + 20vw);
		}

		.profile-behavior-chart {
			height: 45rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 32.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.statement-wrapper {
			margin: 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-esports-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-esports-section > :global(h5) {
			margin-top: 4.5rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 3rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -9rem 0;
			max-width: unset;
			width: 40rem;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 1.5rem;
			margin: 6rem -10rem;
			width: calc(100% + 20rem);
		}

		.profile-behavior-chart {
			height: 45rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 40rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.statement-wrapper {
			margin: 5rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}
	}
</style>
