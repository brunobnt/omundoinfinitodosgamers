<script>
	export let checked = false;
</script>

<button on:click={() => (checked = !checked)} on:dblclick={() => (checked = !checked)}>
	<svg viewBox="0 0 94 117" fill="none">
		<rect width="94" height="117" rx="10" fill="black" fill-opacity="0" />
		<g id="base">
			<path
				d="M17.5996 100.765C17.5996 97.2854 20.4202 94.4648 23.8996 94.4648H86.8996C90.379 94.4648 93.1996 97.2855 93.1996 100.765V109.765C93.1996 113.741 89.9761 116.965 85.9996 116.965H24.7996C20.8231 116.965 17.5996 113.741 17.5996 109.765V100.765Z"
				fill="white"
			/>
			<rect x="18.4995" y="96.2646" width="73.8" height="11.7" rx="5.85" fill="black" />
			<ellipse cx="55.3999" cy="101.216" rx="10.8" ry="4.95" fill="black" />
		</g>
		<rect
			id="joystick-stick"
			x="40"
			y="40"
			width="16"
			height="60"
			fill="#D9D9D9"
			class={checked ? 'selected' : ''}
		/>
		<rect x="10" y="96.2646" width="55" height="10" fill="url(#paint1_linear_798_3784)" />
		<g id="joystick-ball" class={checked ? 'selected' : ''}>
			<circle
				cx="37"
				cy="38.8932"
				r="31.05"
				transform="rotate(-15 38.5278 38.8932)"
				fill="url(#paint0_radial_798_3784)"
			/>
			<circle cx="45.05" cy="22.916" r="6.75" fill="#FE016A" />
			<circle cx="45.05" cy="22.916" r="6.75" fill="white" fill-opacity="0.4" />
			<g />

			<defs>
				<radialGradient
					id="paint0_radial_798_3784"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(29.0778 26.2932) rotate(52.5394) scale(43.6523)"
				>
					<stop offset="0.651042" stop-color="#FE016A" />
					<stop offset="1" stop-color="#C20051" />
				</radialGradient>
				<linearGradient
					id="paint1_linear_798_3784"
					x1="55.3995"
					y1="96.2646"
					x2="55.3995"
					y2="106.165"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-opacity="0" />
					<stop offset="0.449016" />
				</linearGradient>
			</defs>
		</g>
	</svg>
</button>

<style>
	button {
		width: 6rem;
		-webkit-tap-highlight-color: transparent;
	}
	svg {
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	#base {
		transform: translate(-10px, 0px);
	}

	#joystick-stick {
		transform-origin: 50% 100%;
		transform: rotate(-13deg);
		transition: 0.2s;
	}

	#joystick-stick.selected {
		transform: rotate(10deg);
		transform-origin: 50% 100%;
	}

	#joystick-ball {
		transform: translate(-5px, 0px);
		transition: 0.2s;
	}

	#joystick-ball.selected {
		transform: translate(25px, 0px);
	}
</style>
