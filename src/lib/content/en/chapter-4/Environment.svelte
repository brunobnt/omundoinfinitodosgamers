<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Quiz from '$lib/components/en/Quiz.svelte';

	import StatementAuthor from '$lib/assets/images/c4-statement-author.png';
	import GameRepresentationChart from '$lib/assets/images/en/c4-chart-game-representation.png';

	let quizData = [
		{
			word: 'FLAMER',
			options: [
				{ text: 'A player who insults others excessively', correct: true },
				{ text: 'A player who likes to play fire characters.', correct: false }
			]
		},
		{
			word: 'GRIEFING',
			options: [
				{
					text: 'Acting in-game in such a way as to hinder the gaming experience of others.',
					correct: true
				},
				{
					text: 'Players who like to show off in the game by wearing expensive skins (cosmetic items).',
					correct: false
				}
			]
		},
		{
			word: 'SPAMMING',
			options: [
				{
					text: 'Sending too many messages in the in-game chat, disrupting conversations.',
					correct: true
				},
				{ text: 'Ignoring people who engage in toxic behavior in chat.', correct: false }
			]
		},
		{
			word: 'TROLLING',
			options: [
				{
					text: 'Cheating, tricking or making fun of participants in chats and forums.',
					correct: true
				},
				{ text: 'Using profanity in chats and internet forums.', correct: false }
			]
		},
		{
			word: 'BM',
			options: [
				{
					text: 'slang for Bad Manners - being a person with bad behavior in the game.',
					correct: true
				},
				{
					text: 'Slang for BooMers, meaning someone too old to play.',
					correct: false
				}
			]
		}
	];
</script>

<section id="toxic-environment-section-intro">
	<div id="toxic-environment-section-smoke" />
	<Title type="special" color="green-darker">Environment</Title>
	<Title type="subsection" color="black">A world that allows toxic behavior</Title>
	<Paragraph color="black">
		Players often develop violent dynamics among themselves in their language and dealings with
		others.
	</Paragraph>
</section>
<section id="toxic-environment-section-content">
	<div id="toxic-environment-pipes-wrapper" />
	<Carousel>
		<PostIt
			title="Mental health"
			author="Female, 27 years old, Brasília, DF"
			background="green"
			color="green-darker"
		>
			“Lately I've been playing more LoL and in the world of League of Legends you take away
			people's mental sanity or you lose yours, because people tend to swear a lot, the verb to
			tilt, to get really angry and 'take out' all their anger on you.”
		</PostIt>
		<PostIt
			title="Laws"
			author="Male, 23, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“The internet is a lawless land.”
		</PostIt>
	</Carousel>
	<Paragraph color="black">
		It's common to hide your true identity in nicknames and this, combined with what scholars call
		online disinhibition, creates a toxic environment.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="John Suler, author and professor of psychology at Rider University"
			background="green-darker"
			border="green"
			color="white"
		>
			“It's the safety provided by the digital world to practice behaviors that are not accepted
			outside of it, such as excessive criticism, obscene language, threats and verbal aggression.”
		</Statement>
	</div>
	<div id="vocabulary-test-wrapper">
		<div>
			<Title type="subsection" color="green-darker">Glossary of toxic gaming</Title>
			<Paragraph color="black">
				Even the Gamesphere dictionary has specific terms for toxic attitudes. Click on the
				translations below to try and guess what they mean:
			</Paragraph>
		</div>
		<Quiz data={quizData} />
	</div>
	<Title type="subsection" color="green-darker">A poorly regulated environment</Title>
	<Paragraph color="black">
		Anonymity also allows all kinds of prejudice to be exposed. And there is no efficient regulation
		in the digital environment, like the laws and punishments in the real world.
	</Paragraph>
	<div class="special-postit-wrapper">
		<PostIt
			title="Digital crime"
			author="Male, 37 years old, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“In 2020, a player suffered racist attacks during a Valorant match. Unfortunately, this isn't
			an isolated case, it happens on a regular basis, and platforms need to be more vigilant in
			banning and harming these people, as well as taking legal action.”
		</PostIt>
	</div>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, wildlife"
			background="green-darker"
			border="green"
			color="white"
		>
			“I think it's a minority (noisy, but a minority) that is still against the diversity
			initiatives that developers and the market have proposed. We try not to be inhibited because
			we believe that there are more positives than negatives in this type of action.”
		</Statement>
	</div>
	<Paragraph color="black">
		Although there is a movement towards inclusion in the market, efforts are not keeping up with
		the speed of change. Many still don't recognize themselves in the settings and characters of
		games and don't feel represented in their diversity in games and championships.
	</Paragraph>
	<Image src={GameRepresentationChart} alt="" />
	<Legend color="black">
		Study that compiled the number of characters from more than 100 games released between 2017 and
		2021/ Source: <a
			href="https://diamondlobby.com/geeky-stuff/diversity-in-gaming/"
			target="_blank"
			>Diversity in Gaming Report: An Analysis of Diversity in Video Game Characters</a
		>.
	</Legend>
	<Carousel>
		<PostIt
			title="Character in a wheelchair"
			author="Non-binary, 33 years old, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Everyone should have a chance to see themselves in games. I never forget the phenomenon that
			was when the Black Panther movie hit theaters and black people felt represented and felt what
			it's like for a white person who always sees themselves on screen being represented as a hero
			and having their culture spread. It should be the same with games. One such example was when I
			discovered that in one of my favorite games to play with friends, 'Overcooked', one of the
			characters is a wheelchair user. It made me think a lot about what this represented and how
			wheelchair users had no characters they could relate to in the gaming world.”
		</PostIt>
		<PostIt
			title="Characters carry stories and representativeness"
			author="Female, 35, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Since in an online community the representation of people goes through the character, it is
			essential that they are more diverse and represent women more adequately, mainly because of
			the reflection of this in “real life”, but also because of the treatment that women receive
			within the gaming environment.”
		</PostIt>
		<PostIt
			title="Progress"
			author="Male, 33 years old, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“The games industry has made progress in including diverse characters and narratives, but
			there is still a lot of room for improvement. Games can promote the representation of
			different ethnic, cultural, gender, LGBTQIA+ and disabled groups, so that everyone can feel
			included and represented.”
		</PostIt>
	</Carousel>
</section>

<style>
	#toxic-environment-section-intro {
		background-color: var(--color-green-normal);
		overflow-x: clip;
	}

	#toxic-environment-section-smoke {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/en/background-c4-smoke-pattern-2.svg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		position: relative;
		z-index: 1;
	}

	#toxic-environment-section-content {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#toxic-environment-pipes-wrapper {
		background-image: url('$lib/assets/images/c4-toxic-pipes.png');
		background-position: center center;
		background-size: cover;
	}

	#vocabulary-test-wrapper {
		display: flex;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		justify-content: center;
	}

	.special-postit-wrapper {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-c4-smoke-pattern-3.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#toxic-environment-section-intro {
			padding: 2rem 7.5vw;
		}

		#toxic-environment-section-smoke {
			height: calc(200vw * 0.75);
			left: -7.5vw;
			margin: 0 -50vw;
			margin-bottom: calc(200vw * -0.375);
			top: calc(200vw * -0.25);
			width: 200vw;
		}

		#toxic-environment-section-content {
			padding: 0 7.5vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 20rem;
			margin: 0 -7.5vw -8rem -7.5vw;
			width: calc(100% + 15vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2rem 0;
			gap: 0;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		.special-postit-wrapper {
			margin: 0rem -7.5vw 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-environment-section-intro {
			padding: 2.5rem 15vw;
		}

		#toxic-environment-section-smoke {
			height: calc(150vw * 0.75);
			left: -15vw;
			margin: 0 -22.5vw;
			margin-bottom: calc(150vw * -0.375);
			top: calc(150vw * -0.25);
			width: 150vw;
		}

		#toxic-environment-section-content {
			padding: 0 15vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2.5rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 25rem;
			margin: 0 -15vw -5rem -15vw;
			width: calc(100% + 30vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: column;
			margin: 2.5rem 0;
			gap: 0;
		}

		.statement-wrapper {
			margin: 1.25rem -15vw 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}

		.special-postit-wrapper {
			margin: 0rem -15vw 2.5rem -15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-environment-section-intro {
			padding: 2.5rem 20vw;
		}

		#toxic-environment-section-smoke {
			height: calc(100vw * 0.75);
			left: -20vw;
			margin: 0;
			margin-bottom: calc(100vw * -0.375);
			top: calc(100vw * -0.25);
			width: 100vw;
		}

		#toxic-environment-section-content {
			padding: 0 15vw;
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 2.5rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 30rem;
			margin: 0 -20vw -10rem -20vw;
			width: calc(100% + 40vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 2.5rem 0;
			gap: 2.5rem;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}

		.special-postit-wrapper {
			margin: 0rem -20vw 2.5rem -20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-environment-section-intro {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-environment-section-smoke {
			height: calc(90rem * 0.75);
			left: -20rem;
			margin: 0;
			margin-bottom: calc(90rem * -0.4);
			top: calc(90rem * -0.25);
			width: 90rem;
		}

		#toxic-environment-section-content {
			padding: 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-environment-section-content > :global(h4) {
			margin-top: 3rem;
		}

		#toxic-environment-pipes-wrapper {
			height: 40rem;
			margin: 0 0 -12rem 0;
			width: calc(100vw);
		}

		#vocabulary-test-wrapper {
			flex-direction: row;
			margin: 3rem 0;
			gap: 3rem;
		}

		.statement-wrapper {
			margin: 3rem 0 6rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}

		.special-postit-wrapper {
			margin: 0rem 0 3rem 0;
			width: calc(100vw);
		}
	}
</style>
