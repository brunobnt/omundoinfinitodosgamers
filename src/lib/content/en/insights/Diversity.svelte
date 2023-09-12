<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';

	import DataImage1 from '$lib/assets/images/en/insights-diversity-data-1.svg';
	import DataImage2 from '$lib/assets/images/en/insights-diversity-data-2.svg';
	import HighlightImage from '$lib/assets/images/en/insights-diversity-highlight-image.svg';
	import BetasStatistics from '$lib/assets/images/en/insights-betas-profiles-statistics.png';
	import ProfileStatistics from '$lib/assets/images/en/insights-diversity-profile-statistics.svg';
</script>

<section id="insights-diversity-section">
	<Title type="special" color="black">2. Promote a more plural and diverse Gamesphere</Title>
	<Paragraph color="black">
		There are gamers in every corner of the country, with different phenotypes, personalities,
		professions and, above all, ways of relating to the game. Recognizing this diversity is the
		first step towards being noticed by the Brazilian gamer community.
	</Paragraph>
	<div id="insights-diversity-separator" />
	<Title type="component" color="black">
		Fostering a more diverse and inclusive production chain
	</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="black">
		Bringing the diversity observed among gamers to the entire chain involved in developing and
		promoting games can take the Gamesphere to the next level.
	</Paragraph>
	<Paragraph color="black">
		The combination of different perspectives, from the developer to the player, promises an
		explosion of new, much more democratic and plural ideas, leading to a <span class="weight-700"
			>diversification of the way characters, themes and stories are represented in games</span
		>.
	</Paragraph>
	<Paragraph color="black">
		Joining this movement of change is the way forward for brands that want to project themselves as
		leaders of this new generation.
	</Paragraph>
	<Title type="component" color="black">More diversity in the representation of gamers</Title>
	<Image src={HighlightImage} alt="" />
	<Paragraph color="black">
		Gamers want to see themselves represented not just in games, but in the communication made about
		and to them. By giving visibility to this plurality, brands open doors to connect with these
		people.
	</Paragraph>
	<Title type="component" color="black">Different profiles, different approach strategies</Title>
	<Paragraph color="black">
		Gamers are not all the same, nor are they totally different. In order to define who the brand is
		going to talk to and how, the <span class="weight-700"
			>level of involvement with the game is the main driver that must be taken into account</span
		>.
	</Paragraph>
	<Paragraph color="black">
		Three of the profiles mapped by the study live the game in a <span class="weight-700"
			>very engaged way and represent 40% of the survey</span
		>. They are the <span class="weight-700">"game's betas”</span>.
	</Paragraph>
	<Image src={BetasStatistics} alt="" />
	<Legend color="black">
		<span class="color-red">*</span> It's important to note that the profiles are quite different from
		each other, being similar only in terms of engagement.
	</Legend>
	<Paragraph color="black">
		<span class="weight-700">Betas are the people most involved with the game.</span> For them, gaming
		is a lifestyle: they consume content, take part in communities, invest in resources to improve their
		gameplay... Gaming is part of their routine and, for many, their professional life too.
	</Paragraph>
	<Paragraph color="black">
		Brands gain relevance among this group when they recognize their gamer lifestyle and position
		themselves as a partner to gamers.
	</Paragraph>
	<Paragraph color="black">
		They are the type of gamer most open to experimenting with new technologies, such as virtual
		reality.
	</Paragraph>
	<Paragraph color="black">
		49% of Full Hardcore and 60% of Gamer at Heart have already tried virtual reality games.
	</Paragraph>
	<div class="profile-behavior-chart">
		<h2>Have you tried virtual reality games?</h2>
		<img src={base + '/charts/insights/en/0.svg'} alt="Have you tried virtual reality games?" />
	</div>
	<Paragraph color="black">And those who spend the most money on games:</Paragraph>
	<div class="profile-behavior-chart">
		<h2>Monthly amount typically spent on digital/electronic games</h2>
		<img
			src={base + '/charts/insights/en/1.svg'}
			alt="Monthly amount typically spent on digital/electronic games"
		/>
	</div>
	<Paragraph color="black">
		There are also the more <span class="weight-700">uncommitted gamers</span>, people who are a
		little less involved with the game, but who are still
		<span class="weight-700">avid gamers</span>.
	</Paragraph>
	<Paragraph color="black">
		They are less competitive and consume less content. They don't see themselves as “gamers”, they
		don't usually play on a PC or console and they spend little on games. For them, everything is
		more focused on entertainment and they represent 38% of the universe:
	</Paragraph>
	<Image src={ProfileStatistics} alt="" />
	<Legend color="black">
		<span class="color-red">*</span> It's important to note that the profiles are quite different from
		each other, being similar only in terms of engagement.
	</Legend>
	<Paragraph color="black">
		Brands gain visibility with these profiles by being genuine, adapting to the language and
		aesthetics of their favorite games.
	</Paragraph>
	<Paragraph color="black">
		Even though they are not the most engaged, they are actively part of the Gamesphere,
	</Paragraph>
	<Image src={DataImage2} alt="" />
</section>

<style>
	#insights-diversity-section {
		background-color: var(--color-yellow-normal);
		overflow-x: clip;
	}

	#insights-diversity-section :global(.p-legend) {
		border: none;
	}

	#insights-diversity-separator {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-4.svg');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.profile-behavior-chart {
		align-items: center;
		background-color: var(--color-black);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-white);
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
		#insights-diversity-section {
			padding: 4rem 7.5vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 0 2rem 0;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2rem 0 0 0;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 0 2rem 0;
		}

		#insights-diversity-separator {
			height: calc(115vw);
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}

		.profile-behavior-chart {
			margin: 2rem -2.5vw 4rem -2.5vw;
			padding: 2rem 0 1rem 0;
			width: 90vw;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin: 0 auto 1rem auto;
			padding: 0 1rem;
			width: 100%;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1rem;
			width: 100% !important;
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-diversity-section {
			padding: 5rem 15vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-separator {
			height: 70vw;
			margin: 0 auto;
			width: 70vw;
		}

		.profile-behavior-chart {
			margin: 2.5rem auto 5rem auto;
			padding: 2.5rem 0 1.25rem 0;
			width: 75%;
		}

		.profile-behavior-chart h2 {
			font-size: 2rem;
			margin: 0 auto 1.25rem auto;
			padding: 0 1.25rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.25rem;
			width: 100%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-diversity-section {
			padding: 5rem 20vw;
		}

		#insights-diversity-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-diversity-separator {
			height: 45vw;
			margin: 0 auto;
			width: 45vw;
		}

		.profile-behavior-chart {
			margin: 2.5rem auto 5rem auto;
			padding: 2.5rem 0 1.25rem 0;
			width: 60%;
		}

		.profile-behavior-chart h2 {
			font-size: 2rem;
			margin: 0 auto 1.25rem auto;
			padding: 0 1.25rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.25rem;
			width: 100% !important;
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-diversity-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-diversity-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-diversity-section :global(img:nth-of-type(1)),
		#insights-diversity-section :global(img:nth-of-type(2)),
		#insights-diversity-section :global(img:nth-of-type(5)) {
			margin: 0 auto 3rem auto;
		}

		#insights-diversity-section :global(img:nth-of-type(3)),
		#insights-diversity-section :global(img:nth-of-type(4)) {
			margin: 3rem auto 0 auto;
		}

		#insights-diversity-section :global(.p-legend) {
			margin: 0 auto 3rem auto;
		}

		#insights-diversity-separator {
			height: 35rem;
			margin: 0 auto;
			width: 35rem;
		}

		.profile-behavior-chart {
			margin: 3rem auto 6rem auto;
			padding: 3rem 0 1.5rem 0;
			width: 50%;
		}

		.profile-behavior-chart h2 {
			font-size: 2.5rem;
			margin: 0 auto 1.5rem auto;
			padding: 0 1.5rem;
		}

		.profile-behavior-chart img {
			margin: 0 !important;
			padding: 0 0 0 1.5rem;
			width: 100% !important;
		}
	}
</style>
