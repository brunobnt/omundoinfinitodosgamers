<script>
	import FloatingMenu from '$lib/components/en/FloatingMenu.svelte';
	import ContentItems from '$lib/components/en/ContentItems.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import Character from '$lib/components/Character.svelte';
	import FogOfWar from '$lib/components/FogOfWar.svelte';
	import CoverSection from '$lib/content/en/chapter-5/Cover.svelte';
	import IntroSection from '$lib/content/en/chapter-5/Intro.svelte';
	import EsportsSection from '$lib/content/en/chapter-5/Esports.svelte';
	import ContentSection from '$lib/content/en/chapter-5/Content.svelte';
	import MoneySection from '$lib/content/en/chapter-5/Money.svelte';
	import SocialSection from '$lib/content/en/chapter-5/Social.svelte';
	import ConclusionSection from '$lib/content/en/chapter-5/Conclusion.svelte';

	let clientHeight;
	let innerHeight;
	let scrollY;

	let characterTarget = { x: 100, y: 500 };
	let characterPosition = { x: 100, y: 500 };

	const moveCharacter = (e) => {
		characterTarget.x = e.pageX;
		characterTarget.y = e.pageY;
	};

	$: {
		if (characterTarget.y < scrollY) {
			characterTarget.y = scrollY + innerHeight / 2;
		} else if (characterTarget.y > scrollY + innerHeight) {
			characterTarget.y = scrollY + innerHeight / 2;
		}
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div
	class="chapter"
	on:mousemove={moveCharacter}
	on:touchmove={moveCharacter}
	aria-hidden="true"
	bind:clientHeight
>
	<FloatingMenu />
	<CoverSection />
	<IntroSection />
	<EsportsSection />
	<ContentSection />
	<MoneySection />
	<SocialSection />
	<ConclusionSection />
	<ContentItems />
	<Footer showEasterEgg={false} />
	<div id="character-wrapper">
		<Character bind:target={characterTarget} bind:pos={characterPosition} />
	</div>
	<div id="fog-wrapper" style="height: {clientHeight};">
		<FogOfWar bind:pos={characterPosition} />
	</div>
</div>

<style>
	.chapter {
		max-width: 100%;
		overflow-x: clip;
	}

	#character-wrapper {
		left: 0;
		position: absolute;
		top: 0;
	}

	#fog-wrapper {
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 1280px) {
	}

	@media only screen and (min-width: 1536px) {
	}
</style>
