<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Image from '$lib/components/Image.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	import AffectionWorld from '$lib/assets/images/c2-affection-world-image.png';
</script>

<div id="league-affection-cover" />
<section id="league-affection-section">
	<div class="display-flex-wrapper">
		<Title type="special" color="white">Afeto</Title>
		<Paragraph color="white">
			O amor pelos jogos nasce de diferentes emoções envolvidas desde quando as pessoas começaram a
			jogar. Esse lugar de afeto está baseado em vivências dentro e fora do jogo.
		</Paragraph>
	</div>
	<Carousel>
		<div class="postit-wrapper">
			<PostIt
				title="Vínculos"
				author="Homem, Preto, 25 anos, Recife, PE"
				background="red-dark"
				color="white"
			>
				“Através de jogos online, de plataformas de jogos digitais consegui criar vínculos e muitos
				amigos, até encontros presenciais. Lembro que na época que o jogo do Pokémon lançou aqui no
				Brasil foi uma febre e criei vários amigos quando ia caçar pokémons.”
			</PostIt>
		</div>
		<PostIt
			title="Memórias"
			author="Homem, Branco, 33 anos, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“Os games não são apenas entretenimento, mas sim uma parte preciosa da minha história, cheia
			de memórias e emoções que levarei para sempre no coração.”
		</PostIt>
		<PostIt
			title="Memórias"
			author="Mulher, Branca, 25 anos, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“Fui criada cercada de games: meu pai, aficionado por computadores e profissional de TI, me
			ensinou ainda criança a jogar os jogos de DOS. Quando meu irmão chegou aos 4 e eu 8 já
			tínhamos idade para brigar pelo controle do console e pela cadeira do PC.”
		</PostIt>
		<PostIt
			title="Magia"
			author="Homem, Branco, 33 anos, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“Games são portais mágicos que me levaram a aventuras inesquecíveis, histórias emocionantes e
			conexões especiais.”
		</PostIt>
		<PostIt
			title="Carinho"
			author="Homem, Branco, 33 anos, São Paulo, SP"
			background="red-dark"
			color="white"
		>
			“Os jogos foram muito mais do que apenas diversão, foram uma parte fundamental da minha
			jornada e me ajudaram a crescer e aprender de maneiras únicas. Eu guardo essas experiências
			com carinho e gratidão, pois elas tiveram um valor inestimável na minha vida.”
		</PostIt>
	</Carousel>
</section>
<div id="affection-world-subsection">
	<Highlight align="center" color="red">Existe um lugar afetivo: “eu com o jogo”</Highlight>
	<Image src={AffectionWorld} alt="" />
</div>

<style>
	#league-affection-cover {
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-c2-heart-pattern.png');
		background-position: center center;
		background-size: contain;
		height: 15rem;
		overflow-x: clip;
	}

	#league-affection-section {
		background-color: var(--color-red-normal);
		overflow-x: clip;
	}

	#league-affection-section .display-flex-wrapper {
		display: flex;
		justify-content: center;
	}

	#league-affection-section .display-flex-wrapper :global(h2) {
		width: unset;
	}

	#affection-world-subsection {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		justify-content: center;
		overflow-x: clip;
	}

	@media only screen and (max-width: 768px) {
		#league-affection-cover {
			height: 15rem;
		}

		#league-affection-section {
			padding: 2rem 7.5vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#affection-world-subsection {
			flex-direction: column;
			padding: 2rem 7.5vw;
		}

		#affection-world-subsection :global(p) {
			margin: 0;
		}

		#affection-world-subsection :global(img) {
			max-width: unset;
		}
	}

	@media only screen and (min-width: 768px) {
		#league-affection-section {
			padding: 2.5rem 15vw;
		}

		#affection-world-subsection {
			flex-direction: column;
			padding: 2.5rem 15vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: column;
			gap: 0;
		}

		#affection-world-subsection :global(p) {
			margin: 0;
		}

		#affection-world-subsection :global(img) {
			max-width: 25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#league-affection-section {
			padding: 2.5rem 20vw;
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: row;
			gap: 2.5rem;
		}

		#affection-world-subsection {
			flex-direction: row;
			padding: 2.5rem 20vw;
		}

		#affection-world-subsection :global(p) {
			margin: 0 5%;
		}

		#affection-world-subsection :global(img) {
			max-width: 20rem;
		}
	}

	@media only screen and (min-width: 1536px) {
		#league-affection-section {
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#league-affection-section .display-flex-wrapper {
			flex-direction: row;
			gap: 3rem;
		}

		#affection-world-subsection {
			flex-direction: row;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#affection-world-subsection :global(p) {
			margin: 0 5%;
		}

		#affection-world-subsection :global(img) {
			max-width: 20rem;
		}
	}
</style>
