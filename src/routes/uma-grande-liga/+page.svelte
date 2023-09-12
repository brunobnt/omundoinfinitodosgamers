<script>
	import FloatingMenu from '$lib/components/FloatingMenu.svelte';
	import ContentItems from '$lib/components/ContentItems.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CoverSection from '$lib/content/chapter-2/Cover.svelte';
	import IntroSection from '$lib/content/chapter-2/Intro.svelte';
	import AffectionSection from '$lib/content/chapter-2/Affection.svelte';
	import LanguageSection from '$lib/content/chapter-2/Language.svelte';
	import SocialSection from '$lib/content/chapter-2/Social.svelte';
	import CommunitySection from '$lib/content/chapter-2/Community.svelte';
</script>

<FloatingMenu />
<CoverSection />
<IntroSection />
<AffectionSection />
<LanguageSection />
<SocialSection />
<CommunitySection />
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
