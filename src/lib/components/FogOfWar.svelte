<script>
	export let pos = { x: 0, y: 0 };

	const initOpacity = 0.9;
	const initRadius = 0;
	let clientHeight;
	let clientWidth;

	let opacity = initOpacity;
	let radius = initRadius;
	let gradient = 200;
	let maxScroll = 0;
	let scrollY = 0;

	$: minSide = Math.min(clientWidth, clientHeight);
	$: maxScroll = Math.max(scrollY, maxScroll);
	$: finalRadius = 0.1 * minSide;

	setInterval(() => {
		if (radius < finalRadius) radius += 1;
		gradient += 0.5;
	}, 10);
</script>

<svelte:window bind:scrollY bind:innerWidth={clientWidth} bind:innerHeight={clientHeight} />

<div
	id="fog"
	bind:clientWidth
	bind:clientHeight
	style="
        mask-image:
            linear-gradient(
            transparent {maxScroll - 200}px,
            black {maxScroll}px),
            radial-gradient(
            circle at {pos.x}px {pos.y}px ,
            transparent {radius}px, 
            black {radius + gradient}px);
        -webkit-mask-image:
            linear-gradient(
            transparent {maxScroll - gradient}px,
            black {maxScroll}px),
            radial-gradient(
            circle at {pos.x}px {pos.y}px ,
            transparent {radius}px, 
            black {radius + gradient}px);
        opacity: {opacity};
        "
/>

<style>
	#fog {
		background-blend-mode: color;
		background-color: var(--color-black);
		height: 100%;
		left: 0;
		mask-composite: intersect;
		-webkit-mask-composite: source-in;
		pointer-events: none;
		position: absolute;
		top: 0;
		transition: all;
		width: 100%;
	}
</style>
