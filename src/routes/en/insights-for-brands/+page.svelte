<script>
	import FloatingMenu from '$lib/components/en/FloatingMenu.svelte';
	import ContentItems from '$lib/components/en/ContentItems.svelte';
	import Footer from '$lib/components/en/Footer.svelte';
	import CoverSection from '$lib/content/en/insights/Cover.svelte';
	import IntroSection from '$lib/content/en/insights/Intro.svelte';
	import NavigationSection from '$lib/content/en/insights/Navigation.svelte';
	import LegitimacySection from '$lib/content/en/insights/Legitimacy.svelte';
	import DiversitySection from '$lib/content/en/insights/Diversity.svelte';
	import EnvironmentSection from '$lib/content/en/insights/Environment.svelte';
	import ContactSection from '$lib/content/en/insights/Contact.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<NavigationSection />
<LegitimacySection />
<DiversitySection />
<EnvironmentSection />
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
