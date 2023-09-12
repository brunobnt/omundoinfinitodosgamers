<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Image from '$lib/components/Image.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	import AffectionWorld from '$lib/assets/images/c2-affection-world-image.png';
</script>

<div id="league-affection-cover" />
<section id="league-affection-section">
	<div class="display-flex-wrapper">
		<Title type="special" color="white">Affection</Title>
		<Paragraph color="white">
			The love of games stems from the different emotions involved from the moment people start
			playing. This place of affection is based on experiences inside and outside the game.
		</Paragraph>
	</div>
	<Carousel>
		<div class="postit-wrapper">
			<PostIt
				title="Bonding"
				author="Male, 25 years old, Recife, PE"
				background="red-dark"
				color="white"
			>
				“Through online games, digital gaming platforms, I've been able to create bonds and many
				friends, even face-to-face meetings. I remember when the Pokemon game was launched here in
				Brazil, it was a fever and I made a lot of friends when I went pokemon hunting.”
			</PostIt>
		</div>
		<PostIt title="Memories" author="Male, 33, São Paulo, SP" background="red-dark" color="white">
			“Games are not just entertainment, but a precious part of my history, full of memories and
			emotions that I will carry in my heart forever.”
		</PostIt>
		<PostIt
			title="Memories"
			author="Female, 25 years old, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“I was brought up surrounded by games: my father, a computer aficionado and IT professional,
			taught me how to play DOS games as a child. When my brother was 4 and I was 8, we were old
			enough to to fight over the console controller and the PC chair.”
		</PostIt>
		<PostIt title="Magic" author="Male, 33, São Paulo, SP" background="red-dark" color="white">
			“Games are magical portals that have taken me on unforgettable adventures, exciting stories
			and special connections.”
		</PostIt>
		<PostIt
			title="Fondness"
			author="Male, 33 years old, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“Games have been much more than just fun, they have been a fundamental part of my journey and
			helped me grow and learn in unique ways. I treasure these experiences with affection and
			gratitude, as they have been invaluable in my life.”
		</PostIt>
	</Carousel>
</section>
<div id="affection-world-subsection">
	<Highlight align="center" color="red">There is an affective place: “my game and I”</Highlight>
	<Image src={AffectionWorld} alt="" />
</div>

<style>
	#league-affection-cover {
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-c2-heart-pattern.png');
		background-position: center center;
		background-size: contain;
		height: 15rem;
		overflow-x: clip;
	}

	#league-affection-section {
		background-color: var(--color-red-normal);
		overflow-x: clip;
	}

	#league-affection-section .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#league-affection-section .display-flex-wrapper :global(h2) {
		width: unset;
	}

	#affection-world-subsection {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		justify-content: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#league-affection-cover {
			height: 15rem;
		}

		#league-affection-section {
			padding: 2rem 7.5vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#affection-world-subsection {
			flex-direction: column;
			padding: 2rem 7.5vw;
		}

		#affection-world-subsection :global(p) {
			margin: 0;
		}

		#affection-world-subsection :global(img) {
			max-width: unset;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-affection-section {
			padding: 2.5rem 15vw;
		}

		#affection-world-subsection {
			flex-direction: column;
			padding: 2.5rem 15vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#affection-world-subsection :global(p) {
			margin: 0;
		}

		#affection-world-subsection :global(img) {
			max-width: 25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-affection-section {
			padding: 2.5rem 20vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
		}

		#affection-world-subsection {
			flex-direction: row;
			padding: 2.5rem 20vw;
		}

		#affection-world-subsection :global(p) {
			margin: 0 5%;
		}

		#affection-world-subsection :global(img) {
			max-width: 20rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-affection-section {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
		}

		#affection-world-subsection {
			flex-direction: row;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#affection-world-subsection :global(p) {
			margin: 0 5%;
		}

		#affection-world-subsection :global(img) {
			max-width: 20rem;
		}
	}
</style>
