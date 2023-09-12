<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import ContentHighlightImage from '$lib/assets/images/en/c5-content-highlight-image.png';
	import PlayersContentTypesChart from '$lib/assets/images/en/c5-chart-content-types-players.svg';
	import ContentFrequencyChart from '$lib/assets/images/en/c5-chart-content-frequency.svg';
	import ContentChannelsChart from '$lib/assets/images/en/c5-chart-content-channels.svg';
	import ContentStreamersImage from '$lib/assets/images/c5-content-streamers-image.svg';
</script>

<section id="map-content-section">
	<Title type="special" color="red">Content</Title>
	<Paragraph color="black">
		Driven by the pandemic, Twitch, Youtube Gaming and Facebook Gaming are growing in market share.
	</Paragraph>
	<div class="display-flex-wrapper">
		<Image src={ContentHighlightImage} alt="" />
		<div>
			<Highlight color="black">
				In the Gamesphere, the content industry develops from the bottom up, from people rather than
				institutions
			</Highlight>
			<Paragraph color="black">
				Streamers, casters and a boom of professionals come into existence in this world.
			</Paragraph>
		</div>
	</div>
	<Carousel>
		<PostIt title="Ecosystem" author="Expert" background="red" color="white">
			“Within the gaming universe, there's not just the player. You have a whole context there... a
			presenter, an analyst, a commentator, an audio operator, a cameraman. So there are several
			professions behind this ecosystem.”
		</PostIt>
		<PostIt
			title="Content creator"
			author="Female, 23 years old, Rio de Janeiro, RJ"
			background="red"
			color="white"
		>
			“Nowadays I work with games, through content creation, so I'm always connected to games and
			the issues surrounding them.”
		</PostIt>
	</Carousel>
	<Title type="component" color="black">
		The most accessed content is made by people, former gamers, now content creators.
	</Title>
	<Image src={PlayersContentTypesChart} alt="" />
	<Legend color="black">Percentage of gamers who access some type of content.</Legend>
	<Title type="component" color="black">
		The majority of gamers consume related content at least once a week
	</Title>
	<Image src={ContentFrequencyChart} alt="" />
	<Legend color="black">
		More than 60% of gamers consume gaming content between 1 and 7 times a week. Around 16% don't
		consume any content at all.
	</Legend>
	<Title type="component" color="black">
		Of the channels consumed, Youtube, Instagram and TikTok lead the way
	</Title>
	<Image src={ContentChannelsChart} alt="" />
	<Legend color="black">Percentage of gamers who access some type of content.</Legend>
	<Carousel>
		<div class="profile-behavior-chart">
			<h2>Do you access some type of game-related content?</h2>
			<img
				src={base + '/charts/chapter-5/en/1.svg'}
				alt="Do you access some type of game-related content?"
			/>
		</div>
		<div class="profile-behavior-chart">
			<h2>Hours per week typically spent consuming game-related content</h2>
			<img
				src={base + '/charts/chapter-5/en/2.svg'}
				alt="Hours per week typically spent consuming game-related content"
			/>
		</div>
	</Carousel>
	<Image src={ContentStreamersImage} alt="" />
	<Highlight color="black">
		Streamers and casters are key players in communities and the ecosystem.
	</Highlight>
	<Paragraph align="center" color="black">
		They fuel engagement in games, having power and relevance with their audiences, generating
		extremely high engagement and creating loyal fans and followers.
	</Paragraph>
</section>

<style>
	#map-content-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
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

	@media only screen and (max-width: 768px) {
		#map-content-section {
			padding: 4rem 7.5vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2rem auto;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			width: 100%;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1rem auto 2rem auto;
		}

		.profile-behavior-chart {
			height: 35rem;
			margin: 2em auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-content-section {
			padding: 5rem 15vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2.5rem auto;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			width: 100%;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.25rem auto 2.5rem auto;
		}

		.profile-behavior-chart {
			height: 40rem;
			margin: 2.5rem auto;
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
		#map-content-section {
			padding: 5rem 20vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2.5rem auto;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
			width: 100%;
		}

		.display-flex-wrapper > :global(div .p-highlight) {
			margin-left: 0;
			text-align: left;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.25rem auto 2.5rem auto;
			width: 30vw;
		}

		.profile-behavior-chart {
			height: 42rem;
			margin: 0 auto;
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
		#map-content-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-content-section > :global(h5) {
			margin-top: 4.5rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 3rem auto;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
			width: 100%;
		}

		.display-flex-wrapper > :global(div .p-highlight) {
			margin-left: 0;
			text-align: left;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.5rem auto 3rem auto;
			width: 25rem;
		}

		.profile-behavior-chart {
			height: 42rem;
			margin: 0 auto;
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
