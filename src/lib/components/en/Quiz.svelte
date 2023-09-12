<script>
	import selectedImg from '$lib/assets/images/maozinha.png';
	import { fly } from 'svelte/transition';

	let defaultData = [
		{
			word: 'EASTER EGG',
			options: [
				{
					text: "Surprise element that releases a pet in children's games.",
					correct: false
				},
				{
					text: 'Surprises or references deliberately left for the players to discover.',
					correct: true
				}
			]
		},
		{
			word: 'CAMPER',
			options: [
				{
					text: 'A person who stands in a fixed place to kill other players. Famous in multiplayer games.',
					correct: true
				},
				{
					text: 'Anyone who loves games that imitate camping, such as Farmville or Animal Crossing.',
					correct: false
				}
			]
		},
		{
			word: 'F',
			options: [
				{
					text: 'F is used when the character dies ("F for respects"). It is used when someone has died miserably in a game.',
					correct: true
				},
				{
					text: 'F is used when the character asks the opponent to play fairly, ("F for fair", "press F for fair").',
					correct: false
				}
			]
		},
		{
			word: 'GG',
			options: [
				{
					text: 'Good Game. Used in multiplayer matches where people have given their best.',
					correct: true
				},
				{
					text: 'Go Game. Used to encourage players before the match starts.',
					correct: false
				}
			]
		},
		{
			word: 'TO LURE',
			options: [
				{
					text: 'To lure a target to a specific location in order to gain an advantage.',
					correct: true
				},
				{
					text: "Lure is to bring good luck to players when things aren't going well.",
					correct: false
				}
			]
		},
		{
			word: 'TO NERF',
			options: [
				{
					text: 'A term used when game developers weaken a character or element with the intention of balancing the game.',
					correct: true
				},
				{
					text: "It's the term for a player who has killed too many people with a single weapon in a game.",
					correct: false
				}
			]
		},
		{
			word: 'NOOB',
			options: [
				{
					text: "Players who are new to the game, or don't know how to play it.",
					correct: true
				},
				{
					text: 'It means winning by a very large margin and humiliating your opponent.',
					correct: false
				}
			]
		},
		{
			word: 'X1',
			options: [
				{
					text: '1×1 (one versus one) which means a duel between two players to see who is the best.',
					correct: true
				},
				{
					text: 'X1 is the player with the highest score in a multiplayer game, the mvp of that group.',
					correct: false
				}
			]
		}
	];

	export let data = defaultData;

	let current = 0;
	let selected = 0;
	let answer = 0;
	let score = 0;
	let finished = false;

	data.sort(() => Math.random() - 0.5);
	data.forEach((word) => {
		word.options.sort(() => Math.random() - 0.5);
	});

	const checkAnswer = (option) => {
		if (option.correct) {
			answer = 1;
			score += 1;
		} else {
			answer = -1;
		}
	};

	const handleNext = () => {
		if (finished) {
			current = 0;
			selected = 0;
			answer = 0;
			score = 0;
			finished = false;
		}

		if (selected == 0) return;
		else if (answer != 0) {
			if (current < data.length - 1) {
				current += 1;
			} else {
				finished = true;
			}
			selected = 0;
			answer = 0;
			return;
		} else {
			checkAnswer(data[current].options[selected - 1]);
		}
	};

	const handleSelect = (i) => {
		if (answer == 0) selected = i;
		else handleNext();
	};
</script>

<div id="quiz-container">
	{#if answer == 1}
		<div id="title" class="right">
			Your answer is
			<span id="current-word">Correct!</span>
		</div>
	{:else if answer == -1}
		<div id="title" class="wrong">
			Your answer is
			<span id="current-word">Incorrect!</span>
		</div>
	{:else if finished}
		<div id="title" class="">
			<span id="current-word">GG!</span>
		</div>
	{:else}
		<div id="title" class="">
			What is the meaning of the term:
			<span id="current-word">
				{data[current].word}
			</span>
		</div>
	{/if}
	{#if finished}
		<div id="score" in:fly={{ y: -100, duration: 1000 }}>
			Score:
			<span>{score}/{data.length}</span>
		</div>
	{:else}
		<div id="options">
			{#each data[current].options as option, i}
				<button
					id="option{i + 1}"
					class="option
                        {selected == i + 1 ? 'option-selected' : ''} 
                        {answer == 1 ? 'option-right' : ''}
                        {answer == -1 ? 'option-wrong' : ''}"
					on:click={() => {
						handleSelect(i + 1);
					}}
				>
					<div class="option-title">
						{#if selected == i + 1}
							<img
								id="selected-img"
								src={selectedImg}
								alt="Opção selecionada"
								transition:fly={{ x: -50, duration: 100 }}
							/>
						{/if}
						Option {i + 1}
					</div>
					<div class="option-text">
						{option.text}
					</div>
				</button>
			{/each}
		</div>
	{/if}
	<button
		id="next"
		class="
            {selected != 0 || finished ? 'selected' : ''} 
            {answer == 1 ? 'answered-right' : ''} 
            {answer == -1 ? 'answered-wrong' : ''}"
		on:click={handleNext}
	>
		{#if answer != 0}
			{'Next word >'}
		{:else if selected != 0}
			Check the answer
		{:else if finished}
			{'< Play again'}
		{:else}
			{'<Select an option>'}
		{/if}
	</button>
</div>

<style>
	* {
		transition-duration: 100ms;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	#quiz-container {
		align-items: center;
		background-color: var(--color-yellow-normal);
		border: 2px solid var(--color-yellow-dark);
		border-radius: 0.75rem;
		box-shadow: 0px 18px 20px 0px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#title {
		color: var(--color-white);
		background: var(--color-yellow-darker);
		font-family: 'Fraunces', serif;
		font-weight: 300;
		font-style: italic;
		line-height: 100%;
		text-align: center;
	}

	#title.right {
		background: var(--color-green-dark);
		border: 2px solid var(--color-green-darker);
	}

	#title.wrong {
		background: var(--color-red-normal);
		border: 2px solid var(--color-red-darker);
	}

	#current-word {
		display: block;
		color: var(--color-yellow-normal);
		font-family: 'Dx Slight', sans-serif;
		font-weight: 600;
		line-height: 125%;
		text-align: center;
		text-transform: uppercase;
	}

	#score {
		color: var(--color-yellow-darker);
		font-family: 'Press Start 2P', monospace;
		font-weight: 600;
		line-height: 175%;
		text-align: center;
	}

	#score span {
		display: block;
	}

	#options {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#selected-img {
		position: absolute;
	}

	#next {
		background-color: var(--color-gray-normal);
		border-radius: 0.5rem;
		color: var(--color-white);
		font-family: 'Press Start 2P', monospace;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		text-align: center;
		text-transform: uppercase;
		transition-property: color, background-color, box-shadow;
	}

	#next:hover:enabled {
		box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 0px 0px rgba(255, 255, 255, 0.45) inset;
	}

	#next.selected {
		background: var(--color-blue-dark);
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25), 0px 2px 0px 0px rgba(255, 255, 255, 0.45) inset;
	}

	#next.answered-right {
		background: var(--color-green-normal);
		color: var(--color-green-darker);
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25), 0px 2px 0px 0px rgba(255, 255, 255, 0.45) inset;
	}

	#next.answered-wrong {
		background: var(--color-red-normal);
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25), 0px 2px 0px 0px rgba(255, 255, 255, 0.45) inset;
	}

	.option-title {
		align-items: flex-start;
		background: var(--color-yellow-dark);
		border-radius: 0.5rem 0.5rem 0 0;
		color: var(--color-white);
		font-family: 'Overpass Mono', monospace;
		font-weight: 700;
		line-height: 100%;
		position: relative;
		text-transform: uppercase;
	}

	.option-text {
		background-color: var(--color-white);
		border-radius: 0 0.25rem 0.25rem 0.25rem;
		color: var(--color-yellow-darker);
		font-family: 'Press Start 2P', monospace;
		font-weight: 400;
		line-height: 125%;
		text-align: center;
	}

	.option-selected > .option-title {
		background: var(--color-blue-dark);
	}

	.option-selected > .option-text {
		border: 1px solid var(--color-blue-dark);
		border-bottom: 4px solid var(--color-blue-dark-hover);
	}

	.option-right > .option-title,
	.option-wrong > .option-title {
		background-color: var(--color-gray-normal);
	}

	.option-right > .option-text,
	.option-wrong > .option-text {
		color: var(--color-gray-normal);
	}

	.option-right.option-selected > .option-title {
		background-color: var(--color-green-dark);
	}
	.option-wrong.option-selected > .option-title {
		background: var(--color-red-normal);
	}

	.option-right.option-selected > .option-text {
		border: 1px solid var(--color-green-dark);
		background-color: var(--color-green-dark);
		color: var(--color-white);
	}

	.option-wrong.option-selected > .option-text {
		background-color: var(--color-red-normal);
		border: 1px solid var(--color-red-normal);
		color: var(--color-white);
	}

	@media only screen and (max-width: 768px) {
		#quiz-container {
			margin: 2rem auto 4rem auto;
			width: 100%;
		}

		#title {
			font-size: 1rem;
			padding: 1rem 1rem 0.5rem 1rem;
			transform: translateY(-1rem);
			width: 18rem;
		}

		#current-word {
			font-size: 3.75rem;
		}

		#score {
			font-size: 1.25rem;
			padding: 2rem 0;
		}

		#options {
			max-width: unset;
		}

		#selected-img {
			left: -3.5rem;
			top: -10%;
			max-width: 4rem;
			width: 4rem;
		}

		#next {
			font-size: 0.75rem;
			transform: translateY(1rem);
			padding: 0.75rem 1rem 0.5rem 1rem;
		}

		#next:hover:enabled {
			transform: translateY(0.5rem);
		}

		.option {
			margin: 0.5rem 2rem;
		}

		.option-title {
			font-size: 0.625rem;
			margin-bottom: 0;
			padding: 0.5rem 0.5rem 0.4rem 0.5rem;
			width: fit-content;
		}

		.option-text {
			font-size: 0.625rem;
			margin-top: 0;
			padding: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#quiz-container {
			margin: 2.5rem auto 5rem auto;
			width: 27.5rem;
		}

		#title {
			font-size: 1.125rem;
			padding: 1.25rem 1.25rem 0.75rem 1.25rem;
			transform: translateY(-1rem);
			width: 22.5rem;
		}

		#current-word {
			font-size: 4rem;
		}

		#score {
			font-size: 1.375rem;
			padding: 2.5rem 0;
		}

		#options {
			max-width: 100%;
		}

		#selected-img {
			left: -4.5rem;
			top: -15%;
			max-width: 5rem;
			width: 5rem;
		}

		#next {
			font-size: 0.75rem;
			transform: translateY(1rem);
			padding: 0.75rem 1.25rem 0.5rem 1.25rem;
		}

		#next:hover:enabled {
			transform: translateY(0.5rem);
		}

		.option {
			margin: 0.5rem 2.5rem;
		}

		.option-title {
			font-size: 0.625rem;
			margin-bottom: 0;
			padding: 0.5rem 0.5rem 0.4rem 0.5rem;
			width: fit-content;
		}

		.option-text {
			font-size: 0.625rem;
			margin-top: 0;
			padding: 1.25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#quiz-container {
			margin: 2.5rem auto 5rem auto;
			min-width: 30rem;
			width: 50rem;
		}

		#title {
			font-size: 1.125rem;
			padding: 1.25rem 1.25rem 0.75rem 1.25rem;
			transform: translateY(-1rem);
			width: 25rem;
		}

		#current-word {
			font-size: 4rem;
		}

		#score {
			font-size: 1.375rem;
			padding: 2.5rem 0;
		}

		#options {
			max-width: 100%;
		}

		#selected-img {
			left: -4.5rem;
			top: -15%;
			max-width: 5rem;
			width: 5rem;
		}

		#next {
			font-size: 0.75rem;
			transform: translateY(1rem);
			padding: 0.75rem 1.25rem 0.5rem 1.25rem;
		}

		#next:hover:enabled {
			transform: translateY(0.5rem);
		}

		.option {
			margin: 0.5rem 2.5rem;
		}

		.option-title {
			font-size: 0.625rem;
			margin-bottom: 0;
			padding: 0.5rem 0.5rem 0.4rem 0.5rem;
			width: fit-content;
		}

		.option-text {
			font-size: 0.625rem;
			margin-top: 0;
			padding: 1.25rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#quiz-container {
			margin: 3rem auto 6rem auto;
			min-width: 30rem;
			width: 55rem;
		}

		#title {
			font-size: 1.25rem;
			padding: 1.5rem 1.5rem 1rem 1.5rem;
			transform: translateY(-1.5rem);
			width: 27.5rem;
		}

		#current-word {
			font-size: 4.5rem;
		}

		#score {
			font-size: 1.5rem;
			padding: 3rem 0;
		}

		#options {
			max-width: 95%;
		}

		#selected-img {
			left: -5.25rem;
			top: -20%;
			max-width: 6rem;
			width: 6rem;
		}

		#next {
			font-size: 0.875rem;
			transform: translateY(1.5rem);
			padding: 1rem 1.5rem 0.75rem 1.5rem;
		}

		#next:hover:enabled {
			transform: translateY(1.25rem);
		}

		.option {
			margin: 0.75rem 3rem;
		}

		.option-title {
			font-size: 0.75rem;
			margin-bottom: 0;
			padding: 0.75rem 0.75rem 0.5rem 0.75rem;
			width: fit-content;
		}

		.option-text {
			font-size: 0.75rem;
			margin-top: 0;
			padding: 1.5rem;
		}
	}
</style>
