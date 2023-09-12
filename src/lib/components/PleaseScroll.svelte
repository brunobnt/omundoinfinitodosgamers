<script>
	import { fade } from 'svelte/transition';

	let show = true;
	let scrollY = 0;

	$: show = scrollY < 25;

	const scrollDown = () => {
		const screenHeight = document.documentElement.clientHeight;
		window.scrollBy(0, screenHeight);
	};
</script>

<svelte:window bind:scrollY />

{#if show}
	<div id="component-wrapper" transition:fade={{ duration: 200 }}>
		<button on:click|stopPropagation={() => scrollDown()}>
			<svg id="please-scroll" viewBox="0 0 32 32" fill="none">
				<path d="M2 16L16 30L30 16" stroke="white" stroke-width="4" />
				<path d="M2 2L16 16L30 2" stroke="white" stroke-width="4" />
			</svg>
		</button>
	</div>
{/if}

<style>
	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	#component-wrapper {
		align-items: center;
		animation: bounce 1s infinite;
		bottom: 1vh;
		display: flex;
		height: 2rem;
		justify-content: center;
		left: 0;
		opacity: 0.7;
		position: fixed;
		width: 100vw;
		z-index: 900;
	}
	#component-wrapper button,
	#component-wrapper button * {
		cursor: pointer;
	}

	#component-wrapper svg {
		height: 2rem;
		width: 2rem;
	}
</style>
