<script>
	import TalkLiveLogo from '$lib/assets/images/talk-live-pt.png';
	import SponsorsBrands from '$lib/assets/images/sponsors-brands-pt.png';

	export let showEasterEgg = true;
</script>

<footer>
	<div id="footer-content-wrapper">
		<div id="footer-content-lines-wrapper">
			<div id="footer-content-line-1">
				<img src={TalkLiveLogo} alt="" />
				<h2>O Mundo Infinito dos Gamers</h2>
			</div>
			<div id="footer-content-line-2">
				<img src={SponsorsBrands} alt="" />
			</div>
		</div>
		<div id="footer-content-line-3">
			design por <a href="https://odd.studio/" target="blank">odd.studio</a>
		</div>
	</div>
</footer>
{#if showEasterEgg}
	<div id="footer-easter-egg" />
{/if}

<style>
	footer {
		align-items: center;
		background-color: black;
		display: flex;
		justify-content: center;
	}

	#footer-content-wrapper {
		width: 100%;
	}

	#footer-content-line-1 {
		display: flex;
		align-items: center;
	}

	#footer-content-line-1 h2 {
		color: var(--color-yellow-normal);
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
	}

	#footer-content-line-2 {
		border-top: 2px dashed var(--color-gray-normal);
	}

	#footer-content-line-2 img {
		width: 100%;
	}

	#footer-content-line-3 {
		border-top: 2px dashed var(--color-gray-normal);
		color: var(--color-white);
		font-family: 'Fraunces', serif;
		font-style: italic;
		font-weight: 300;
		text-align: center;
	}

	#footer-content-line-3 a {
		color: var(--color-white);
		cursor: pointer;
		text-decoration: underline;
	}

	#footer-easter-egg {
		background-color: black;
		background-image: url('$lib/assets/backgrounds/background-mario.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		footer {
			padding: 2.5rem 1rem 1rem 1rem;
		}

		#footer-content-wrapper {
			max-width: 25rem;
		}

		#footer-content-line-1 {
			gap: 1.5rem;
			padding: 0 1rem 2rem 0;
		}

		#footer-content-line-1 h2 {
			font-size: 2.125rem;
			letter-spacing: 0.15rem;
		}

		#footer-content-line-1 img {
			max-width: 5rem;
			width: 30vw;
		}

		#footer-content-line-2 {
			padding: 2rem 0;
		}

		#footer-content-line-2 img {
			width: 100%;
		}

		#footer-content-line-3 {
			font-size: 1.125rem;
			line-height: 120%;
			padding: 1.5rem 0;
		}

		#footer-easter-egg {
			height: 50vw;
		}
	}

	@media only screen and (min-width: 768px) {
		footer {
			padding: 2.5rem 1rem 1rem 1rem;
		}

		#footer-content-wrapper {
			max-width: 37.5rem;
		}

		#footer-content-line-1 {
			gap: 1.5rem;
			padding: 0 0 2rem 0;
		}

		#footer-content-line-1 h2 {
			font-size: 3rem;
			letter-spacing: 0.15rem;
		}

		#footer-content-line-1 img {
			max-width: 5rem;
			width: 30vw;
		}

		#footer-content-line-2 {
			padding: 2rem 0;
		}

		#footer-content-line-2 img {
			width: 100%;
		}

		#footer-content-line-3 {
			font-size: 1.375rem;
			line-height: 120%;
			padding: 1.5rem 0;
		}

		#footer-easter-egg {
			height: 30vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		footer {
			padding: 3rem 1rem 0.5rem 1rem;
		}

		#footer-content-wrapper {
			max-width: unset;
			width: 60rem;
		}

		#footer-content-lines-wrapper {
			align-content: center;
			display: flex;
			justify-content: space-between;
			gap: 2.5rem;
		}

		#footer-content-line-1 {
			gap: 1.5rem;
			padding: 0 0 2rem 0;
		}

		#footer-content-line-1 h2 {
			font-size: 2.5rem;
			letter-spacing: 0.15rem;
		}

		#footer-content-line-1 img {
			max-width: unset;
			width: 8rem;
		}

		#footer-content-line-2 {
			align-items: center;
			border: none;
			display: flex;
			justify-content: center;
			padding: 1.5rem 0;
		}

		#footer-content-line-2 img {
			margin-bottom: 2.5rem;
			width: 60rem;
		}

		#footer-content-line-3 {
			font-size: 1.25rem;
			line-height: 120%;
			padding: 1.5rem 0;
		}
	}

	@media only screen and (min-width: 1536px) {
		#footer-easter-egg {
			height: 20vw;
		}
	}
</style>
