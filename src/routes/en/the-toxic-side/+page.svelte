<script>
	import FloatingMenu from '$lib/components/en/FloatingMenu.svelte';
	import ContentItems from '$lib/components/en/ContentItems.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import CoverSection from '$lib/content/en/chapter-4/Cover.svelte';
	import IntroSection from '$lib/content/en/chapter-4/Intro.svelte';
	import EnvironmentSection from '$lib/content/en/chapter-4/Environment.svelte';
	import DiscriminationSection from '$lib/content/en/chapter-4/Discrimination.svelte';
	import SocietySection from '$lib/content/en/chapter-4/Society.svelte';
	import PeopleSection from '$lib/content/en/chapter-4/People.svelte';
	import ConclusionSection from '$lib/content/en/chapter-4/Conclusion.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<EnvironmentSection />
<DiscriminationSection />
<SocietySection />
<PeopleSection />
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
