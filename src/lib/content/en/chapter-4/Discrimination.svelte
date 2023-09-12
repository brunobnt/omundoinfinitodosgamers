<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import GamesWomenSterotypes from '$lib/assets/images/c4-games-women-stereotypes.png';
	import GamesESportsStereotypes from '$lib/assets/images/c4-games-esports-stereotypes.png';
	import StatementAuthor from '$lib/assets/images/c4-statement-author.png';
</script>

<section id="toxic-discrimination-section-intro">
	<Highlight align="center" color="white">
		“I always pretended to be a man in games or didn't reveal my gender.”
	</Highlight>
	<h6>Female, 35 years old, São Paulo, SP</h6>
	<div id="toxic-discrimination-intro-cover" />
	<PostIt
		title="To be a gamer you have to be silenced"
		author="Woman, 27 years old, DF"
		background="green"
		color="green-darker"
	>
		“The heterosexual white man inhabits the identity of the gamer, female gamers are considered
		strange and are vulnerable to harassment.
		<br /><br />

		Popular games like Counterstrike, Valorant and League of Legends have teams of five. It's common
		for female players to remain silent because they suffer prejudice if they reveal that they are
		women. <br /><br />

		I use an unisex name/nickname in games so I don't experience harassment/prejudice in-game.”
	</PostIt>
</section>
<section id="toxic-discrimination-section-content">
	<Title type="subsection" color="green-darker">
		Female characters are sexy and not very strategic
	</Title>
	<Paragraph color="black">Gender representation in video games is often stereotyped.</Paragraph>
	<Image src={GamesWomenSterotypes} alt="" />
	<Legend color="black">
		Image credits: <a
			href="https://www.composingdigitalmedia.org/f20_dmtp/kwa/poesistheoria.html"
			target="_blank">The Female Gamer</a
		>.
	</Legend>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="An object"
			author="Female, 26 years old, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“This is something that still bothers me a lot. In games aimed at the male audience (such as
			LoL, Valorant, FIFA, NBA, F1), women are always represented as an “object”, always with
			bulging curves and features inserted to attract the visual attention of men. It's very
			difficult to play any of these games and quickly and practically find skins that represent us
			without being extremely sexist or even vulgar.”
		</PostIt>
		<PostIt
			title="We're not Xena"
			author="Female, 43 years old, Matinhos, PR"
			background="green"
			color="green-darker"
		>
			“In Mario Kart, for example, the princesses are white, fluffy and have no personality. Candy
			Crush seems to have understood this and added black-skinned characters to make up scenarios.
			In most games, there is no female representation. The impression I get is that games with
			female characters are doomed to the image of Xena, the warrior, and that's not representative,
			because we're gamers and we don't have this profile. Or not always.”
		</PostIt>
		<PostIt
			title="Short clothes"
			author="Male, 23 years old, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“In many games I see, women's bodies are very sexualized, always with sensual characters and
			so on. You hardly find games where you find female heroines or main characters, and when you
			do, they always wear short clothes (e.g. Tomb Rider, Violet, etc.).”
		</PostIt>
	</Carousel>
	<div id="image-ai-stereotypes" />
	<Legend color="black">
		Just like the Gamesphere, Artificial Intelligence reflects stereotypes in its algorithms.
		Without specifying words of inclusion or diversity, the results obtained are generally
		unrepresentative and very stereotyped, in which women are white, thin-faced, slim and often
		sexy. And men are strong, muscular and aggressive.
	</Legend>
	<Title type="subsection" color="green-darker">
		E-Sports maintain the stereotype of the “classic gamer”
	</Title>
	<div class="narrow-text">
		<Paragraph color="black">
			In e-sports, despite the effort, the environment is still far from representative. Teams are
			still mostly made up of men, with little diversity in terms of race, social class and sexual
			orientation.
		</Paragraph>
		<Image src={GamesESportsStereotypes} alt="" />
		<Legend color="black">Prompt: an e-sports professional player training at home</Legend>
	</div>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, XisGG"
			background="green-darker"
			border="green"
			color="white"
		>
			“There's still a lot of progress to be made and one thing that bothers me a lot is the
			discrepancy between the people who play, who consume and the representation within the
			scenarios. The main e-sports championships, the top positions in companies, we don't see
			representation reflected. If you think about the main e-sports championships, the majority are
			only men who play and it's not because there's a ban, or because the developers don't allow it
			or because there's some biological difference that makes it so. At Xisgg, we were the first
			esports team in Brazil to reach the A series of the Brazilian Free Fire league with two
			starting girls playing, while no other team in the entire league had any girls in the squad.”
		</Statement>
	</div>
	<Title type="subsection" color="green-darker">Racial and social issues</Title>
	<Paragraph color="black">
		Today the game is present in communities and suburbs, but the black public is still very poorly
		represented in championships.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, Afrogames"
			background="green-darker"
			border="green"
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
	<Title type="subsection" color="green-darker">Gender diversity</Title>
	<Paragraph color="black">
		There is still no equity in visibility between female and male players, female and male
		championships. Trans and non-binary players are also an exception in the most far-reaching
		professional leagues.
	</Paragraph>
	<Carousel>
		<PostIt
			title="No visibility"
			author="Male, 33 years old, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“I don't know the names of the women who play, but I think I met a lot of female gamers and
			influencers at CCXP.”
		</PostIt>
		<PostIt
			title="Support"
			author="Male, 24 years old, Goiânia, GO"
			background="green"
			color="green-darker"
		>
			“On the professional scene, there is very little support for women.”
		</PostIt>
	</Carousel>
	<Highlight color="red">
		This toxic environment favors the emergence of a cruel and prejudiced social structure in much
		of the Gamesphere
	</Highlight>
</section>

<style>
	#toxic-discrimination-section-intro {
		align-items: center;
		background-color: var(--color-background-darkblue);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#toxic-discrimination-section-intro > :global(h6) {
		color: var(--color-white);
		font-family: 'Press Start 2P', monospace;
		letter-spacing: -0.005rem;
		line-height: 160%;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
	}

	#toxic-discrimination-intro-cover {
		background-color: transparent;
		background-image: url('$lib/assets/images/c4-discrimination-intro-cover.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		overflow-x: clip;
	}

	#toxic-discrimination-section-content {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#image-ai-stereotypes {
		background-image: url('$lib/assets/images/c4-games-ai-stereotypes.png');
		background-position: top center;
		background-repeat: repeat;
		background-size: auto 100%;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		justify-content: center;
	}

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/en/background-c4-discrimination-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 4rem 7.5vw 0 7.5vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.5rem;
			margin: 1rem 0 2rem 0;
			padding: 0 15vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(250vw * 0.75);
			margin-bottom: calc(250vw * -0.25);
			width: 250vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 7.5vw 4rem 7.5vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 4rem;
		}

		#image-ai-stereotypes {
			height: 100vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		.highlight-image-wrapper {
			height: calc(100vw * 1.25);
			margin: 4rem -7.5vw 0 -7.5vw;
			margin-bottom: calc(100vw * -0.35);
			width: 100vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 5rem 15vw 0 15vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.525rem;
			margin: 0.5rem 0 2.5rem 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(150vw * 0.75);
			margin-bottom: calc(150vw * -0.25);
			width: 150vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 15vw 5rem 15vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 5rem;
		}

		#image-ai-stereotypes {
			height: 75vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 1.25rem -15vw 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}

		.highlight-image-wrapper {
			height: calc(75vw * 1.25);
			margin: 5rem -15vw 0 -15vw;
			margin-bottom: calc(75vw * -0.35);
			width: 75vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 5rem 20vw 0 20vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.525rem;
			margin: 0.5rem 0 0 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(75vw * 0.75);
			margin-bottom: calc(75vw * -0.25);
			width: 75vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 20vw 5rem 20vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 5rem;
		}

		#image-ai-stereotypes {
			height: 40vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}

		.highlight-image-wrapper {
			height: calc(40vw * 1.25);
			margin: 5rem -20vw 0 -20vw;
			margin-bottom: calc(40vw * -0.35);
			width: 40vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -20rem;
			padding: 6rem 0 0 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.55rem;
			margin: 0.5rem 0 0 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(75rem * 0.75);
			margin-bottom: calc(75rem * -0.25);
			width: 75rem;
		}

		#toxic-discrimination-section-content {
			padding: 20rem 0 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 3rem;
		}

		#image-ai-stereotypes {
			height: 25vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 3rem 0 6rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}

		.highlight-image-wrapper {
			height: calc(50rem * 1.25);
			margin: 6rem 0 0 0;
			margin-bottom: calc(50rem * -0.35);
			width: 50rem;
		}
	}
</style>
