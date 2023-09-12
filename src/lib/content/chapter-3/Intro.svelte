<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';

	import GamersMotivationChart from '$lib/assets/images/c3-chart-gamers-motivation.png';
</script>

<section id="paradox-intro-section">
	<div>
		<div id="paradox-intro-subsection-1">
			<Title type="special" color="white">Por que as pessoas jogam?</Title>
			<div>
				<Image src={GamersMotivationChart} alt="" />
				<Legend color="white">
					Entretenimento é a principal motivação que as pessoas têm para jogar. Muitas pessoas
					também sentem o prazer do jogo em si (a competição, estratégia e até dificuldade). Um
					terceiro fator importante está justamente na fantasia.
				</Legend>
			</div>
		</div>
		<div class="display-flex-wrapper">
			<div id="paradox-intro-subsection-2">
				<Title type="special" color="black">Os impactos fora da tela</Title>
				<Paragraph color="black">
					Comparamos o que é vivido fora da tela (longe do momento de jogar, jogabilidade ou
					história) com o que as pessoas entrevistadas vivem no jogo.
				</Paragraph>
				<Paragraph color="black">
					A <span class="weight-700">vivência de outras realidades</span>, o
					<span class="weight-700">tempo dedicado</span>
					a jogar e a
					<span class="weight-700">forma e conteúdo</span> do jogo possuem tanto efeitos positivos quanto
					negativos para as pessoas que jogam.
				</Paragraph>
			</div>
			<div id="paradox-intro-subsection-3">
				<Highlight align="center" color="black">
					Como o jogo impacta a vida e como isso pode ter lados positivos e negativos?
				</Highlight>
				<Highlight align="center" color="black">
					Quais são os pontos de atenção e preocupação?
				</Highlight>
			</div>
		</div>
	</div>
</section>

<style>
	#paradox-intro-subsection-1 {
		align-items: flex-start;
		background-color: var(--color-black);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-intro-subsection-2 {
		align-items: center;
		background-color: var(--color-yellow-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#paradox-intro-subsection-3 {
		align-items: center;
		background-color: var(--color-yellow-normal);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	.display-flex-wrapper {
		display: flex;
	}

	@media only screen and (max-width: 768px) {
		#paradox-intro-subsection-1 {
			flex-direction: column;
			gap: 0;
			padding: 4rem 7.5vw;
		}

		#paradox-intro-subsection-2 {
			padding: 4rem 7.5vw 2rem 7.5vw;
			width: 100%;
		}

		#paradox-intro-subsection-3 {
			border-left: none;
			padding: 0 7.5vw 4rem 7.5vw;
			width: 100%;
		}

		#paradox-intro-subsection-3 :global(.p-highlight) {
			text-align: left;
		}

		.display-flex-wrapper {
			flex-direction: column;
		}
	}

	@media only screen and (min-width: 768px) {
		#paradox-intro-subsection-1 {
			flex-direction: column;
			gap: 0;
			padding: 5rem 15vw;
		}

		#paradox-intro-subsection-2 {
			padding: 5rem 15vw 2.5rem 15vw;
			width: 100%;
		}

		#paradox-intro-subsection-3 {
			border-left: none;
			padding: 0 15vw 5rem 15vw;
			width: 100%;
		}

		#paradox-intro-subsection-3 :global(.p-highlight) {
			text-align: left;
		}

		.display-flex-wrapper {
			flex-direction: column;
		}
	}

	@media only screen and (min-width: 1280px) {
		#paradox-intro-subsection-1 {
			flex-direction: row;
			gap: 2.5rem;
			padding: 5rem 10vw;
		}

		#paradox-intro-subsection-1 > div {
			width: calc(60vw + 5rem);
		}

		#paradox-intro-subsection-1 > :global(h2) {
			font-size: 6.5rem;
		}

		#paradox-intro-subsection-1 > div :global(img),
		#paradox-intro-subsection-1 > div :global(.p-legend) {
			max-width: unset;
			width: 100%;
		}

		#paradox-intro-subsection-2 {
			padding: 5rem 7.5vw 5rem 7.5vw;
			width: 60%;
		}

		#paradox-intro-subsection-2 :global(h2),
		#paradox-intro-subsection-2 :global(p) {
			text-align: right !important;
		}

		#paradox-intro-subsection-3 {
			border-left: 2px dashed var(--color-black);
			padding: 5rem 7.5vw 5rem 7.5vw;
			width: 40%;
		}

		#paradox-intro-subsection-3 :global(.p-highlight) {
			margin-left: 0;
			text-align: left !important;
		}

		.display-flex-wrapper {
			flex-direction: row;
		}
	}

	@media only screen and (min-width: 1536px) {
		#paradox-intro-subsection-1 {
			flex-direction: row;
			gap: 3rem;
			padding: 6rem 0;
			padding-left: calc((100% - 70rem) / 2);
			padding-right: calc((100% - 70rem) / 2);
		}

		#paradox-intro-subsection-1 > div {
			width: 51rem;
		}

		#paradox-intro-subsection-1 > :global(h2) {
			font-size: 7.5rem;
		}

		#paradox-intro-subsection-1 > div :global(img),
		#paradox-intro-subsection-1 > div :global(.p-legend) {
			max-width: unset;
			width: 100%;
		}

		#paradox-intro-subsection-2 {
			padding: 6rem 0;
			padding-left: calc(50% - 50rem);
			padding-right: calc(5rem);
			width: 50%;
		}

		#paradox-intro-subsection-2 :global(h2),
		#paradox-intro-subsection-2 :global(p) {
			text-align: right !important;
		}

		#paradox-intro-subsection-3 {
			border-left: 2px dashed var(--color-black);
			padding: 6rem 0;
			padding-left: calc(5rem);
			padding-right: calc(50% - 50rem);
			width: 50%;
		}

		#paradox-intro-subsection-3 :global(.p-highlight) {
			margin-left: 0;
			text-align: left !important;
		}

		.display-flex-wrapper {
			flex-direction: row;
		}
	}
</style>
