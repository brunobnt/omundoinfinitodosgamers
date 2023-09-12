<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<section id="press-start-levels-section">
	<Title type="special" align="center" color="red">Game Phases</Title>
	<div id="press-start-levels-wrapper">
		<div>
			<div>
				<Title type="special" align="center" color="red">01</Title>
				<h6>Pre-game</h6>
			</div>
			<span class="level-subtitle">Mapping</span>
			<Paragraph color="black">
				<li>Brand's level of knowledge about the gamers' universe.</li>
				<li>
					How mature the brand is on the subject (index obtained using a proprietary methodology
					ℓiⱴε + Talk).
				</li>
				<li>Needs + Job to Be Done to be worked on when the game starts.</li>
			</Paragraph>
		</div>
		<div>
			<div>
				<Title type="special" align="center" color="red">02</Title>
				<h6>Setup</h6>
			</div>
			<span class="level-subtitle">Organizing the rules of the game</span>
			<Paragraph color="black">
				<li>Customizing the methodology according to pre-game mapping.</li>
				<li>Selecting exclusive research data that meets the challenge.</li>
				<li>Selection and invitation of experts.</li>
			</Paragraph>
		</div>
		<div>
			<div>
				<Title type="special" align="center" color="red">03</Title>
				<h6>Play Hard</h6>
			</div>
			<span class="level-subtitle">The game itself</span>
			<Paragraph color="black">
				<li>
					The moment we receive the rules of the game (briefing, JTBD and limitations) and play it.
					Throughout the days of the project, participants must come up with the answers they are
					looking for collectively.
				</li>
			</Paragraph>
			<span class="level-subtitle">Final round</span>
			<Paragraph color="black">
				<li>
					The solution built by everyone is presented to the C-levels of the company and handed over
					to the client.
				</li>
			</Paragraph>
			<span class="level-subtitle">After play</span>
			<Paragraph color="black">
				<li>
					After the presentation, the work is continued and led by ℓiⱴε and Talk to execute
					communication campaigns, definition of medium and long-term strategies for attendance in
					this universe, development of media planning and buying, creation of content planning,
					among others.
				</li>
			</Paragraph>
		</div>
	</div>
</section>
<div class="black-section-divider" />

<style>
	#press-start-levels-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: clip;
	}

	#press-start-levels-section > :global(h2) {
		margin-bottom: 0;
	}

	#press-start-levels-wrapper > div {
		border-bottom: 5px dashed var(--color-gray-dark);
	}

	#press-start-levels-wrapper > div:last-child {
		border-bottom: none;
	}

	#press-start-levels-wrapper > div > div {
		align-items: center;
		display: flex;
	}

	#press-start-levels-wrapper :global(h2) {
		display: inline-block;
		margin: 0;
		padding: 0;
		width: fit-content;
	}

	#press-start-levels-wrapper h6 {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 600;
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
	}

	#press-start-levels-wrapper .level-subtitle {
		color: var(--color-black);
		display: block;
		font-family: 'Press Start 2P', monospace;
		font-weight: 400;
		text-transform: uppercase;
	}

	.black-section-divider {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-press-start-black-pattern.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#press-start-levels-section {
			padding: 4rem 7.5vw;
		}

		#press-start-levels-section > :global(h2) {
			font-size: 4rem;
		}

		#press-start-levels-wrapper > div {
			padding: 4rem 0.5rem;
		}

		#press-start-levels-wrapper > div > div {
			gap: 1.5rem;
		}

		#press-start-levels-wrapper :global(h2) {
			font-size: 3.75rem;
		}

		#press-start-levels-wrapper h6 {
			font-size: 2.5rem;
		}

		#press-start-levels-wrapper li {
			margin: 0 0 0.5rem 0.5rem;
		}

		#press-start-levels-wrapper .level-subtitle {
			font-size: 0.85rem;
			margin: 2rem 0 0.5rem 0;
		}

		.black-section-divider {
			height: 2rem;
			margin-top: -2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#press-start-levels-section {
			padding: 5rem 15vw;
		}

		#press-start-levels-section > :global(h2) {
			font-size: 4.5rem;
		}

		#press-start-levels-wrapper > div {
			padding: 3.75rem 1.25rem;
		}

		#press-start-levels-wrapper > div > div {
			gap: 2rem;
		}

		#press-start-levels-wrapper :global(h2) {
			font-size: 4.25rem;
		}

		#press-start-levels-wrapper h6 {
			font-size: 3rem;
		}

		#press-start-levels-wrapper li {
			margin: 0 0 0.75rem 0.75rem;
		}

		#press-start-levels-wrapper .level-subtitle {
			font-size: 0.9rem;
			margin: 2.25rem 0 0.75rem 0;
		}

		.black-section-divider {
			height: 2.5rem;
			margin-top: -2.5rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#press-start-levels-section {
			padding: 5rem 20vw;
		}

		#press-start-levels-section > :global(h2) {
			font-size: 4.5rem;
		}

		#press-start-levels-wrapper > div {
			padding: 3.75rem 1.25rem;
		}

		#press-start-levels-wrapper > div > div {
			gap: 2rem;
		}

		#press-start-levels-wrapper :global(h2) {
			font-size: 4.25rem;
		}

		#press-start-levels-wrapper h6 {
			font-size: 3rem;
		}

		#press-start-levels-wrapper li {
			margin: 0 0 0.75rem 0.75rem;
		}

		#press-start-levels-wrapper .level-subtitle {
			font-size: 0.9rem;
			margin: 2.25rem 0 0.75rem 0;
		}

		.black-section-divider {
			height: 2.5rem;
			margin-top: -2.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#press-start-levels-section {
			padding: 6rem 0;
			padding-left: calc((100% - 40rem) / 2);
			padding-right: calc((100% - 40rem) / 2);
		}

		#press-start-levels-section > :global(h2) {
			font-size: 5rem;
		}

		#press-start-levels-wrapper > div {
			padding: 4.5rem 1.5rem;
		}

		#press-start-levels-wrapper > div > div {
			gap: 2.5rem;
		}

		#press-start-levels-wrapper :global(h2) {
			font-size: 4.75rem;
		}

		#press-start-levels-wrapper h6 {
			font-size: 3.5rem;
		}

		#press-start-levels-wrapper li {
			margin: 0 0 1rem 1rem;
		}

		#press-start-levels-wrapper .level-subtitle {
			font-size: 0.925rem;
			margin: 2.5rem 0 0.875rem 0;
		}

		.black-section-divider {
			height: 3rem;
			margin-top: -3rem;
		}
	}
</style>
