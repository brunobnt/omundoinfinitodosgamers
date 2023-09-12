<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';

	import MenuButtonActive from '$lib/assets/icons/menu-button-active.svg';
	import MenuButtonDefault from '$lib/assets/icons/menu-button-default.svg';

	let currentURL = '';
	let showMenu = false;
	let pages = [
		{ index: 0, href: '/', text: 'Introdução' },
		{ index: 1, href: '/choose-your-player', text: '1 - Choose your player' },
		{ index: 2, href: '/uma-grande-liga', text: '2 - Uma grande liga' },
		{ index: 3, href: '/vida-x-fantasia', text: '3 - Vida x Fantasia' },
		{ index: 4, href: '/o-lado-toxico', text: '4 - O lado tóxico' },
		{ index: 5, href: '/explorando-o-mapa', text: '5 - Explorando o mapa' },
		{ index: 6, href: '/insights-para-marcas', text: 'Insights para marcas' },
		{ index: 7, href: '/press-start', text: 'Sua marca no jogo' }
	];

	const isCurrentLink = (href) => currentURL.endsWith(href);

	const toggleMenuButton = () => (showMenu = !showMenu);

	onMount(() => (currentURL = window.location.href));
</script>

<nav>
	{#if showMenu}
		<div id="menu-screen-overlay" transition:fade={{ duration: 300 }} />
		<div id="navigation-menu" transition:slide={{ duration: 300, easing: cubicInOut, axis: 'y' }}>
			<div>
				<h2>O mundo infinito dos gamers</h2>
				<div id="language-selection">
					<a class="language-link pt selected" href={base + '/'}>PT 🇧🇷</a>
					<a class="language-link en" href={base + '/en'}>EN 🇺🇸</a>
				</div>
			</div>
			<div>
				{#each pages as p}
					<a
						href={base + p.href}
						class:active-link={isCurrentLink(p.href)}
						on:click={toggleMenuButton}>{p.text}</a
					>
				{/each}
			</div>
		</div>
	{/if}
	<button
		id="menu-button"
		class={showMenu ? 'menu-displayed' : ''}
		type="button"
		on:click={toggleMenuButton}
	>
		{#if showMenu}
			<img src={MenuButtonActive} alt="Menu" />
		{:else}
			<img src={MenuButtonDefault} alt="Menu" />
		{/if}
	</button>
</nav>

<style>
	nav {
		position: fixed;
		right: 0;
		top: 0;
		z-index: 996;
	}

	button {
		align-items: center;
		background-color: var(--color-red-normal);
		box-shadow: 5px 5px 5px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 999;
	}

	button.menu-displayed {
		background-color: var(--color-yellow-normal);
	}

	button,
	button *,
	#navigation-menu a {
		cursor: pointer;
	}

	#menu-screen-overlay {
		background-color: rgb(0 0 0 / 0.5);
		height: 100svh;
		position: absolute;
		right: 0;
		top: 0;
		width: 100vw;
		z-index: 997;
	}

	#navigation-menu {
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		height: 100svh;
		justify-content: space-between;
		position: absolute;
		right: 0;
		top: 0;
		width: 100vw;
		z-index: 998;
	}

	#navigation-menu h2 {
		color: var(--color-yellow-normal);
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
	}

	#navigation-menu a {
		border-top: 2px dotted var(--color-gray-normal);
		color: var(--color-gray-normal);
		display: block;
		font-family: 'Fraunces', serif;
		font-weight: 500;
		line-height: 150%;
		text-decoration: none;
	}

	#navigation-menu a:hover {
		color: var(--color-white);
		font-weight: 700;
		opacity: 1;
	}

	#navigation-menu a:first-child {
		border: none;
	}

	#navigation-menu a:last-child {
		padding-bottom: 0;
	}

	#navigation-menu a.active-link {
		color: var(--color-white);
		font-weight: 700;
		opacity: 1;
	}

	#language-selection {
		display: flex;
		justify-content: flex-start;
		gap: 0.5rem;

		color: var(--color-white);
		font-size: 1rem;
		padding: 0rem;
		padding-top: 1rem;
	}

	#language-selection a.language-link {
		border-radius: 1.5rem;
		padding: 0.5rem 1rem;
		background: var(--color-black);

		color: var(--color-white);
		border: 0px;
		font-size: 0.8rem;
		font-weight: 300;
		font-style: normal;
		font-family: 'Roboto', sans-serif;
	}

	#language-selection a.language-link:hover {
		background: var(--color-gray-darker);
	}

	#language-selection a.language-link.selected {
		background: var(--color-white);
		color: var(--color-black);
	}

	@media only screen and (max-width: 768px) {
		button {
			border-radius: 100%;
			right: 1.5rem;
			top: 1.5rem;
		}

		button,
		button img {
			height: 2.25rem;
			width: 2.25rem;
		}

		#navigation-menu {
			padding: 1.25rem 1.5rem 2.5rem 1.5rem;
		}

		#navigation-menu h2 {
			font-size: 1.875rem;
		}

		#navigation-menu a {
			font-size: 1.5rem;
			padding: 1rem 0.5rem;
		}
	}

	@media only screen and (min-width: 768px) {
		button {
			border-radius: 100%;
			right: 2.5rem;
			top: 3rem;
		}

		button,
		button img {
			height: 2.75rem;
			width: 2.75rem;
		}

		#navigation-menu {
			padding: 2.5rem 2.5rem 2.5rem 2.5rem;
		}

		#navigation-menu h2 {
			font-size: 2.5rem;
		}

		#navigation-menu a {
			font-size: 1.75rem;
			padding: 1.25rem 1.25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		button {
			border-radius: 25%;
			right: 3rem;
			top: 2.5rem;
		}

		button,
		button img {
			height: 2.75rem;
			width: 2.75rem;
		}

		#navigation-menu {
			padding: 1.5rem 3rem 3rem 3rem;
		}

		#navigation-menu h2 {
			font-size: 3rem;
		}

		#navigation-menu a {
			font-size: 1.5rem;
			padding: 1.5rem 1.5rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		button {
			border-radius: 25%;
			right: 3rem;
			top: 2.5rem;
		}

		button,
		button img {
			height: 2.75rem;
			width: 2.75rem;
		}

		#navigation-menu {
			padding: 1.5rem 3rem 3rem 3rem;
		}

		#navigation-menu h2 {
			font-size: 3rem;
		}

		#navigation-menu a {
			font-size: 1.5rem;
			padding: 1.5rem 1.5rem;
		}
	}
</style>
