<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Image from '$lib/components/Image.svelte';

	import WorldImage from '$lib/assets/images/insights-legitimacy-world-image.svg';
	import DataImage1 from '$lib/assets/images/insights-legitimacy-data-1.svg';
	import DataImage2 from '$lib/assets/images/insights-legitimacy-data-2.svg';
	import DataImage3 from '$lib/assets/images/insights-legitimacy-data-3.svg';
	import DataImage4 from '$lib/assets/images/insights-legitimacy-data-4.svg';
	import WordPapers from '$lib/assets/images/insights-legitimacy-word-papers.svg';
	import ProfileImage from '$lib/assets/images/insights-legitimacy-profile-image.png';
	import HighlightImage from '$lib/assets/images/insights-legitimacy-highlight-image.svg';
</script>

<section id="insights-legitimacy-section">
	<Title type="special" color="red">1. Reconhecer a legitimidade da Jogosfera</Title>
	<Paragraph color="black">
		Saber navegar nos <span class="weight-700">códigos e vivências do mundo dos games</span> é fundamental
		para se conectar e ganhar a confiança de quem joga. Entender a necessidade de quem está envolvido
		nos jogos é o primeiro passo para uma atuação relevante nesse universo.
	</Paragraph>
	<Image src={WorldImage} alt="" />
	<Title type="component" color="black">Fomentar o ecossistema</Title>
	<Image src={DataImage1} alt="" />
	<Paragraph color="black">
		As pessoas entendem que as marcas podem ter um papel fundamental:
	</Paragraph>
	<Paragraph color="black">
		<li>Apoiando jogadores</li>
		<li>Apoiando criadores de conteúdo</li>
		<li>Criando ou viabilizando campeonatos</li>
	</Paragraph>
	<Paragraph color="black">
		Há uma demanda por empresas que se comprometam em ampliar e fortalecer esse ecossistema,
		investindo em ações, e não só em comunicação.
	</Paragraph>
	<Image src={WordPapers} alt="" />
	<Title type="component" color="black">Falar 'jogosferês'</Title>
	<Paragraph color="black">
		Os jogadores querem que as marcas entrem nesse ambiente. Contudo, o universo dos games possui
		<span class="weight-700">linguagem e códigos próprios</span> - quem deseja ser legitimado pela comunidade
		dos jogos deve considerar incorporá-los na sua comunicação.
	</Paragraph>
	<Paragraph color="black">
		<span class="color-red weight-700">Mas é preciso atenção!</span> Usar termos de forma equivocada
		é pior do que não usar nenhuma expressão gamer. Se a marca é nova nesse universo, é bom ir com calma,
		identificando os termos mais recorrentes na comunidade e incorporar o novo glossário aos poucos.
	</Paragraph>
	<Image src={ProfileImage} alt="" />
	<Title type="component" color="black">
		Associar-se a quem já é reconhecido na comunidade gamer
	</Title>
	<Image src={DataImage2} alt="" />
	<Paragraph color="black">
		A marca não precisa e nem deve atuar sozinha:
		<span class="weight-700">se associar a criadores de conteúdo e personalidades relevantes</span> para
		a comunidade gamer é uma estratégia poderosa para ganhar relevância e legitimidade entre o público.
	</Paragraph>
	<Paragraph color="black">
		A criação de conteúdo está nas mãos de pessoas, influencers que podem fazer parte de ORG's ou
		ser 100% independentes.
	</Paragraph>
	<div id="insights-legitimacy-separator-1" />
	<Title type="component" color="black">Explorar o jogo como um contexto para a socialização</Title>
	<Paragraph color="black">
		Uma forma de mostrar que a marca entende o papel que o game tem na vida de quem joga é
		justamente pensá-lo como pano de fundo para o desenvolvimento de
		<span class="weight-700">relações interpessoais</span> - algo que já acontece na vida dos gamers
		e que é muito valorizado.
	</Paragraph>
	<Paragraph color="black">
		Ilustrar como o jogo pode fazer parte da demonstração de carinho e da rotina de relações
		afetivas de amizade, familiares e românticas é um caminho para levar a lógica de games mais
		populares entre o público para ações de fidelização e recomendação.
	</Paragraph>
	<div id="insights-legitimacy-separator-2" />
	<Title type="component" color="black">
		Considerar o jogo como ponto de encontro entre marca e consumidor (dentro e fora das telas)
	</Title>
	<Paragraph color="black">
		O ambiente de jogo também pode servir como um local para as marcas fazerem ofertas e se
		comunicarem sobre os mais diversos temas.
	</Paragraph>
	<Image src={DataImage3} alt="" />
	<Paragraph color="black">
		Contudo, mesmo no ambiente virtual,
		<span class="weight-700">a presença de produtos deve ser sempre contextualizada</span>, estando
		<span class="weight-700">a serviço da história do jogo</span> e das tarefas que desafiam o gamer.
		Trazer a marca somente pela exposição não é a melhor forma de participar desse cenário e do potencial
		de conexão que ele oferece.
	</Paragraph>
	<Image src={DataImage4} alt="" />
	<Paragraph color="black">
		<span class="weight-700">Importante:</span> essa relação não precisa ficar restrita ao ambiente online.
		É possível (e desejado) que as marcas levem o universo dos jogos para além das telas.
	</Paragraph>
	<Image src={HighlightImage} alt="" />
</section>

<style>
	#insights-legitimacy-section {
		background-color: var(--color-gray-light);
		overflow-x: clip;
	}

	#insights-legitimacy-separator-1,
	#insights-legitimacy-separator-2 {
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	#insights-legitimacy-separator-1 {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-1.svg');
	}

	#insights-legitimacy-separator-2 {
		background-image: url('$lib/assets/backgrounds/background-insights-separator-2.svg');
	}

	#insights-legitimacy-section :global(img) {
		height: auto;
	}

	#insights-legitimacy-section :global(img:nth-of-type(8)) {
		max-width: unset;
	}

	@media only screen and (max-width: 768px) {
		#insights-legitimacy-section {
			padding: 4rem 7.5vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 4rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2rem 0;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 0 2rem 0;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2rem -7.5vw 0 -7.5vw;
			width: calc(100% + 15vw);
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(100vw / 1.5);
			margin: 2rem -7.5vw;
			width: calc(100% + 15vw);
		}
	}

	@media only screen and (min-width: 768px) {
		#insights-legitimacy-section {
			padding: 5rem 15vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.25rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(70vw / 1.5);
			margin: 2.5rem auto;
			width: calc(70vw);
		}
	}

	@media only screen and (min-width: 1280px) {
		#insights-legitimacy-section {
			padding: 5rem 20vw;
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 5rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.25rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 2.5rem auto;
			width: 60%;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 2.5rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 2.5rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(45vw / 1.5);
			margin: 2.5rem auto;
			width: calc(45vw);
		}
	}

	@media only screen and (min-width: 1536px) {
		#insights-legitimacy-section {
			padding: 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#insights-legitimacy-section :global(h5) {
			margin-top: 6rem;
		}

		#insights-legitimacy-section li {
			margin-left: 1.5rem;
		}

		#insights-legitimacy-section :global(img:nth-of-type(1)),
		#insights-legitimacy-section :global(img:nth-of-type(3)),
		#insights-legitimacy-section :global(img:nth-of-type(4)) {
			margin: 3rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(2)),
		#insights-legitimacy-section :global(img:nth-of-type(5)),
		#insights-legitimacy-section :global(img:nth-of-type(6)),
		#insights-legitimacy-section :global(img:nth-of-type(7)) {
			margin: 0 auto 3rem auto;
		}

		#insights-legitimacy-section :global(img:nth-of-type(8)) {
			margin: 3rem auto 0 auto;
		}

		#insights-legitimacy-separator-1,
		#insights-legitimacy-separator-2 {
			height: calc(35rem / 1.5);
			margin: 3rem auto;
			width: 35rem;
		}
	}
</style>
