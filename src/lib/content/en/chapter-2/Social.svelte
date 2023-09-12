<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Statement from '$lib/components/Statement.svelte';

	import StatementAuthor from '$lib/assets/images/c2-statement-author-2.png';
	import GameComunicationChart from '$lib/assets/images/en/c2-chart-game-comunication.svg';
	import SocialPlatformsSymbols from '$lib/assets/images/c2-social-platforms.svg';

	const chartsData = [
		{
			file: '/charts/chapter-2/en/0.svg',
			title: "When I'm playing, I often communicate with my friends or teammates"
		},
		{
			file: '/charts/chapter-2/en/1.svg',
			title: 'I make a lot of friends in the gaming environment'
		},
		{
			file: '/charts/chapter-2/en/2.svg',
			title: 'I often meet people I play with'
		},
		{
			file: '/charts/chapter-2/en/3.svg',
			title: 'Playing makes me expand my circle of friends'
		},
		{
			file: '/charts/chapter-2/en/4.svg',
			title: 'Most of my friends/social group play video games'
		}
	];
</script>

<div id="league-social-cover">
	<Title type="special" color="blue">Socializing</Title>
	<Title type="special" color="blue">Omnipresent Collectivity</Title>
</div>
<section id="league-social-section">
	<Paragraph color="blue-darker">
		Digital enables constant connection, which generates belonging and the feeling of not being
		alone. More than that, people feel in contact (or with the possibility of being in contact) with
		others all the time, whether they are playing or not.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, Marketing Executive"
			background="blue-darker"
			border="blue"
			color="white"
		>
			“When I was a teenager, the game was individual, the only think we had was one playing against
			the other, and the occasion when everyone got together to play. That's gone now. It stopped
			being individual and became a team game, where collaboration, logical thinking, drawing up
			game plans, developing maps, became collective and I think that's why communities have
			accelerated so much.”
		</Statement>
	</div>
	<Title type="component" color="blue-darker">Social behaviors of different profiles</Title>
	<Carousel>
		{#each chartsData as chart}
			<div class="profile-behavior-chart">
				<h2>{chart.title}</h2>
				<img src={base + chart.file} alt={chart.title} />
			</div>
		{/each}
	</Carousel>
	<Paragraph color="blue-darker">
		Social interactions within the community are intense, people come together because they have the
		same tastes.
	</Paragraph>
	<div id="social-interaction-subsection">
		<Carousel>
			<PostIt
				title="Meeting people, making friends, dating"
				author="Male, 37 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“The gamer world is very collective. Games have ceased to be an individual activity and have
				become a social activity in which strategy, teamwork and collaboration are fundamental.”
			</PostIt>
			<PostIt
				title="Meeting friends in person"
				author="Female, 24 years old, Rio de Janeiro, RJ"
				background="blue-dark"
				color="white"
			>
				“Heineken launched an advertisement in which people are saying on WhatsApp 'let's meet today
				at the usual place' and in the end you find out that the usual place is the lobby of a
				game.”
			</PostIt>
			<PostIt
				title="Competing, cooperating"
				author="Male, 35 years old, DF"
				background="blue-dark"
				color="white"
			>
				“You go in with 5 people, to have fun, the aim of that game is to say: 'Bro', today I'm
				going to have fun, we're not going to play competitively, we're going to test champions,
				it's going to be funny and sometimes we're not even paying that much attention to the game,
				we're there more for the fellowship.”
			</PostIt>
			<PostIt
				title="Working as a team"
				author="Male, 37 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Gamers are always exchanging information, ideas, following teams. The connection that
				begins in games forms great friendships!”
			</PostIt>
			<PostIt
				title="Chatting while playing"
				author="Male, 36 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“We meet up and keep in touch outside the games. When a buddy is having a hard time or a
				computer component breaks down, we do a little fundraising and buy what's needed to help our
				friend.”
			</PostIt>
			<PostIt
				title="Communicating while playing"
				author="Female, 26 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“I'm part of groups on Whatsapp and Discord about the Formula 1 game. There we exchange tips
				on set-ups, information on new tracks and draw up training lobbies to help us on the tracks
				where we have difficulties.”
			</PostIt>
			<PostIt
				title="Helping each other (in the game and in life)"
				author="Female, 26 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“A few years ago I received a lot of support from the gamer community when I lost my
				grandfather, so for me it's a very supportive and important community.”
			</PostIt>
		</Carousel>
	</div>
	<Title type="component" color="blue-darker">
		Communication with friends or team members during the game
	</Title>
	<div class="display-flex-wrapper">
		<div>
			<Image src={GameComunicationChart} alt="" />
			<Legend color="blue-darker">
				Multiplatform refers to players who play on more than one platform, such as PC, console,
				smartphones...
			</Legend>
		</div>
		<div id="social-platforms-content">
			<div id="social-platforms-content-frame">
				<Image src={SocialPlatformsSymbols} alt="" />
				<Paragraph align="center" color="blue-darker">
					Twitch, Discord, WhatsApp, YouTube, Twitter, Skype, Team Speak, etc. are favorite
					platforms for communication between gamers.
				</Paragraph>
			</div>
		</div>
	</div>
</section>
<div id="league-social-epilogue">
	<Title type="subsection" color="white">Develop bonds that go beyond the game</Title>
	<Paragraph color="white">
		The deep connection between people that play games evolve to friendships, relationships and even
		marriages. Lasting relationships are born in the online environment, expand to the physical and
		become connections for the rest of their lives.
	</Paragraph>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="In sickness and in health"
			author="Female, 19 years old, Itupeva, SP"
			background="blue-dark"
			color="white"
		>
			“Anything can happen within the community, from gambling to, I don't know... marriage.”
		</PostIt>
		<PostIt
			title="Best man"
			author="Male, 30 years old, Belo Horizonte, MG"
			background="blue-dark"
			color="white"
		>
			“I was best man at the wedding of a couple who I met playing Ragnarok online.”
		</PostIt>
		<PostIt title="Voice" author="Male, 29, Recife, PE" background="blue-dark" color="white">
			“Usually nerds like each other. Sometimes they fall in love with the voice.”
		</PostIt>
	</Carousel>
</div>

<style>
	#league-social-cover {
		background-color: var(--color-background-darkblue);
		background-position: bottom center;
		background-repeat: no-repeat;
		overflow-x: clip;
	}

	#league-social-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	#league-social-section .display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	#social-interaction-subsection {
		align-items: center;
		background-image: linear-gradient(
				to top,
				var(--color-gray-light) 0%,
				rgba(0, 0, 0, 0) 50%,
				rgba(0, 0, 0, 0) 100%
			),
			url('$lib/assets/backgrounds/background-c2-social-faces.png');
		background-position: top left;
		display: flex;
		justify-content: center;
	}

	#social-platforms-content {
		border: 6px dashed var(--color-blue-normal);
	}

	#social-platforms-content-frame {
		border: 6px dashed var(--color-yellow-normal);
	}

	#social-platforms-content-frame :global(img) {
		width: 90%;
	}

	#league-social-epilogue {
		background-color: var(--color-blue-darker);
		overflow-x: clip;
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

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c2-social-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 55%,
					rgba(26, 29, 56, 0) 65%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: contain;
			padding: 4rem 7.5vw 16rem 7.5vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 2.25rem;
		}

		#league-social-section {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: column;
			margin: 0;
			width: 100%;
		}

		#social-interaction-subsection {
			background-size: 50%;
			margin: 4rem -7.5vw;
			padding: 16rem 7.5vw 0 7.5vw;
			width: calc(100% + 15vw);
		}

		#social-platforms-content {
			margin: 2rem 0 2rem -0.5rem;
			padding-bottom: -1rem;
			width: 100%;
		}

		#social-platforms-content-frame {
			padding: 2rem 3rem 1rem 2rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1rem;
		}

		#league-social-epilogue {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		.statement-wrapper {
			margin-bottom: 2rem;
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

		.highlight-image-wrapper {
			height: calc(100vw * 1.2);
			margin: 2rem -7.5vw -3.25rem -7.5vw;
			width: 100vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 30%,
					rgba(26, 29, 56, 0) 50%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: contain;
			padding: 2.5rem 15vw 20rem 15vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 3.25rem;
		}

		#league-social-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: column;
			margin: 0;
			width: 100%;
		}

		#social-interaction-subsection {
			background-size: 25%;
			margin: 5rem -15vw;
			padding: 10rem 15vw 0 15vw;
			width: calc(100% + 30vw);
		}

		#social-platforms-content {
			margin: 2.5rem 0 2.5rem -0.5rem;
			padding-bottom: -1.25rem;
			width: 75%;
		}

		#social-platforms-content-frame {
			padding: 2.5rem 3.25rem 1.25rem 2.5rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.25rem;
		}

		#league-social-epilogue {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		.statement-wrapper {
			margin-bottom: 2.5rem;
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

		.highlight-image-wrapper {
			height: calc(60vw * 1.2);
			margin: 2.5rem auto -4rem auto;
			width: 60vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 20%,
					rgba(26, 29, 56, 0) 40%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: cover;
			padding: 5rem 20vw 50rem 20vw;
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 3.25rem;
		}

		#league-social-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: row;
			margin: 1.25rem -5vw 1.25rem -15vw;
			width: calc(100% + 20vw);
		}

		#social-interaction-subsection {
			background-size: 25%;
			margin: 5rem -20vw;
			padding: 10rem 20vw 0 20vw;
			width: calc(100% + 40vw);
		}

		#social-platforms-content {
			margin: 0 0 0 -0.5rem;
			padding-bottom: -1.25rem;
			width: 50%;
		}

		#social-platforms-content-frame {
			padding: 2.5rem 3.25rem 1.25rem 2.5rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.25rem;
		}

		#league-social-epilogue {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		.statement-wrapper {
			margin-bottom: 2.5rem;
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

		.highlight-image-wrapper {
			height: calc(40vw * 1.2);
			margin: 2.5rem auto -4rem auto;
			width: 40vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-social-cover {
			background-image: linear-gradient(
					to bottom,
					var(--color-background-darkblue) 0%,
					var(--color-background-darkblue) 25%,
					rgba(26, 29, 56, 0) 40%
				),
				url('$lib/assets/backgrounds/background-c2-social-cover.png');
			background-size: cover;
			padding: 6rem 0 45vw 0;
			padding-left: calc((100% - 50rem) / 4);
			padding-right: calc((100% - 50rem) / 4);
		}

		#league-social-cover :global(h2):nth-child(2) {
			font-size: 4.25rem;
		}

		#league-social-section {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#league-social-section .display-flex-wrapper {
			flex-direction: row;
			margin: 1.5rem -15rem 1.5rem -25rem;
			width: calc(100% + 40rem);
		}

		#social-interaction-subsection {
			background-size: 12.5%;
			margin: 6rem 0;
			margin-left: calc((-100vw + 50rem) / 2);
			margin-right: calc((-100vw + 50rem) / 2);
			padding: 12rem 0 0 0;
			width: 100vw;
		}

		#social-platforms-content {
			margin: 0 0 0 -0.5rem;
			padding-bottom: -1.5rem;
			width: 30%;
		}

		#social-platforms-content-frame {
			padding: 3rem 4.5rem 1.5rem 3rem;
			width: calc(100% + 1rem);
		}

		#social-platforms-content-frame :global(img) {
			margin-bottom: 1.5rem;
		}

		#league-social-epilogue {
			padding: 5rem 0 2.5rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		.statement-wrapper {
			margin-bottom: 3rem;
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

		.highlight-image-wrapper {
			height: calc(35rem * 1.2);
			margin: 3rem auto -5rem auto;
			width: 35rem;
		}
	}
</style>
