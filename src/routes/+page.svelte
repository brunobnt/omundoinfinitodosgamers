<script>
	import FloatingMenu from '$lib/components/FloatingMenu.svelte';
	import ContentItems from '$lib/components/ContentItems.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CoverSection from '$lib/content/home/Cover.svelte';
	import IntroSection from '$lib/content/home/Intro.svelte';
	import MethodSection from '$lib/content/home/Method.svelte';
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
