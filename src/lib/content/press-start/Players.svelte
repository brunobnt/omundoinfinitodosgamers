<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';

	import ClientsIcon from '$lib/assets/images/press-start-client-icon.png';
	import TalkIcon from '$lib/assets/images/press-start-talk-icon.png';
	import LiveIcon from '$lib/assets/images/press-start-live-icon.png';
	import GuestsIcon from '$lib/assets/images/press-start-guests-icon.png';

	const playersList = [
		{
			name: 'Cliente',
			description: 'Time de marketing, marca, comunicação, produto, consumer insights, etc.',
			image: ClientsIcon
		},
		{ name: 'Talk', description: 'Estrategistas de pesquisa, insights e dados.', image: TalkIcon },
		{
			name: 'ℓiⱴε',
			description: 'Estrategistas de marcas, comunicação, canais e inteligência de dados.',
			image: LiveIcon
		},
		{
			name: 'Convidados',
			description:
				'Especialistas da indústria, como gamers, desenvolvedores, casters, publishers, etc.',
			image: GuestsIcon
		}
	];
</script>

<section id="press-start-players-section">
	<div id="press-start-players-title">
		<Title type="special" align="center" color="black">Players</Title>
	</div>
	<div id="press-start-players-wrapper">
		{#each playersList as player, index}
			{#if index === 2}
				<div>
					<img src={player.image} alt={player.name} />
					<h6>{player.name}</h6>
					<Paragraph color="black">{player.description}</Paragraph>
				</div>
			{:else}
				<div>
					<img src={player.image} alt={player.name} />
					<Title type="subsection" color="black">{player.name}</Title>
					<Paragraph color="black">{player.description}</Paragraph>
				</div>
			{/if}
		{/each}
	</div>
</section>
<div class="pink-section-divider" />

<style>
	#press-start-players-section {
		align-items: center;
		background-color: var(--color-yellow-normal);
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: clip;
	}

	#press-start-players-title {
		align-items: center;
		background-image: url('$lib/assets/backgrounds/background-press-start-stripes-pattern.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: contain;
		display: flex;
		justify-content: center;
	}

	#press-start-players-title :global(h2) {
		display: inline-block;
		background-color: var(--color-yellow-normal);
		width: fit-content;
	}

	#press-start-players-wrapper {
		display: grid;
	}

	#press-start-players-wrapper :global(h4) {
		padding: 0;
	}

	#press-start-players-wrapper :global(h6) {
		color: var(--color-black);
		font-family: sans-serif;
		font-style: italic;
		font-weight: 900;
		line-height: 100%;
	}

	.pink-section-divider {
		background-color: transparent;
		background-image: url('$lib/assets/backgrounds/background-press-start-pink-pattern.svg');
		background-position: center center;
		background-repeat: repeat-x;
		background-size: cover;
	}

	@media only screen and (max-width: 768px) {
		#press-start-players-section {
			padding: 2rem 20vw 2rem 20vw;
		}

		#press-start-players-title {
			margin: 0 -20vw 1rem -20vw;
			width: calc(100% + 40vw);
		}

		#press-start-players-title :global(h2) {
			font-size: 4rem;
			padding: 1rem 1rem 0 1rem;
		}

		#press-start-players-wrapper {
			gap: 0.5rem;
			grid-template-columns: unset;
			grid-template-rows: unset;
		}

		#press-start-players-wrapper > div:nth-child(2) :global(*),
		#press-start-players-wrapper > div:nth-child(4) :global(*) {
			text-align: right !important;
		}

		#press-start-players-wrapper :global(img) {
			margin-bottom: 0.5rem;
		}

		#press-start-players-wrapper :global(h4) {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}

		#press-start-players-wrapper :global(h6) {
			font-size: 1.75rem;
			margin: -0.25rem 0 0.5rem 0;
		}

		.pink-section-divider {
			height: 2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#press-start-players-section {
			padding: 2.5rem 15vw 2.5rem 15vw;
		}

		#press-start-players-title {
			margin: 0 -15vw 1.25rem -15vw;
			width: calc(100% + 30vw);
		}

		#press-start-players-title :global(h2) {
			font-size: 4.5rem;
			padding: 1.375rem 1.25rem 0 1.25rem;
		}

		#press-start-players-wrapper {
			gap: 0 2.5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}

		#press-start-players-wrapper > div:nth-child(2) :global(*),
		#press-start-players-wrapper > div:nth-child(4) :global(*) {
			text-align: right !important;
		}

		#press-start-players-wrapper :global(img) {
			margin-bottom: 0.75rem;
		}

		#press-start-players-wrapper :global(h4) {
			font-size: 1.75rem;
			margin-bottom: 0.75rem;
		}

		#press-start-players-wrapper :global(h6) {
			font-size: 2rem;
			margin: -0.25rem 0 1rem 0;
		}

		.pink-section-divider {
			height: 1.25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#press-start-players-section {
			padding: 2.5rem 10vw 2.5rem 10vw;
		}

		#press-start-players-title {
			margin: 0 -10vw 1.25rem -10vw;
			width: calc(100% + 20vw);
		}

		#press-start-players-title :global(h2) {
			font-size: 4.5rem;
			padding: 1.375rem 1.25rem 0 1.25rem;
		}

		#press-start-players-wrapper {
			gap: 0 3.75rem;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
		}

		#press-start-players-wrapper > div:nth-child(2) :global(*),
		#press-start-players-wrapper > div:nth-child(4) :global(*) {
			text-align: left !important;
		}

		#press-start-players-wrapper :global(img) {
			margin-bottom: 1.25rem;
		}

		#press-start-players-wrapper :global(h4) {
			font-size: 1.75rem;
			margin-bottom: 0.75rem;
		}

		#press-start-players-wrapper :global(h6) {
			font-size: 2rem;
			margin: -0.25rem 0 1rem 0;
		}

		.pink-section-divider {
			height: 1.25rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#press-start-players-section {
			padding: 3rem 0 3rem 0;
			padding-left: calc((100% - 70rem) / 2);
			padding-right: calc((100% - 70rem) / 2);
		}

		#press-start-players-title {
			margin: 0 -0 1.5rem 0;
			width: calc(100vw);
		}

		#press-start-players-title :global(h2) {
			font-size: 5rem;
			padding: 1.5rem 1.5rem 0 1.5rem;
		}

		#press-start-players-wrapper {
			gap: 0 4.5rem;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
		}

		#press-start-players-wrapper > div:nth-child(2) :global(*),
		#press-start-players-wrapper > div:nth-child(4) :global(*) {
			text-align: left !important;
		}

		#press-start-players-wrapper :global(img) {
			margin-bottom: 1.5rem;
		}

		#press-start-players-wrapper :global(h4) {
			font-size: 1.75rem;
			margin-bottom: 0.75rem;
		}

		#press-start-players-wrapper :global(h6) {
			font-size: 2rem;
			margin: -0.25rem 0 1rem 0;
		}

		.pink-section-divider {
			height: 1.5rem;
		}
	}
</style>
