<script>
	import { base } from '$app/paths';

	const chapters = [
		{ index: 1, href: '/en/choose-your-player', text: 'Choose your player' },
		{ index: 2, href: '/en/the-great-league', text: 'The great league' },
		{ index: 3, href: '/en/life-vs-fantasy', text: 'Life vs Fantasy' },
		{ index: 4, href: '/en/the-toxic-side', text: 'The toxic side' },
		{ index: 5, href: '/en/exploring-the-map', text: 'Exploring the map' },
		{ index: 6, href: '/en/insights-for-brands', text: 'Insights for brands' },
		{ index: 7, href: '/en/press-start', text: 'Your brand in the game' }
	];

	let hoveredOption = null;

	const hoverIndex = (index) => (hoveredOption = index);
</script>

<nav>
	<div id="nav-container">
		{#each chapters as c}
			<a
				class={`${hoveredOption === c.index ? 'highlighted-option' : ''} 
					${hoveredOption && hoveredOption !== c.index ? 'unhighlighted-option' : ''}`}
				href={base + c.href}
				on:mouseover={() => hoverIndex(c.index)}
				on:mouseleave={() => hoverIndex(null)}
				on:focus={() => hoverIndex(c.index)}
				on:blur={() => hoverIndex(null)}
			>
				{#if c.index <= 5}
					<div class="chapter-index">Chapter {c.index}</div>
				{/if}
				<div class="chapter-title">
					{#if c.index <= 5}
						<svg>
							<path
								d="M4.63636 0L0 4.63636L7.72727 12.3636L0 20.0909L4.63636 24.7273L17 12.3636L4.63636 0Z"
							/>
						</svg>
					{/if}
					<span>{c.text}</span>
				</div>
			</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		background-color: var(--color-red-light);
		display: flex;
		justify-content: center;
	}

	#nav-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
	}

	a {
		padding: 0.75rem 1.5vw 0.375rem 1.5vw;
		text-decoration: none;
		transition: background-color 500ms;
	}

	a.highlighted-option {
		background-color: var(--color-white) !important;
	}

	a,
	a * {
		cursor: pointer;
	}

	/* chapter index */
	.chapter-index {
		color: var(--color-black);
		font-family: 'Fraunces', serif;
		font-weight: 400;
		transition: color 200ms;
	}

	:visited .chapter-index {
		color: var(--color-gray-normal);
	}

	.highlighted-option .chapter-index {
		color: var(--color-red-dark);
		font-weight: 700;
	}

	.chapter-title {
		align-items: center;
		display: flex;
		transition: color 200ms, padding-left 300ms;
	}

	.chapter-title span {
		color: var(--color-black);
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		transition: color 200ms;
	}

	:visited .chapter-title span {
		color: var(--color-gray-normal);
	}

	.highlighted-option .chapter-title span {
		color: var(--color-red-normal);
	}

	a:nth-last-child(1) .chapter-title,
	a:nth-last-child(2) .chapter-title {
		border-top: 2px dashed var(--color-black);
		transition: color 200ms;
	}

	a:nth-last-child(1):visited .chapter-title,
	a:nth-last-child(2):visited .chapter-title {
		border-top: 2px dashed var(--color-gray-normal);
	}

	a:nth-last-child(1).highlighted-option .chapter-title,
	a:nth-last-child(2).highlighted-option .chapter-title {
		border-top: 2px dashed var(--color-red-normal);
	}

	svg,
	svg path {
		transition: color 200ms;
	}

	:visited svg path {
		fill: var(--color-gray-normal);
	}

	.highlighted-option svg path {
		fill: var(--color-red-dark);
	}

	@media only screen and (max-width: 768px) {
		nav {
			padding: 0;
		}

		a {
			padding: 0.75rem 2.5vw 0.75rem 2.5vw;
		}

		a:nth-last-child(1) .chapter-title,
		a:nth-last-child(2) .chapter-title {
			padding-top: 1rem;
		}

		.chapter-index {
			font-size: 0.875rem;
			margin-bottom: -0.125rem;
		}

		.chapter-title span {
			font-size: 3rem;
			padding-left: 0.5rem;
		}

		.highlighted-option .chapter-title {
			padding-left: 0.5rem;
		}

		svg,
		svg path {
			height: 1.5rem;
			width: 1rem;
		}

		.highlighted-option svg {
			margin-right: 0.5rem;
		}
	}

	@media only screen and (min-width: 768px) {
		nav {
			padding: 0;
		}

		a {
			padding: 0.75rem 2.5vw 0.75rem 2.5vw;
		}

		a:nth-last-child(1) .chapter-title,
		a:nth-last-child(2) .chapter-title {
			padding-top: 1.25rem;
		}

		.chapter-index {
			font-size: 1rem;
			margin-bottom: -0.125rem;
		}

		.chapter-title span {
			font-size: 3.5rem;
			padding-left: 0.75rem;
		}

		.highlighted-option .chapter-title {
			padding-left: 0.5rem;
		}

		svg,
		svg path {
			height: 1.5rem;
			width: 1rem;
		}

		.highlighted-option svg {
			margin-right: 0.75rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		nav {
			padding: 0 15vw;
		}

		a {
			padding: 0.75rem 2.5vw 0.75rem 2.5vw;
		}

		a:nth-last-child(1) .chapter-title,
		a:nth-last-child(2) .chapter-title {
			padding-top: 1.25rem;
		}

		.chapter-index {
			font-size: 1rem;
			margin-bottom: -0.125rem;
		}

		.chapter-title span {
			font-size: 3.5rem;
			padding-left: 0.75rem;
		}

		.highlighted-option .chapter-title {
			padding-left: 0.5rem;
		}

		svg,
		svg path {
			height: 1.5rem;
			width: 1rem;
		}

		.highlighted-option svg {
			margin-right: 0.75rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		nav {
			padding: 0;
			padding-left: calc((100% - 70rem) / 2);
			padding-right: calc((100% - 70rem) / 2);
		}

		a {
			padding: 0.75rem 2.5vw 0.75rem 2.5vw;
		}

		a:nth-last-child(1) .chapter-title,
		a:nth-last-child(2) .chapter-title {
			padding-top: 1.25rem;
		}

		.chapter-index {
			font-size: 1rem;
			margin-bottom: -0.125rem;
		}

		.chapter-title span {
			font-size: 3.5rem;
			padding-left: 0.75rem;
		}

		.highlighted-option .chapter-title {
			padding-left: 0.5rem;
		}

		svg,
		svg path {
			height: 1.5rem;
			width: 1rem;
		}

		.highlighted-option svg {
			margin-right: 0.75rem;
		}
	}
</style>
