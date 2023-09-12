<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import JoystickCheckbox from '$lib/components/JoystickCheckbox.svelte';

	import GamerImageChart from '$lib/assets/images/c1-chart-gamer-image.svg';

	let joystickSelect = false;
	$: year = joystickSelect ? 2023 : 2017;
</script>

<section id="profiles-image-section">
	<div id="profiles-image-subsection">
		<div id="profiles-image-subsection-content">
			<div class="profiles-image-title">
				<Title type="component" align="center" color="black">
					A imagem dos gamers em 2017 e em 2023
				</Title>
				<Paragraph align="center" color="black">
					Interaja com o joystick para ver como as visões sobre gamers mudaram nesse período
				</Paragraph>
			</div>
			<div id="joystick-selector">
				<button
					id="joystick-selector-2017"
					class="joystick-selector-button {year == 2017 ? 'button-selected' : ''}"
					on:click={() => (joystickSelect = false)}
				>
					2017
				</button>
				<div id="joystick">
					<JoystickCheckbox bind:checked={joystickSelect} />
				</div>
				<button
					id="joystick-selector-2023"
					class="joystick-selector-button {year == 2023 ? 'button-selected' : ''}"
					on:click={() => (joystickSelect = true)}
				>
					2023
				</button>
			</div>
			<div id="profiles-image-content">
				<div id="profiles-image-content-frame">
					{#if year == 2017}
						<div class="content-container">
							<div class="comment-container">
								<Paragraph>
									“Aqui no Brasil é como se você fosse uma aberração para certos círculos, as
									pessoas não conseguem entender alguém que goste mais de jogos de computador do que
									samba e futebol, por exemplo.”
								</Paragraph>
								<h6 class="author">Homem, 25 anos, Campo Grande, MS</h6>
							</div>
							<div class="comment-container">
								<Paragraph>
									“As pessoas me julgam por 'perder tempo' me divertindo, quando elas 'perdem tempo'
									olhando novelas e conteúdos que apenas servem para diversão delas.”
								</Paragraph>
								<h6 class="author">Homem, 25 anos, Sapucaia do Sul, RS</h6>
							</div>
						</div>
					{:else}
						<div class="content-container">
							<div class="comment-container">
								<Paragraph>
									“Deixou de ser coisa de vagabundo como falavam, e hoje é uma profissão.”
								</Paragraph>
								<h6 class="author">Homem, Pardo, 34 anos, Belém, PA</h6>
							</div>
							<div class="comment-container">
								<Paragraph>
									“Parece que o jogo agora é regra. Todos jogam alguma coisa, não vejo mais este
									preconceito de antigamente.”
								</Paragraph>
								<h6 class="author">Homem, Branco, 31 anos, Maringá, PR</h6>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div id="profiles-image-subsection-2">
		<div id="profiles-image-subsection-content">
			<div class="profiles-image-title">
				<Title type="component" align="center" color="black">
					A visão sobre os gamers também mudou, para melhor
				</Title>
				<Paragraph align="center" color="black">
					Percentual dos respondentes que sentem pouco ou nenhum preconceito com gamers:
				</Paragraph>
			</div>
			<img src={GamerImageChart} alt="" />
			<div id="legend-wrapper">
				<Legend color="black">
					Os dados da nossa pesquisa também mostram essa diferença: hoje, ⅔ das pessoas que jogam
					dizem sentirem pouco ou nenhum preconceito com gamers.
				</Legend>
			</div>
		</div>
	</div>
</section>

<style>
	h6 {
		font-family: 'Press Start 2P', monospace;
		letter-spacing: -0.005rem;
		line-height: 160%;
		text-decoration: underline;
		text-transform: uppercase;
	}

	#profiles-image-section {
		display: flex;
		overflow-x: clip;
	}

	#profiles-image-subsection,
	#profiles-image-subsection-2 {
		align-items: center;
		background-position: center center;
		background-size: cover;
		display: flex;
		flex-direction: column;
	}

	#profiles-image-subsection {
		background-image: url('$lib/assets/backgrounds/background-yellow.png');
	}

	#profiles-image-subsection-2 {
		background-image: url('$lib/assets/backgrounds/background-white.png');
	}

	#profiles-image-subsection-content {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	#joystick,
	#joystick :global(*) {
		cursor: pointer;
	}

	#joystick-selector {
		display: flex;
		flex-direction: row;
		justify-content: center;
		user-select: none;
		z-index: 10;
	}

	#profiles-image-content {
		border: 6px dashed var(--color-red-normal);
		flex-shrink: 0;
	}

	#profiles-image-content-frame {
		border: 6px dashed var(--color-blue-normal);
	}

	.joystick-selector-button {
		background: transparent;
		color: var(--color-black);
		font-family: 'Press Start 2P', monospace;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.button-selected {
		background: var(--color-red-normal);
		color: var(--color-yellow-normal);
	}

	.content-container {
		display: flex;
		flex-direction: column;
	}

	.content-container :global(p) {
		font-style: italic;
		line-height: 125%;
	}

	@media only screen and (max-width: 768px) {
		#profiles-image-section {
			flex-direction: column;
		}

		#profiles-image-subsection-content {
			padding: 4rem 7.5vw;
		}

		#profiles-image-subsection-content :global(h6) {
			font-size: 0.5rem;
			margin-bottom: 0.5rem 0 2rem 0;
		}

		#joystick-selector {
			gap: 1rem;
			margin-bottom: -1rem;
		}

		#profiles-image-content {
			margin-left: -0.5rem;
			padding-bottom: -1rem;
			width: 20rem;
		}

		#profiles-image-content-frame {
			padding: 3rem 2rem;
			margin: -12px 0;
			width: calc(100% + 12px);
		}

		.joystick-selector-button {
			border-radius: 4rem;
			font-size: 1rem;
			height: 2.5rem;
			line-height: 100%;
			width: 6rem;
		}

		.content-container {
			gap: 2rem;
			min-height: 22rem;
		}

		.profiles-image-title {
			padding-bottom: 2rem;
		}

		.profiles-image-title :global(h5) {
			font-size: 1.25rem;
			margin-bottom: 0.5rem;
			padding: 0 15%;
		}

		.profiles-image-title :global(p) {
			font-size: 1rem;
			padding: 0;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-image-section {
			flex-direction: column;
			flex-wrap: wrap;
		}

		#profiles-image-subsection-content {
			padding: 5rem 15vw;
		}

		#profiles-image-subsection-content :global(h6) {
			font-size: 0.525rem;
			margin-bottom: 0.75rem 0 2.5rem 0;
		}

		#joystick-selector {
			gap: 2.5rem;
			margin-bottom: -1rem;
		}

		#profiles-image-content {
			margin-left: -0.5rem;
			padding-bottom: -1rem;
			width: 30rem;
		}

		#profiles-image-content-frame {
			padding: 3.125rem 2.5rem;
			margin: -12px 0;
			width: calc(100% + 12px);
		}

		.joystick-selector-button {
			border-radius: 5rem;
			font-size: 1.125rem;
			line-height: 90%;
			height: 2.25rem;
			width: 6rem;
		}

		.content-container {
			gap: 2.5rem;
			min-height: 19rem;
		}

		.profiles-image-title {
			padding-bottom: 2.5rem;
		}

		.profiles-image-title :global(h5) {
			font-size: 1.375rem;
			margin-bottom: 0.75rem;
			padding: 0 20%;
		}

		.profiles-image-title :global(p) {
			font-size: 1rem;
			padding: 0 10%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-image-section {
			flex-direction: row;
			flex-wrap: nowrap;
		}

		#profiles-image-subsection-content {
			padding: 5rem 5vw;
			width: 50vw;
		}

		#profiles-image-subsection-content :global(h6) {
			font-size: 0.525rem;
			margin-bottom: 0.75rem 0 2.5rem 0;
		}

		#joystick-selector {
			gap: 2.5rem;
			margin-bottom: -1rem;
		}

		#profiles-image-content {
			margin-left: -0.5rem;
			padding-bottom: -1rem;
			width: 30rem;
		}

		#profiles-image-content-frame {
			padding: 3.125rem 2.5rem;
			margin: -12px 0;
			width: calc(100% + 12px);
		}

		.joystick-selector-button {
			border-radius: 5rem;
			font-size: 1.125rem;
			line-height: 90%;
			height: 2.25rem;
			width: 6rem;
		}

		.content-container {
			gap: 2.5rem;
			min-height: 19rem;
		}

		.profiles-image-title {
			padding-bottom: 2.5rem;
		}

		.profiles-image-title :global(h5) {
			font-size: 1.375rem;
			margin-bottom: 0.75rem;
			padding: 0 20%;
		}

		.profiles-image-title :global(p) {
			font-size: 1rem;
			padding: 0 10%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-image-section {
			flex-direction: row;
			flex-wrap: nowrap;
		}

		#profiles-image-subsection-content {
			padding: 6rem 0;
			padding-left: calc((100% - 45rem) / 2);
			padding-right: calc((100% - 45rem) / 2);
			width: 50vw;
		}

		#profiles-image-subsection-content :global(h6) {
			font-size: 0.525rem;
			margin-bottom: 1rem 0 3rem 0;
		}

		#joystick-selector {
			gap: 3rem;
			margin-bottom: -1rem;
		}

		#profiles-image-content {
			margin-left: -0.5rem;
			padding-bottom: -1rem;
			width: 30rem;
		}

		#profiles-image-content-frame {
			padding: 3.5rem 3rem;
			margin: -12px 0;
			width: calc(100% + 12px);
		}

		.joystick-selector-button {
			border-radius: 5rem;
			font-size: 1.125rem;
			line-height: 90%;
			height: 2.25rem;
			width: 6rem;
		}

		.content-container {
			gap: 3rem;
			min-height: 22.5rem;
		}

		.profiles-image-title {
			padding-bottom: 3rem;
		}

		.profiles-image-title :global(h5) {
			font-size: 1.5rem;
			margin-bottom: 1rem;
			padding: 0 25%;
		}

		.profiles-image-title :global(p) {
			font-size: 1.25rem;
			padding: 0 15%;
		}
	}
</style>
