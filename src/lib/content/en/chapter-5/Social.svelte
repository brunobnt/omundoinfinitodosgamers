<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import StatementAuthor from '$lib/assets/images/c5-statement-author-2.png';
	import AfrogamesImage from '$lib/assets/images/c5-afrogames-image.svg';
	import PerifaconImage from '$lib/assets/images/c5-perifacon-image.svg';
	import TDFImage from '$lib/assets/images/c5-tdf-image.svg';
</script>

<section id="map-social-section">
	<Title type="special" color="black">Social Transformation</Title>
	<Paragraph color="black">
		Social initiatives foster the scene and encourage young people on low incomes or with less
		access to games to support themselves and improve their lives.
	</Paragraph>
	<Carousel>
		<PostIt
			title="Gaming as a job"
			author="Male, 20 years old, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“Games are extremely important to me, because before it was a hobby and today it has become a
			job. Games have helped me develop personally and professionally.”
		</PostIt>
		<PostIt
			title="Living my dream"
			author="Male, 22 years old, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“Thanks to games I was able to move out of my parents' house and live my dream, and achieve
			everything I've achieved to date!”
		</PostIt>
		<PostIt
			title="Athlete scholarship"
			author="Male, 15 years old, Rio de Janeiro, RJ"
			background="blue-light"
			color="blue-darker"
		>
			“The game continues to be part of my life in terms of helping my parents, because I'm a
			professional and receive an athletic scholarship for it.”
		</PostIt>
	</Carousel>
	<Highlight color="black">Initiatives from the periphery and favelas:</Highlight>
	<Title type="subsection" color="black">Afrogames</Title>
	<Paragraph color="black">
		AfroGames trains in the game, teaches English and technology and offers a structure so that
		young people can work in different parts of the industry: design, programming, soundtrack,
		content and others.
	</Paragraph>
	<Image src={AfrogamesImage} alt="" />
	<br />
	<iframe
		width="560"
		height="315"
		src="https://www.youtube-nocookie.com/embed/GqmDQSFN-_I?controls=0"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, Afrogames"
			background="red-darker"
			border="red"
			color="white"
		>
			“Young people from the favela who learn soccer only learn soccer. The young person who learns
			to be a gamer, learns to work with spreadsheets, to use a computer, learns English, is better
			prepared for the job market as a whole, even if he doesn't become a professional footballer.”
		</Statement>
	</div>
	<Title type="subsection" color="black">Perifacon</Title>
	<Paragraph color="black">
		PerifaCon is a platform that brings together comics and pop culture, with events that have been
		held since 2019 with a focus on integrating geek culture with São Paulo's peripheral public. In
		the 2023 edition, the event also integrated the gaming universe with Gamer Perifa, through chats
		and panels about independent games and their developers.
	</Paragraph>
	<Image src={PerifaconImage} alt="" />
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, founder of Perifacon"
			background="red-darker"
			border="red"
			color="white"
		>
			“In this edition we brought in a space to talk about games, we brought in people from
			electronic sports, because we really understand that games have the potential to change
			people's lives. Our great desire was to bring a little more of this experience to people who
			want to understand more about games, how to make a game, how this universe works, and
			understand the possibility of employability that it has.”
		</Statement>
	</div>
	<Title type="subsection" color="black">Free Fire Favela Cup - CUFA</Title>
	<Paragraph color="black">
		The Free Fire Favela Cup is the biggest Free Fire championship between favelas. Created and held
		by CUFA and Garena in 2020, it was supported by Globo and Loud and in 2022 it was given master
		sponsorship by Itaú and had more than 60,000 entries. Today it is entirely produced by and for
		the favela (video production, event, communication, etc.).
	</Paragraph>
	<Image src={TDFImage} alt="" />
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, Favela Cup / CUFA"
			background="red-darker"
			border="red"
			color="white"
		>
			“The Free Fire Favela Cup emerged during the pandemic as an alternative to the soccer
			championship that began in 2011. We decided to go down a path that would still engage the
			communities, especially the young people in the favelas, and we chose Free Fire because it's a
			democratic game, which was and still is the main game played in the favelas, and it's super
			easy to play on any smartphone. Since the beginning, we've had a partnership with Garena, and
			the championship has been developing in such a way that from 2021 we'll be able to do it all
			for people from the favelas and for products from the favelas: we use Digital Favela to
			publicize, their influencers to increase the reach of the competition, we produce all the
			videos with Favela Filmes, we use the community to create banners, we distribute SIM cards to
			the players.”
		</Statement>
	</div>
</section>

<style>
	#map-social-section {
		align-items: center;
		background-color: var(--color-blue-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#map-social-section > :global(iframe) {
		max-width: 100%;
	}

	.statement-wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#map-social-section {
			padding: 4rem 7.5vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.25rem;
			width: 100%;
		}

		#map-social-section > :global(iframe) {
			min-height: 15rem;
			max-width: 100%;
		}

		.statement-wrapper {
			margin: 0 -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#map-social-section {
			padding: 5rem 15vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.5rem;
			width: 100%;
		}

		#map-social-section > :global(iframe) {
			min-height: 20rem;
			width: 100%;
		}

		.statement-wrapper {
			margin: 0 -15vw 2.5rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-social-section {
			padding: 5rem 20vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.5rem;
			width: 75%;
		}

		#map-social-section > :global(iframe) {
			min-height: 22.5rem;
			width: 75%;
		}

		.statement-wrapper {
			margin: 0 -20vw 2.5rem -20vw;
			padding: 0 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-social-section {
			padding: 5rem 20vw;
		}

		#map-social-section > :global(img) {
			border-radius: 0.75rem;
			width: 70%;
		}

		#map-social-section > :global(iframe) {
			min-height: 25rem;
			width: 70%;
		}

		.statement-wrapper {
			margin: 0 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: 100vw;
		}
	}
</style>
