<script>
	import FloatingMenu from '$lib/components/en/FloatingMenu.svelte';
	import ContentItems from '$lib/components/en/ContentItems.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import CoverSection from '$lib/content/en/home/Cover.svelte';
	import IntroSection from '$lib/content/en/home/Intro.svelte';
	import MethodSection from '$lib/content/en/home/Method.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<ContentItems />
<MethodSection />
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
