<script>
	import FloatingMenu from '$lib/components/FloatingMenu.svelte';
	import ContentItems from '$lib/components/ContentItems.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CoverSection from '$lib/content/chapter-3/Cover.svelte';
	import IntroSection from '$lib/content/chapter-3/Intro.svelte';
	import RealitiesSection from '$lib/content/chapter-3/Realities.svelte';
	import TimeSection from '$lib/content/chapter-3/Time.svelte';
	import ContentSection from '$lib/content/chapter-3/Content.svelte';
	import ConclusionSection from '$lib/content/chapter-3/Conclusion.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<RealitiesSection />
<TimeSection />
<ContentSection />
<ConclusionSection />
<ContentItems />
<Footer showEasterEgg={true} />

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
