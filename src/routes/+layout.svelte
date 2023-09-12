<script>
	import '../app.css';
	import '../text.css';
	import '../fonts.css';

	import PleaseScroll from '$lib/components/PleaseScroll.svelte';
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-13PWJ2LW4Q"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-13PWJ2LW4Q');
	</script>
</svelte:head>

<PleaseScroll />
<slot />
