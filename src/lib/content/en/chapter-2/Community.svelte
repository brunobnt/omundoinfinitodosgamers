<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Highlight from '$lib/components/Highlight.svelte';

	import CoverImage from '$lib/assets/images/c2-community-section-cover.svg';
	import CommunityComplexity from '$lib/assets/images/en/c2-community-complexity.png';
</script>

<section id="league-community-section">
	<div id="league-community-cover">
		<Title type="special" align="center" color="white">Fractal of Communities</Title>
		<Image src={CoverImage} alt="" />
	</div>
	<div id="league-community-content">
		<div class="display-flex-wrapper">
			<div>
				<Paragraph color="blue-darker">
					Solidarity (the amount of interaction within a social group) and collective effervescence
					(a community that comes together to express itself together, by sharing the same tastes)
					promote the connection that forms one or many communities.
				</Paragraph>
				<Title type="component" color="blue-darker">
					Understand how complex these communities are:
				</Title>
			</div>
			<Image src={CommunityComplexity} alt="" />
		</div>
		<Carousel>
			<PostIt
				title="Identity and platform"
				author="Female, 25 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Like every community, it has its niches and not all of them get on well with each other -
				there are incels, there are gaymers, there are nintendistas, etc - but they are all united
				by the common interest in playing games, supporting the development of the industry that
				revolves around games and competing.”
			</PostIt>
			<PostIt
				title="Games"
				author="Male, 25 years old, Recife, PE"
				background="blue-dark"
				color="white"
			>
				“In the world of games, communities are created around games, franchises and brands and have
				ways of communicating on different types of platforms, whether it is games, social networks
				or even face-to-face meetings.”
			</PostIt>
			<PostIt
				title="Community"
				author="Male, 37 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Everyone who comes together with common interests is a community. Just like the carnival
				and beach volleyball communities, the e-sports community should also be considered.”
			</PostIt>
			<PostIt
				title="Identity"
				author="Female, 25 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“Other communities - such as lgbtqia+, have discussions that are internal. But outwardly we
				are united in the cause of normalizing games as entertainment and demystifying the image of
				the “gamer”. And we meet in forums to discuss the community's progress and problems.”
			</PostIt>
			<PostIt
				title="Games"
				author="Male, 35 years old, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“There are many different tastes. There are smaller communities where players identify more
				with each other. For example, there are people who only play FPS (like CS), there are people
				who only like survival games, there are people who like games with a story and make fanfics
				to fill in gaps in the scripts.”
			</PostIt>
			<PostIt
				title="Types of Games"
				author="Male, 29 years old, Niterói, RJ"
				background="blue-dark"
				color="white"
			>
				“Everyone has one thing in common: a love for games. But one way to alleviate the immensity
				is to divide the community into categories. For example, if you like LoL, you can join
				several groups about it.”
			</PostIt>
			<PostIt
				title="Influencers"
				author="Male, 52, São Paulo, SP"
				background="blue-dark"
				color="white"
			>
				“The greatest proof of sub-communities is the Gaulês 'Tribo'.”
			</PostIt>
		</Carousel>
	</div>
	<div id="league-community-conclusion">
		<Highlight align="center" color="white">
			Those who play feel part of a larger community, connected by the love and affection for games;
			by their own language; and by building social connections that go beyond games and the digital
			world.
		</Highlight>
	</div>
</section>

<style>
	#league-community-cover {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		overflow-x: clip;
	}

	#league-community-cover :global(img) {
		width: 100%;
	}

	#league-community-content {
		background-color: var(--color-gray-light);
	}

	#league-community-content :global(h5) {
		margin-bottom: 0;
	}

	#league-community-content .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#league-community-conclusion {
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#league-community-cover {
			padding-top: 4rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 4rem;
		}

		#league-community-cover :global(img) {
			margin-top: 4rem;
		}

		#league-community-content {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#league-community-content :global(img) {
			margin-bottom: 2rem;
		}

		#league-community-conclusion {
			padding: 4rem 11.25vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-community-cover {
			padding-top: 5rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 5rem;
		}

		#league-community-cover :global(img) {
			margin-top: 5rem;
			width: 75%;
		}

		#league-community-content {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#league-community-content :global(img) {
			margin-bottom: 2.5rem;
		}

		#league-community-conclusion {
			padding: 5rem 22.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-community-cover {
			padding-top: 5rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 5rem;
		}

		#league-community-cover :global(img) {
			margin-top: 5rem;
			width: 60%;
		}

		#league-community-content {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
		}

		#league-community-content .display-flex-wrapper :global(img) {
			width: 55%;
		}

		#league-community-content :global(img) {
			margin-bottom: 2.5rem;
		}

		#league-community-conclusion {
			padding: 5rem 30vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-community-cover {
			padding-top: 6rem;
		}

		#league-community-cover :global(h2) {
			padding: 0 6rem;
		}

		#league-community-cover :global(img) {
			margin-top: 6rem;
			width: 50%;
		}

		#league-community-content {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			overflow-x: clip;
		}

		#league-community-content .display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
		}

		#league-community-content .display-flex-wrapper :global(img) {
			width: 55%;
		}

		#league-community-content :global(img) {
			margin-bottom: 3rem;
		}

		#league-community-conclusion {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}
	}
</style>
