<script>
	import { fade, fly } from 'svelte/transition';

	import Cover0 from '$lib/content/home/covers/Cover0.svelte';
	import Cover1 from '$lib/content/home/covers/Cover1.svelte';
	import Cover2 from '$lib/content/home/covers/Cover2.svelte';
	import Cover3 from '$lib/content/home/covers/Cover3.svelte';
	import Cover4 from '$lib/content/home/covers/Cover4.svelte';
	import Cover5 from '$lib/content/home/covers/Cover5.svelte';

	let covers = [0, 1, 2, 3, 4, 5];
	let selectedCover = covers[0];
	const coverTransition = 500;

	covers.sort(() => Math.random() - 0.5);

	const nextCover = () => {
		let index = covers.indexOf(selectedCover);
		if (index === covers.length - 1) index = 0;
		else index++;
		selectedCover = covers[index];
		clearTimeout(coverInterval);
		coverInterval = setTimeout(() => {
			nextCover();
		}, 10000);
	};

	let coverInterval = setTimeout(() => {
		nextCover();
	}, 10000);

	const scrollToIntroSection = () => {
		const element = document.getElementById('home-intro-section');
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<section id="home-cover-section" class=" relative">
	{#key selectedCover}
		<div
			class="cover-wrapper"
			in:fly={{ x: 200, duration: coverTransition }}
			out:fade={{ duration: 1.5 * coverTransition }}
		>
			{#if selectedCover === 5}
				<Cover5 on:click={nextCover} on:start={scrollToIntroSection} />
			{:else if selectedCover === 4}
				<Cover4 on:click={nextCover} on:start={scrollToIntroSection} />
			{:else if selectedCover === 3}
				<Cover3 on:click={nextCover} on:start={scrollToIntroSection} />
			{:else if selectedCover === 2}
				<Cover2 on:click={nextCover} on:start={scrollToIntroSection} />
			{:else if selectedCover === 1}
				<Cover1 on:click={nextCover} on:start={scrollToIntroSection} />
			{:else}
				<Cover0 on:click={nextCover} on:start={scrollToIntroSection} />
			{/if}
		</div>
	{/key}
</section>

<style>
	#home-cover-section {
		height: 100svh;
		min-height: 800px;
		overflow-x: clip;
		width: 100%;
	}

	.cover-wrapper {
		height: 100svh;
		position: absolute;
		width: 100vw;
	}
</style>
