<script>
	import FakeChat from '$lib/components/en/FakeChat.svelte';
	import CoverTitle from '$lib/assets/images/en/c2-cover-title.png';
</script>

<section id="league-cover-section">
	<img src={CoverTitle} alt="A great league, connected by the love of games." />
	<div id="fake-chat-wrapper">
		<FakeChat />
	</div>
</section>

<style>
	#league-cover-section {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		background-size: cover;
		display: flex;
		justify-content: flex-end;
		height: 100svh;
		max-height: 100vh;
		overflow-x: clip;
	}

	img {
		height: auto;
	}

	#fake-chat-wrapper {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		#league-cover-section {
			flex-direction: column;
		}

		img {
			margin: auto auto;
			max-width: 75%;
			width: 75%;
		}

		#fake-chat-wrapper {
			height: 50svh;
			max-height: 50vh;
			width: 100%;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-cover-section {
			flex-direction: column;
		}

		img {
			margin: auto auto;
			max-width: 60%;
			width: 60%;
		}

		#fake-chat-wrapper {
			height: 50svh;
			max-height: 50vh;
			width: 100%;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-cover-section {
			flex-direction: row;
		}

		img {
			margin: auto auto;
			max-width: 30rem;
			width: 50%;
		}

		#fake-chat-wrapper {
			height: 100svh;
			max-height: 100vh;
			width: 50%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-cover-section {
			flex-direction: row;
		}

		img {
			margin: auto auto;
			max-width: 30rem;
			width: 50%;
		}

		#fake-chat-wrapper {
			height: 100svh;
			max-height: 100vh;
			width: 50%;
		}
	}
</style>
