<script>
	import { base } from '$app/paths';

	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import ContentHighlightImage from '$lib/assets/images/c5-content-highlight-image.png';
	import PlayersContentTypesChart from '$lib/assets/images/c5-chart-content-types-players.svg';
	import ContentFrequencyChart from '$lib/assets/images/c5-chart-content-frequency.svg';
	import ContentChannelsChart from '$lib/assets/images/c5-chart-content-channels.svg';
	import ContentStreamersImage from '$lib/assets/images/c5-content-streamers-image.svg';
</script>

<section id="map-content-section">
	<Title type="special" color="red">Conteúdos</Title>
	<Paragraph color="black">
		Impulsionados pela pandemia, Twitch, Youtube Gaming e Facebook Gaming crescem em participação no
		mercado.
	</Paragraph>
	<div class="display-flex-wrapper">
		<Image src={ContentHighlightImage} alt="" />
		<div>
			<Highlight color="black">
				Na Jogosfera, a indústria de conteúdo se desenvolve de baixo para cima, a partir das pessoas
				e não das instituições
			</Highlight>
			<Paragraph color="black">
				Streamers, casters e um boom de profissionais passam a existir neste mundo.
			</Paragraph>
		</div>
	</div>
	<Carousel>
		<PostIt title="Ecossistema" author="Especialista" background="red" color="white">
			“Dentro do universo dos games, não tem só jogador. Você tem todo um contexto ali… ele pode ser
			um apresentador, um analista, um comentarista, um operador de áudio, operador de câmera. Então
			você tem diversas profissões ali por trás desse ecossistema.”
		</PostIt>
		<PostIt
			title="Criador de conteúdo"
			author="Mulher, Preta, 23 anos, Rio de Janeiro, RJ"
			background="red"
			color="white"
		>
			“Hoje em dia eu trabalho com jogos, através da criação de conteúdo, então estou sempre
			conectada nos jogos e nos assuntos que os envolvem.”
		</PostIt>
	</Carousel>
	<Title type="component" color="black">
		Os conteúdos mais acessados sao feitos por pessoas, ex-jogadores/as, hoje, criadores de
		conteúdo.
	</Title>
	<Image src={PlayersContentTypesChart} alt="" />
	<Legend color="black">Percentuais entre os jogadores que acessam algum tipo de conteúdo.</Legend>
	<Title type="component" color="black">
		A maioria dos jogadores consomem conteúdos relacionados pelo menos uma vez na semana
	</Title>
	<Image src={ContentFrequencyChart} alt="" />
	<Legend color="black">
		Mais de 60% dos jogadores consomem conteúdos sobre jogos entre 1 e 7 vezes na semana. Cerca de
		16% não consomem nenhum conteúdo.
	</Legend>
	<Title type="component" color="black">
		Dos canais consumidos, Youtube, Instagram e TikTok lideram
	</Title>
	<Image src={ContentChannelsChart} alt="" />
	<Legend color="black">Percentuais entre os jogadores que acessam algum tipo de conteúdo.</Legend>
	<Carousel>
		<div class="profile-behavior-chart">
			<h2>Acessa conteúdos ligados a jogos</h2>
			<img src={base + '/charts/chapter-5/1.svg'} alt="Acessa conteúdos ligados a jogos" />
		</div>
		<div class="profile-behavior-chart">
			<h2>Horas por semana tipicamente gastas consumindo conteúdos ligados a jogos</h2>
			<img
				src={base + '/charts/chapter-5/2.svg'}
				alt="Horas por semana tipicamente gastas consumindo conteúdos ligados a jogos"
			/>
		</div>
	</Carousel>
	<Image src={ContentStreamersImage} alt="" />
	<Highlight color="black">
		Os streamers e casters são peças-chave nas comunidades e no ecossistema.
	</Highlight>
	<Paragraph align="center" color="black">
		Eles alimentam o engajamento nos jogos, tendo poder e relevância junto aos seus públicos,
		gerando um altíssimo engajamento e criando fãs e seguidores fiéis.
	</Paragraph>
</section>

<style>
	#map-content-section {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
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

	@media only screen and (max-width: 768px) {
		#map-content-section {
			padding: 4rem 7.5vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2rem auto;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			width: 100%;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1rem auto 2rem auto;
		}

		.profile-behavior-chart {
			height: 35rem;
			margin: 2em auto;
			padding: 2rem 1rem;
			width: 20rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.375rem;
			margin-bottom: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#map-content-section {
			padding: 5rem 15vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2.5rem auto;
		}

		.display-flex-wrapper {
			flex-direction: column;
			gap: 0;
			width: 100%;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.25rem auto 2.5rem auto;
		}

		.profile-behavior-chart {
			height: 40rem;
			margin: 2.5rem auto;
			padding: 2.5rem 1.25rem;
			width: 22.5rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: left;
		}
	}

	@media only screen and (min-width: 1280px) {
		#map-content-section {
			padding: 5rem 20vw;
		}

		#map-content-section > :global(h5) {
			margin-top: 3.75rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 2.5rem auto;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
			width: 100%;
		}

		.display-flex-wrapper > :global(div .p-highlight) {
			margin-left: 0;
			text-align: left;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.25rem auto 2.5rem auto;
			width: 30vw;
		}

		.profile-behavior-chart {
			height: 42rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1536px) {
		#map-content-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#map-content-section > :global(h5) {
			margin-top: 4.5rem;
		}

		#map-content-section > :global(img:last-of-type) {
			margin: 3rem auto;
		}

		.display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
			width: 100%;
		}

		.display-flex-wrapper > :global(div .p-highlight) {
			margin-left: 0;
			text-align: left;
		}

		.display-flex-wrapper > :global(img) {
			margin: 1.5rem auto 3rem auto;
			width: 25rem;
		}

		.profile-behavior-chart {
			height: 42rem;
			margin: 0 auto;
			padding: 2.5rem 1.25rem;
			width: 25rem;
		}

		.profile-behavior-chart h2 {
			font-size: 1.75rem;
			margin-bottom: 1.25rem;
			text-align: center;
		}
	}
</style>
