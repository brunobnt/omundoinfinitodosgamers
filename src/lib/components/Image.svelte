<script>
	export let src;
	export let alt = '';
</script>

{#if src}
	<img {src} {alt} />
{/if}

<style>
	img {
		height: auto;
		margin-left: auto;
		margin-right: auto;
	}

	@media only screen and (max-width: 768px) {
		img {
			width: 85vw;
		}
	}

	@media only screen and (min-width: 768px) {
		img {
			width: 52.5vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		img {
			width: 36vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		img {
			width: 30rem;
		}
	}
</style>
