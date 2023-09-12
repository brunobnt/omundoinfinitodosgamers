<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';

	import WorldImage from '$lib/assets/images/insights-environment-world-image.svg';
	import DataImage1 from '$lib/assets/images/insights-environment-data-1.svg';
	import DataImage2 from '$lib/assets/images/insights-environment-data-2.svg';
	import HighlightImage from '$lib/assets/images/insights-environment-highlight-image.svg';
</script>

<section id="insights-environment-section">
	<Title type="special" color="yellow">
		3. Transformar a Jogosfera em um ambiente mais amigável
	</Title>
	<Paragraph color="white">
		A Jogosfera tem espaço para todas as pessoas. Porém,
		<span class="weight-700">nem todo mundo se sente à vontade</span> ou é bem-vindo nesse universo.
		Iniciativas para mudar essa realidade não faltam, mas ainda estão engatinhando.
	</Paragraph>
	<Paragraph color="white">
		Há oportunidade para
		<span class="weight-700">marcas serem protagonistas desse momento de transformação</span>,
		abraçando iniciativas para converter esse espaço em um ambiente mais positivo e inclusivo.
	</Paragraph>
	<Image src={WorldImage} alt="" />
	<Title type="component" color="white">Promover uma relação saudável com o jogo</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="white">
		Marcas podem (e devem) estimular uma relação saudável com o jogo, explorando suas
		potencialidades e desestimulando o uso abusivo.
	</Paragraph>
	<Paragraph color="white">
		É importante o cuidado para não estimular a alienação pelo jogo, seja por meio de seu impacto na
		rotina de sono, exercícios, ou mesmo interação social.
	</Paragraph>
	<Paragraph color="white">
		O jogo é mais uma das atividades que fazem parte do dia-a-dia da pessoa, e as marcas podem
		adotar atitudes de promoção do bem-estar pessoal, propondo a busca de um equilíbrio entre o
		tempo dedicado para o jogo e para outras tarefas, por exemplo.
	</Paragraph>
	<Title type="component" color="white">
		O jogo como estímulo para a discussão sobre pautas sociais
	</Title>
	<Image src={HighlightImage} alt="" />
	<Paragraph color="white">
		A fantasia e o ambiente lúdico tornam o jogo um potente aliado para
		<span class="weight-700">
			falar sobre temas sensíveis e de interesse coletivo de uma maneira criativa e menos intrusiva
		</span>. Assim, existe espaço para essa também ser uma plataforma para as marcas abordarem temas
		de responsabilidade social e agenda positiva, de forma que o mundo virtual possa contribuir para
		a conscientização sobre melhorias no mundo físico.
	</Paragraph>
	<div id="insights-environment-separator" />
	<Title type="component" color="white">
		Desenvolver produtos que tornem os jogos mais acessíveis
	</Title>
	<Image src={DataImage2} alt="" />
	<Paragraph color="white">
		Será que a Jogosfera é para todas as pessoas? Pessoas com alguma limitação física e motora podem
		sentir dificuldades para viver uma experiência de jogo completa e imersiva.
	</Paragraph>
	<Paragraph color="white">
		Desenvolver
		<span class="weight-700">
			soluções que aproximem os jogos de pessoas até então não contempladas
		</span> por eles pode ser uma forma de atuação das marcas para ampliar ainda mais o alcance da Jogosfera.
	</Paragraph>
</section>

<style>
	#insights-environment-section {
		background-color: var(--color-red-normal);
		overflow-x: clip;
	}

	#insights-environment-section :global(.p-legend) {
		border: none;
	}

	#insights-environment-separator {
		background-image: linear-gradient(to bottom, var(--color-red-normal) 0%, rgba(0, 0, 0, 0) 50%),
			url('$lib/assets/backgrounds/background-insights-separator-3.svg');
		background-position: bottom center;
	}

	@media only screen and (max-width: 768px) {
		#insights-environment-section {
			padding: 4rem 7.5vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2rem 0;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 0 2rem 0;
		}

		#insights-environment-separator {
			background-size: 50%;
			height: 100vw;
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-environment-section {
			padding: 5rem 15vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2.5rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-environment-separator {
			background-size: 25%;
			height: 20rem;
			margin: 2.5rem -15vw;
			width: calc(100% + 30vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-environment-section {
			padding: 5rem 20vw;
		}

		#insights-environment-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 2.5rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-environment-separator {
			background-size: 12.5%;
			height: 25rem;
			margin: 2.5rem -20vw;
			width: calc(100% + 40vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-environment-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-environment-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-environment-section :global(img:nth-of-type(1)),
		#insights-environment-section :global(img:nth-of-type(3)) {
			margin: 3rem auto;
		}

		#insights-environment-section :global(img:nth-of-type(2)),
		#insights-environment-section :global(img:nth-of-type(4)) {
			margin: 0 auto 3rem auto;
		}

		#insights-environment-separator {
			background-size: 50%;
			height: 37.5rem;
			margin: 3rem 0;
			width: 50rem;
		}
	}
</style>
