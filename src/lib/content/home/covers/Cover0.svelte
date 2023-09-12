<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	import IconLoop from '$lib/assets/icons/loop.svg';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const dispatch = createEventDispatcher();

	function sendClick(e) {
		e.stopPropagation();
		dispatch('click', e);
	}

	function start(e) {
		e.stopPropagation();
		dispatch('start', e);
	}
</script>

<div id="background" role="button" tabindex="0" on:click={sendClick} on:keydown={sendClick}>
	<div id="infinito" class="w-full h-[80%] bg-center bg-contain lg:h-full transition-all" />
	<div
		id="content"
		class="flex flex-col justify-between p-10 px-6 w-full h-full
            lg:px-12 transition-all"
	>
		<div
			id="change-game"
			class="flex flex-col flex-nowrap gap-2
                lg:flex-row lg:items-center"
		>
			{#if mounted}
				<img src={IconLoop} alt="Trocar de jogo" class="w-7 h-7 lg:w-10 lg:w-10 transition-all" />
				<p class="whitespace-nowrap text-xs lg:text-xl transition-all">
					Clique para <br /> trocar de jogo
				</p>
			{/if}
		</div>
		<div
			id="title"
			class="flex flex-col flex-nowrap justify-center items-center text-7xl relative grow
                lg:flex-row lg:text-8xl lg:gap-[5%]"
		>
			{#if mounted}
				<div id="mundinho-container" class="flex w-full h-full absolute place-content-center">
					<div id="mundinho" class="w-full h-full transition-all" />
				</div>

				<p class="title-text lg:w-[27rem]" transition:fade={{ duration: 1000 }}>O mundo</p>
				<p class="title-text justify-self-center lg:w-[16rem]" transition:fade={{ duration: 2000 }}>
					infinito
				</p>
				<p class="title-text lg:w-[27rem]" transition:fade={{ duration: 3000 }}>dos gamers</p>
			{/if}
		</div>
		<div class="flex flex-row justify-between">
			<div class="flex flex-col max-w-lg mr-20">
				<h3 class="text-lg mb-2 lg:text-3xl">Um estudo sobre o consumidor de games no Brasil</h3>
				<p class="text-sm lg:text-2xl">
					Mergulhe na complexidade desse universo, conheça os perfis de gamers e entenda como marcas
					podem ser mais relevantes
				</p>
				<button
					class="start mt-7 text-xl w-28 h-11
                        lg:text-4xl lg:w-44 lg:h-16 transition-all"
					on:click={start}
				>
					Iniciar <span class="start"> > </span>
				</button>
			</div>

			<div class="flex flex-col justify-end items-end">
				<a
					id="design-by"
					class="text-[0.6rem] md:text-xs m-1 md:m-3"
					href="http://odd.studio"
					target="_blank"
				>
					Design por <br /> Odd.Studio</a
				>
				<a id="realizacao" class="" href="http://talkdigital.co" target="_blank">⠀</a>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes up-down {
		0%,
		100% {
			transform: translateY(-5%);
			animation-timing-function: ease-in-out;
		}
		50% {
			transform: translateY(20%);
			animation-timing-function: ease-in-out;
		}
	}

	* {
		color: var(--color-white);
		z-index: 100;
	}

	h3 {
		font-family: 'Fraunces', serif;
		font-weight: 600;
		text-shadow: 0px 0px 25px #000, 0px 0px 40px #000;
	}

	p {
		cursor: pointer;
		font-family: 'Fraunces', serif;
		font-weight: 300;
		line-height: 150%;
		text-shadow: 0px 0px 25px #000, 0px 0px 40px #000;
	}

	a {
		cursor: pointer;
		font-family: 'Fraunces', serif;
		font-weight: 300;
		line-height: 150%;
	}

	img {
		cursor: pointer;
	}

	#background {
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/covers/bg-cover-0.jpg');
		background-position: center center;
		background-size: cover;
		height: 100%;
		width: 100%;
	}

	#realizacao {
		aspect-ratio: 12/15;
		background-image: url('$lib/assets/images/realizacao.png');
		background-origin: border-box;
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
		max-width: 12rem;
		min-width: 5rem;
		width: 10vw;
	}

	#infinito {
		background-image: url('$lib/assets/images/infinito-lettering.png');
		background-origin: border-box;
		background-repeat: no-repeat;
		margin: 0rem;
		position: absolute;
		z-index: 1;
	}

	#mundinho {
		animation: up-down 10s infinite;
		background-image: url('$lib/assets/images/mundinho.png');
		background-origin: border-box;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: contain;
		z-index: 2;
	}

	#change-game,
	#change-game p {
		color: var(--color-white);
		font-family: 'Fraunces', serif;
		font-weight: 500;
	}

	.title-text {
		color: #f2ff00;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		text-align: center;
		text-shadow: 0px 2.5px 15px #000;
		vertical-align: middle;
		white-space: nowrap;
	}

	.start {
		background-color: var(--color-yellow-normal);
		border-radius: 0.4rem;
		color: var(--color-black);
		cursor: pointer;
		font-family: 'Fraunces', serif;
		font-weight: 600;
		vertical-align: baseline;
	}

	.start span {
		background-color: transparent;
		font-weight: 900;
		line-height: 0.6rem;
		vertical-align: middle;
	}
</style>
