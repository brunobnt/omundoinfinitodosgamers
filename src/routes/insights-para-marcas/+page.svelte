<script>
	import FloatingMenu from '$lib/components/FloatingMenu.svelte';
	import ContentItems from '$lib/components/ContentItems.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CoverSection from '$lib/content/insights/Cover.svelte';
	import IntroSection from '$lib/content/insights/Intro.svelte';
	import NavigationSection from '$lib/content/insights/Navigation.svelte';
	import LegitimacySection from '$lib/content/insights/Legitimacy.svelte';
	import DiversitySection from '$lib/content/insights/Diversity.svelte';
	import EnvironmentSection from '$lib/content/insights/Environment.svelte';
	import ContactSection from '$lib/content/insights/Contact.svelte';
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
