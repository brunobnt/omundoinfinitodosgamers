<script>
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import Image from '$lib/components/Image.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	import GamesWomenSterotypes from '$lib/assets/images/c4-games-women-stereotypes.png';
	import GamesESportsStereotypes from '$lib/assets/images/c4-games-esports-stereotypes.png';
	import StatementAuthor from '$lib/assets/images/c4-statement-author.png';
</script>

<section id="toxic-discrimination-section-intro">
	<Highlight align="center" color="white">
		“Eu sempre me passava de homem em jogos ou não revelava meu gênero.”
	</Highlight>
	<h6>Mulher, branca, 35 anos, São Paulo, SP</h6>
	<div id="toxic-discrimination-intro-cover" />
	<PostIt
		title="Para ser jogadora é necessário ser silenciada"
		author="Mulher, Branca, 27 anos, DF"
		background="green"
		color="green-darker"
	>
		“O homem branco heterossexual habita a identidade do jogador, as jogadoras são consideradas
		estranhas e ficam vulneráveis a situações de assédio. <br /><br />

		Jogos populares como Counterstrike, Valorant e League of Legends têm equipes de cinco pessoas. É
		comum jogadoras se silenciarem, pois sofrem preconceito se revelam que são mulheres.<br /><br />

		Uso nome/nick dentro dos jogos unissex para não passar por assédio/preconceito dentro do jogo.”
	</PostIt>
</section>
<section id="toxic-discrimination-section-content">
	<Title type="subsection" color="green-darker">
		Personagens femininas são sexy e pouco estratégicas
	</Title>
	<Paragraph color="black">
		A representação de gênero nos videogames é frequentemente estereotipada.
	</Paragraph>
	<Image src={GamesWomenSterotypes} alt="" />
	<Legend color="black">
		Créditos da Imagem: <a
			href="https://www.composingdigitalmedia.org/f20_dmtp/kwa/poesistheoria.html"
			target="_blank">The Female Gamer</a
		>.
	</Legend>
	<div class="highlight-image-wrapper" />
	<Carousel>
		<PostIt
			title="Um objeto"
			author="Mulher, Branca, 26 anos, São Paulo, SP"
			background="green"
			color="green-darker"
		>
			“Isso é algo que ainda me incomoda muito. Em jogos voltados ao público masculino (como por
			exemplo LoL, Valorant, FIFA, NBA, F1), as mulheres são sempre representadas como um “objeto”,
			sempre com curvas avantajadas e características inseridas para chamar atenção visual dos
			homens. É muito difícil jogar qualquer um desses jogos e encontrar de forma rápida e prática
			skins que nos representem sem ser extremamente sexista ou até mesmo vulgares.”
		</PostIt>
		<PostIt
			title="Não somos a Xena"
			author="Mulher, Preta, 43 anos, Matinhos, PR"
			background="green"
			color="green-darker"
		>
			“Mário Kart, por exemplo, as princesas são brancas, fofinhas e sem personalidade. Candy Crush
			parece ter entendido isso e adicionou personagens da pele preta para compor cenários. Na
			maioria dos jogos não há representatividade feminina. A impressão que eu tenho é que os jogos
			que têm personagens femininas estão fadados a imagem da Xena, a guerreira, e isso não é
			representativo, pois somos jogadoras e não temos este perfil. Ou nem sempre temos.”
		</PostIt>
		<PostIt
			title="Roupas curtas"
			author="Homem, PretO, 23 anos, Porto Alegre, RS"
			background="green"
			color="green-darker"
		>
			“Em diversos jogos que vejo, o corpo da mulher é bem sexualizado, sempre com personagens
			sensuais e etc. Dificilmente você encontra jogos que encontra personagens femininos heroínas
			ou personagens principais, e quando encontram, sempre usam roupas curtas (por exemplo Tomb
			Rider, Violet, etc).”
		</PostIt>
	</Carousel>
	<div id="image-ai-stereotypes" />
	<Legend color="black">
		Assim como a Jogosfera, a Inteligência Artificial reflete estereótipos nos seus algoritmos. Sem
		especificar palavras de inclusão ou diversidade, os resultados obtidos são geralmente pouco
		representativos e muito estereotipados, em que mulheres são brancas, de rostos finos, magras e,
		muitas vezes, sensuais. E homens são fortes, musculosos e agressivos.
	</Legend>
	<Title type="subsection" color="green-darker">
		E-Sports mantém o estereótipo do “gamer clássico”
	</Title>
	<div class="narrow-text">
		<Paragraph color="black">
			Nos e-sports, apesar do esforço, o ambiente ainda está longe de ser representativo. Os times
			ainda são compostos majoritariamente por homens, com pouca diversidade de raça, classe social
			e orientação sexual.
		</Paragraph>
		<Image src={GamesESportsStereotypes} alt="" />
		<Legend color="black">Prompt: an e-sports professional player training at home</Legend>
	</div>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, XisGG"
			background="green-darker"
			border="green"
			color="white"
		>
			“Tem muita coisa para avançar ainda e uma coisa que me incomoda bastante é a discrepância
			entre as pessoas que jogam, que consomem e a representatividade dentro dos cenários. Os
			principais campeonatos de esportes eletrônicos, os principais cargos das empresas, a gente não
			vê a representatividade refletida. Se você pensar nos principais campeonatos de esportes
			eletrônicos, a maioria é só de homens que jogam e não é porque tem uma proibição, nem porque
			os desenvolvedores não permitem ou porque tem alguma diferença biológica que faça isso. Na
			Xisgg a gente foi a primeira equipe de esportes eletrônicos do Brasil a chegar na série A da
			liga Brasileira de Free Fire com duas meninas titulares jogando, enquanto nenhuma outra equipe
			do campeonato inteiro tinha nenhuma menina no elenco.”
		</Statement>
	</div>
	<Title type="subsection" color="green-darker">Questões raciais e sociais</Title>
	<Paragraph color="black">
		Hoje o jogo está presente em comunidades e periferias, mas o público negro segue sendo muito
		pouco representado em campeonatos.
	</Paragraph>
	<div class="statement-wrapper">
		<Statement
			image={StatementAuthor}
			author="Especialista, Afrogames"
			background="green-darker"
			border="green"
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
	<Title type="subsection" color="green-darker">Diversidade de gênero</Title>
	<Paragraph color="black">
		Ainda não existe equidade na visibilidade entre jogadoras mulheres e homens, campeonatos
		femininos e masculinos. Jogadores trans e não binários também são exceção nas ligas
		profissionais de maior alcance.
	</Paragraph>
	<Carousel>
		<PostIt
			title="Sem visibilidade"
			author="Homem, Branco, 33 anos, Rio de Janeiro, RJ"
			background="green"
			color="green-darker"
		>
			“Eu não conheço de nome as mulheres que jogam, mas acho que na CCXP eu encontrei várias
			meninas gamers e influencers mulheres desse meio.”
		</PostIt>
		<PostIt
			title="Apoio"
			author="Homem, Branco, 24 anos, Goiânia, GO"
			background="green"
			color="green-darker"
		>
			“No cenário profissional, o apoio que mulheres recebem é pouquíssimo.”
		</PostIt>
	</Carousel>
	<Highlight color="red">
		Esse ambiente tóxico favorece o surgimento de uma estrutura social cruel e preconceituosa em boa
		parte da Jogosfera
	</Highlight>
</section>

<style>
	#toxic-discrimination-section-intro {
		align-items: center;
		background-color: var(--color-background-darkblue);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#toxic-discrimination-section-intro > :global(h6) {
		color: var(--color-white);
		font-family: 'Press Start 2P', monospace;
		letter-spacing: -0.005rem;
		line-height: 160%;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
	}

	#toxic-discrimination-intro-cover {
		background-color: transparent;
		background-image: url('$lib/assets/images/c4-discrimination-intro-cover.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
		overflow-x: clip;
	}

	#toxic-discrimination-section-content {
		align-items: center;
		background-color: var(--color-gray-light);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow-x: clip;
	}

	#image-ai-stereotypes {
		background-image: url('$lib/assets/images/c4-games-ai-stereotypes.png');
		background-position: top center;
		background-repeat: repeat;
		background-size: auto 100%;
	}

	.statement-wrapper {
		align-items: center;
		background-color: var(--color-red-normal);
		background-image: url('$lib/assets/backgrounds/background-pink.png');
		background-position: center center;
		display: flex;
		justify-content: center;
	}

	.highlight-image-wrapper {
		background-image: url('$lib/assets/backgrounds/background-c4-discrimination-highlight.png');
		background-position: top center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	@media only screen and (max-width: 768px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 4rem 7.5vw 0 7.5vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.5rem;
			margin: 1rem 0 2rem 0;
			padding: 0 15vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(250vw * 0.75);
			margin-bottom: calc(250vw * -0.25);
			width: 250vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 7.5vw 4rem 7.5vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 4rem;
		}

		#image-ai-stereotypes {
			height: 100vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 2rem -7.5vw 4rem -7.5vw;
			padding: 0 7.5vw;
			width: calc(100% + 15vw);
		}

		.highlight-image-wrapper {
			height: calc(100vw * 1.25);
			margin: 4rem -7.5vw 0 -7.5vw;
			margin-bottom: calc(100vw * -0.35);
			width: 100vw;
		}
	}

	@media only screen and (min-width: 768px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 5rem 15vw 0 15vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.525rem;
			margin: 0.5rem 0 2.5rem 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(150vw * 0.75);
			margin-bottom: calc(150vw * -0.25);
			width: 150vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 15vw 5rem 15vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 5rem;
		}

		#image-ai-stereotypes {
			height: 75vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 1.25rem -15vw 5rem -15vw;
			padding: 2.5rem 15vw;
			width: calc(100% + 30vw);
		}

		.highlight-image-wrapper {
			height: calc(75vw * 1.25);
			margin: 5rem -15vw 0 -15vw;
			margin-bottom: calc(75vw * -0.35);
			width: 75vw;
		}
	}

	@media only screen and (min-width: 1280px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -15rem;
			padding: 5rem 20vw 0 20vw;
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.525rem;
			margin: 0.5rem 0 0 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(75vw * 0.75);
			margin-bottom: calc(75vw * -0.25);
			width: 75vw;
		}

		#toxic-discrimination-section-content {
			padding: 15rem 20vw 5rem 20vw;
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 5rem;
		}

		#image-ai-stereotypes {
			height: 40vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 1.25rem -20vw 5rem -20vw;
			padding: 2.5rem 20vw;
			width: calc(100% + 40vw);
		}

		.highlight-image-wrapper {
			height: calc(40vw * 1.25);
			margin: 5rem -20vw 0 -20vw;
			margin-bottom: calc(40vw * -0.35);
			width: 40vw;
		}
	}

	@media only screen and (min-width: 1536px) {
		#toxic-discrimination-section-intro {
			margin-bottom: -20rem;
			padding: 6rem 0 0 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-discrimination-section-intro > :global(h6) {
			font-size: 0.55rem;
			margin: 0.5rem 0 0 0;
			padding: 0 7.5vw;
		}

		#toxic-discrimination-intro-cover {
			height: calc(75rem * 0.75);
			margin-bottom: calc(75rem * -0.25);
			width: 75rem;
		}

		#toxic-discrimination-section-content {
			padding: 20rem 0 6rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#toxic-discrimination-section-content > :global(h4) {
			margin-top: 3rem;
		}

		#image-ai-stereotypes {
			height: 25vw;
			width: 100vw;
		}

		.statement-wrapper {
			margin: 3rem 0 6rem 0;
			padding: 3rem 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
			width: calc(100vw);
		}

		.highlight-image-wrapper {
			height: calc(50rem * 1.25);
			margin: 6rem 0 0 0;
			margin-bottom: calc(50rem * -0.35);
			width: 50rem;
		}
	}
</style>
