<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	export let gender;
	export let color;

	const formatPercentage = (value) => `${Math.round(value * 100)}%`;

	let updateBars = () => {};

	$: if (gender && color) updateBars();
	onMount(() => {
		updateBars = () => {
			if (document) {
				d3.selectAll('#gender-distribution-chart rect').attr('fill', '#FFFFFF').attr('opacity', 1);

				d3.selectAll('#gender-distribution-chart rect')
					.filter((_, i) => i < Math.round((gender.cisMan * 100) / 2))
					.attr('fill', color)
					.attr('opacity', 1);

				d3.selectAll('#gender-distribution-chart rect')
					.filter((_, i) => i >= 50 - Math.round((gender.cisWoman * 100) / 2))
					.attr('fill', color)
					.attr('opacity', 0.65);
			}
		};
	});
</script>

<div>
	<span style:color>{formatPercentage(gender.cisMan)} Cis Man</span>
	<span style:color style:opacity={0.65}>{formatPercentage(gender.cisWoman)} Cis Woman</span>
</div>
<svg id="gender-distribution-chart" viewBox="0 0 280 30" fill="none">
	<rect width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="6" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="12" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="18" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="24" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="30" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="36" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="42" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="48" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="54" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="60" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="66" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="72" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="78" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="84" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="90" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="96" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="102" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="108" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="114" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="120" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="126" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="132" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="138" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="144" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="150" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="156" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="162" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="168" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="174" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="180" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="186" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="192" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="198" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="204" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="210" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="216" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="222" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="228" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="234" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="240" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="246" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="252" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="258" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="264" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="270" width="4" height="30" rx="2" fill="#FFFFFF" />
	<rect x="276" width="4" height="30" rx="2" fill="#FFFFFF" />
</svg>
<span>{formatPercentage(gender.others)} Non-binary, trans, undeclared</span>

<style>
	div,
	span {
		font-family: 'Overpass Mono', monospace;
		font-weight: 600;
		text-transform: uppercase;
	}

	div {
		display: flex;
		justify-content: space-between;
		text-align: center;
		width: 100%;
	}

	span {
		color: var(--color-white);
	}

	@media only screen and (max-width: 768px) {
		span {
			font-size: 0.75rem;
		}

		svg {
			margin: 0.25rem 0;
		}
	}

	@media only screen and (min-width: 768px) {
		span {
			font-size: 0.875rem;
		}

		svg {
			margin: 0.5rem 0;
		}
	}

	@media only screen and (min-width: 1280px) {
	}

	@media only screen and (min-width: 1536px) {
	}
</style>
