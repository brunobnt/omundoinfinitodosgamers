<script>
	import FloatingMenu from '$lib/components/en/FloatingMenu.svelte';
	import ContentItems from '$lib/components/en/ContentItems.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import CoverSection from '$lib/content/en/press-start/Cover.svelte';
	import IntroSection from '$lib/content/en/press-start/Intro.svelte';
	import PlayersSection from '$lib/content/en/press-start/Players.svelte';
	import LevelsSection from '$lib/content/en/press-start/Levels.svelte';
	import ContactSection from '$lib/content/en/press-start/Contact.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<PlayersSection />
<LevelsSection />
<ContactSection />
<ContentItems />
<Footer showEasterEgg={false} />

<style>
	@media only screen and (max-width: 768px) {
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 1280px) {
	}

	@media only screen and (min-width: 1536px) {
	}
</style>
