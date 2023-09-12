<script>
	import PortalBottom from '$lib/assets/images/portal-bottom.png';
	import PortalTop from '$lib/assets/images/portal-top.png';
</script>

<div id="portal-component-wrapper">
	<div class="portals-wrapper">
		<img src={PortalTop} class="portal-top" alt="" />
		<img src={PortalBottom} class="portal-bottom" alt="" />
		<div class="portal-sparks">hi</div>
	</div>
	<div class="portals-wrapper portal-overlay">
		<div class="portal-sparks" />
		<img src={PortalTop} class="portal-top portal-overlay" alt="" />
		<img src={PortalBottom} class="portal-bottom portal-overlay" alt="" />
	</div>

	<div id="portal-scroll-items">
		<slot />
	</div>
</div>

<style>
	@keyframes portal-animation {
		0%,
		100% {
			transform: scale(1);
			animation-timing-function: ease-in-out;
		}
		50% {
			transform: scale(1.03);
			animation-timing-function: ease-in-out;
		}
		70% {
			transform: scale(1.03);
			animation-timing-function: ease-in-out;
		}
	}

	@keyframes saturate-animation {
		0%,
		100% {
			filter: saturate(1.1);
			animation-timing-function: ease-in-out;
		}
		50% {
			filter: saturate(0.9);
			animation-timing-function: ease-in-out;
		}
	}

	@keyframes portal-sparks {
		0% {
			background-position: 0px 0%;
		}
		100% {
			background-position: 0px -1000%;
		}
	}

	@keyframes upside-down {
		0%,
		100% {
			transform: rotate(180deg);
		}
	}

	#portal-component-wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	#portal-scroll-items {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 1;
	}

	.portals-wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: sticky;
		top: 2rem;
		z-index: 0;
	}

	.portals-wrapper.portal-overlay {
		z-index: 3;
	}

	.portal-bottom,
	.portal-top {
		max-width: unset;
		position: absolute;
	}

	.portal-bottom {
		animation: saturate-animation 250ms ease-in-out infinite, upside-down 3s linear infinite;
		bottom: 0;
		transform: rotate(180deg);
	}

	.portal-top {
		animation: saturate-animation 300ms ease-in-out infinite;
		top: 2rem;
	}

	.portal-top.portal-overlay,
	.portal-bottom.portal-overlay {
		background: radial-gradient(at bottom, transparent 40%, var(--color-black-dark) 44%);
		mask-image: radial-gradient(at bottom, transparent 40%, var(--color-black-dark) 44%);
	}

	.portals-wrapper .portal-sparks {
		animation: portal-sparks 120s linear infinite, saturate-animation 1000ms ease-in-out infinite;
		background-image: url('$lib/assets/images/portal-sparks-1.png');
		background-repeat: repeat-y;
		background-position: top left;
		background-size: contain;
		opacity: 0.7;
		position: absolute;
		top: 2rem;
	}

	.portals-wrapper.portal-overlay .portal-sparks {
		animation: portal-sparks 100s linear infinite;
		background-image: url('$lib/assets/images/portal-sparks-2.png');
		opacity: 0.9;
	}

	@media only screen and (max-width: 768px) {
		#portal-component-wrapper {
			margin: 0 -7.5vw 50rem -7.5vw;
			width: calc(100% - 15vw);
		}

		#portal-scroll-items {
			min-height: 50rem;
			padding: 8rem 0;
		}

		.portals-wrapper {
			height: 50rem;
			margin-bottom: -50rem;
		}

		.portal-bottom,
		.portal-top {
			height: calc(60rem * 0.2);
			width: 60rem;
		}

		.portals-wrapper .portal-sparks {
			height: 100%;
			width: calc(60rem * 0.25);
		}
	}

	@media only screen and (min-width: 768px) {
		#portal-component-wrapper {
			margin: 0 -15vw 70rem -15vw;
			width: calc(100% - 30vw);
		}

		#portal-scroll-items {
			min-height: 70rem;
			padding: 10rem 0;
		}

		.portals-wrapper {
			height: 70rem;
			margin-bottom: -70rem;
		}

		.portal-bottom,
		.portal-top {
			height: calc(90rem * 0.2);
			width: 90rem;
		}

		.portals-wrapper .portal-sparks {
			height: 100%;
			width: calc(90rem * 0.25);
		}
	}

	@media only screen and (min-width: 1280px) {
		#portal-component-wrapper {
			margin: 0 -20vw 65rem -20vw;
			width: calc(100% - 30vw);
		}

		#portal-scroll-items {
			min-height: 65rem;
			padding: 5rem 0;
		}

		.portals-wrapper {
			height: 65rem;
			margin-bottom: -65rem;
		}

		.portal-bottom,
		.portal-top {
			height: calc(100rem * 0.2);
			width: 100rem;
		}

		.portals-wrapper .portal-sparks {
			height: 100%;
			width: calc(100rem * 0.25);
		}
	}

	@media only screen and (min-width: 1536px) {
		#portal-component-wrapper {
			margin: 0 0 70rem 0;
			width: 50rem;
		}

		#portal-scroll-items {
			min-height: 70rem;
			padding: 9rem 0;
		}

		.portals-wrapper {
			height: 70rem;
			margin-bottom: -70rem;
		}

		.portal-bottom,
		.portal-top {
			height: calc(120rem * 0.2);
			width: 120rem;
		}

		.portals-wrapper .portal-sparks {
			height: 100%;
			width: calc(120rem * 0.25);
		}
	}
</style>
