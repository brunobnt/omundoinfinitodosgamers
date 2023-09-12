<script>
	import FloatingMenu from '$lib/components/FloatingMenu.svelte';
	import ContentItems from '$lib/components/ContentItems.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CoverSection from '$lib/content/chapter-1/Cover.svelte';
	import IntroSection from '$lib/content/chapter-1/Intro.svelte';
	import DetailsSection from '$lib/content/chapter-1/Details.svelte';
	import ComparisonSection from '$lib/content/chapter-1/Comparison.svelte';
	import GamerImageSection from '$lib/content/chapter-1/GamerImage.svelte';
	import ChangesSection from '$lib/content/chapter-1/Changes.svelte';
	import ConclusionSection from '$lib/content/chapter-1/Conclusion.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<DetailsSection />
<ComparisonSection />
<ChangesSection />
<GamerImageSection />
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
