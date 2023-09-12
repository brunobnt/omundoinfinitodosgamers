<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';

	import StatementAuthor from '$lib/assets/images/c2-statement-author.png';
</script>

<section id="league-intro-section">
	<Paragraph color="blue-darker">
		Anyone who plays feels part of a big community, just like in music or sport. In music, it's more
		or less like this: even if there are people who only like eletronic music or pop, when they meet
		at a festival, they all feel part of the group of music lovers.
	</Paragraph>
	<Highlight color="blue-darker">It's the same with games: people share a love for games</Highlight>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Expert, Marketing Executive"
			background="gray-light"
			border="red"
			color="red"
		>
			“We have this in soccer, people who support a team, form communities (...) In games, there are
			communities that are very engaged, because to engage you just need to have a smartphone or a
			computer and be there, it's a simple way to create a community. You don't need to go to a
			stadium to have friends who support the same team as you. You can be at home, chatting or
			watching content from the game you like. And having that community building with something you
			feel you belong to.”
		</Statement>
	</div>
	<Highlight color="blue-darker">
		What characterizes this 'big league': <span class="color-red">affection</span>, their
		<span class="color-yellow-dark">own language</span>
		and <span class="color-blue-dark">socialization</span>.
	</Highlight>
</section>

<style>
	#league-intro-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	.statement-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		#league-intro-section {
			padding: 4rem 7.5vw 1rem 7.5vw;
		}

		.statement-wrapper {
			margin: 0 -7.5vw 2rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#league-intro-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		.statement-wrapper {
			margin: -1.25rem -15vw 1.25rem -15vw;
			padding: 0 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-intro-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		.statement-wrapper {
			margin: -1.25rem -20vw 1.25rem -20vw;
			padding: 0 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-intro-section {
			padding: 6rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		.statement-wrapper {
			margin: -1.5rem 0 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: 100vw;
		}
	}
</style>
