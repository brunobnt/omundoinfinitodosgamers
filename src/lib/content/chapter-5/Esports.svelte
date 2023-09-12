<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import ESportsBigNumber from '$lib/assets/images/c5-esports-big-number.svg';
	import ChampionshipFinals from '$lib/assets/images/c5-championship-finals.png';
	import WorldsAudienceChart from '$lib/assets/images/c5-chart-worlds-audience.svg';
	import ProplayerRoutine from '$lib/assets/images/c5-proplayer-routine.png';
	import ProfessionalInterestChart from '$lib/assets/images/c5-chart-professional-interest.svg';
	import StatementAuthor from '$lib/assets/images/c5-statement-author-2.png';
</script>

<section id="map-esports-section">
	<Title type="special" color="black">E-sports</Title>
	<Title type="component" color="black">
		O Brasil é o sétimo país com a maior porcentagem de fãs de e-sports no mundo. Em 2023 temos:
	</Title>
	<Image src={ESportsBigNumber} alt="" />
	<Paragraph color="black">
		Tanto no Brasil quanto no mundo, eventos competitivos de e-sports tem números e investimento
		comparáveis ao Super Bowl e à Copa do Mundo:
	</Paragraph>
	<Image src={ChampionshipFinals} alt="" />
	<Legend color="black">Final do Worlds, em 2022. Crédito: Kelly Sullivan/Riot Games.</Legend>
	<div class="display-flex-wrapper">
		<div>
			<Title type="component">
				Audiência de Worlds, campeonato de League of Legends, desde 2020.
			</Title>
			<Paragraph color="black">Em milhões de espectadores</Paragraph>
			<Image src={WorldsAudienceChart} alt="" />
			<Legend color="black">
				Fonte dos dados: <a href="https://escharts.com/pt" target="_blank">Esports Charts</a>.
			</Legend>
		</div>
		<div class="profile-behavior-chart">
			<h2>Acompanha algum campeonato de e-sports</h2>
			<img src={base + '/charts/chapter-5/0.svg'} alt="Acompanha algum campeonato de e-sports" />
		</div>
	</div>
	<Highlight color="black">
		Mas ser pro-player não é tarefa fácil. Exige dedicação, investimento e patrocínio.
	</Highlight>
	<Image src={ProplayerRoutine} alt="" />
	<Carousel>
		<PostIt
			title="Lazer em obrigação"
			author="Homem, Branco, 33 anos, São Paulo, SP"
			background="yellow-light"
			color="yellow-darker"
		>
			“Eu vejo a carreira como emocionante e recompensadora e com muitas oportunidades. Porém, ao
			mesmo tempo, não deixo de pensar que é algo preocupante para jovens que se tornam jogadoras
			profissionais ainda cedo, e até mesmo seus familiares. Um cenário competitivo, exigente, onde
			transforma um lazer em uma obrigação, pode, por muitas vezes, frustrar por não alcançarem o
			sucesso desejado.”
		</PostIt>
		<PostIt
			title="Poucas ligas, poucos espaços"
			author="Homem, Branco, 29 anos, Curitiba, PR"
			background="yellow-light"
			color="yellow-darker"
		>
			“Penso que cada vez mais essa profissão será levada a sério, assim como levamos outros
			esportistas a sério. Porém ainda é muito seletiva (a não ser que esteja entre talvez os 50
			melhores do país, é impossível sobreviver com a profissão), necessitando de novas ligas ou
			formas de se desenvolver.”
		</PostIt>
	</Carousel>
	<Paragraph color="black">
		Hoje, ser jogador profissional não é a única opção. Com outras portas se abrindo neste mercado
		lucrativo, o desejo de ser o player número 1 caiu de 2017 para cá.
	</Paragraph>
	<Title type="component" color="black">Você pensa em ser profissional de esports?</Title>
	<Image src={ProfessionalInterestChart} alt="" />
	<Legend color="black">
		Ser gamer pró é um espaço seletivo e para poucos, e existe uma consciência cada vez maior dessas
		dificuldades.
	</Legend>
	<div class="statement-wrapper">
		<Highlight align="center" color="white">Uma empresa como qualquer outra</Highlight>
		<Statement
			image={StatementAuthor}
			author="Especialista, Afrogames"
			background="red-darker"
			border="red"
			color="white"
		>
			“Eu comecei a estudar o mundo dos games, dos e-sports em 2017 e fui convidado na época para ir
			a um campeonato em Seattle. Até que, aquelas coincidências da vida, o José Júnior, do
			Afroreggae me chama pra bater um papo e eu fiz uma apresentação de games para ele, de tudo que
			eu estava vendo. Quando terminei, ele falou ‘Eu não vi um negro jogando. Não vi um negro do
			teu lado na arquibancada’. E aí surgiu a ideia do Afrogames, que é o primeiro e até agora o
			único centro de formação de jogadores de e-sports e programadores de jogos dentro de favelas
			no mundo.”
		</Statement>
	</div>
	<Highlight color="black">
		Dada a dificuldade de se tornar um jogador pro, muitos gamers acabaram por seguir carreira na
		produção de conteúdo. E a pandemia teve um papel importante nesse contexto.
	</Highlight>
</section>

<style>
	#map-esports-section {
		align-items: center;
		background-color: var(--color-yellow-normal);
		background-image: url('$lib/assets/backgrounds/background-yellow.png');
		background-position: center center;
		background-size: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#map-esports-section > :global(h5:first-of-type) {
		margin-top: 0;
	}

	.display-flex-wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.profile-behavior-chart {
		background-color: var(--color-white);
		box-shadow: 5px 5px 10px rgb(0 0 0 / 0.75);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile-behavior-chart h2 {
		color: var(--color-black);
		display: block;
		font-family: 'Dx Slight', sans-serif;
		font-weight: 400;
		letter-spacing: 0.09rem;
		text-align: left;
		text-transform: uppercase;
	}

	.profile-behavior-chart img {
		width: 100%;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.statement-wrapper :global(.p-highlight) {
		margin: 0;
	}

	@media only screen and (max-width: 768px) {
		#map-esports-section {
			padding: 4rem 7.5vw 2rem 7.5vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 -7.5vw -6rem -7.5vw;
			max-width: unset;
			width: 100vw;
		}

		.display-flex-wrapper {
			flex-direction: column;
			margin: 2rem 0;
			gap: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 34rem;
			margin: 2em auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}

		.statement-wrapper {
			margin: 4rem -7.5vw;
			padding: 2rem 7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#map-esports-section {
			padding: 5rem 15vw 2.5rem 15vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2.5rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -7.5rem 0;
			max-width: unset;
			width: 75vw;
		}

		#map-esports-section > :global(.p-legend) {
			margin-bottom: 2rem;
		}

		.display-flex-wrapper {
			flex-direction: column;
			margin: 2.5rem 0;
			gap: 0;
			width: 100%;
		}

		.profile-behavior-chart {
			height: 48rem;
			margin: 2.5rem auto;
			padding: 2.5rem 1.25rem;
			width: 30rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}

		.statement-wrapper {
			margin: 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-esports-section {
			padding: 5rem 20vw 2.5rem 20vw;
		}

		#map-esports-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 2.5rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -7.5vw 0;
			max-width: unset;
			width: 35vw;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
			margin: 5rem -10vw;
			width: calc(100% + 20vw);
		}

		.profile-behavior-chart {
			height: 45rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 32.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.statement-wrapper {
			margin: 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-esports-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-esports-section > :global(h5) {
			margin-top: 4.5rem;
		}

		#map-esports-section > :global(img:nth-child(3)) {
			margin: 0 0 3rem 0;
		}

		#map-esports-section > :global(img:nth-child(9)) {
			margin: 0 0 -9rem 0;
			max-width: unset;
			width: 40rem;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 1.5rem;
			margin: 6rem -10rem;
			width: calc(100% + 20rem);
		}

		.profile-behavior-chart {
			height: 45rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 40rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}

		.statement-wrapper {
			margin: 5rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}
	}
</style>
