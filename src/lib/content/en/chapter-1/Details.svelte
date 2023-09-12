<script>
	import { base } from '$app/paths';

	import ProfilesCarousel from '$lib/components/ProfilesCarousel.svelte';
	import Title from '$lib/components/Title.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import GameCategoriesChart from '$lib/components/en/charts/GameCategories.svelte';
	import GenderDistributionChart from '$lib/components/en/charts/GenderDistribution.svelte';
	import GamerMotivationsChart from '$lib/components/en/charts/GamerMotivations.svelte';
	import ContentTypesChart from '$lib/components/en/charts/ContentTypes.svelte';
	import ContentChannelsChart from '$lib/components/en/charts/ContentChannels.svelte';

	import profilesData from '$lib/data/profilesDataEn.json';
	import StarIcon from '$lib/assets/icons/profile-star.svg';
	import RoutineIcon1 from '$lib/assets/icons/routine-item-1.svg';
	import RoutineIcon2 from '$lib/assets/icons/routine-item-2.svg';
	import RoutineIcon3 from '$lib/assets/icons/routine-item-3.svg';
	import RoutineIcon4 from '$lib/assets/icons/routine-item-4.svg';

	let currentIndex = 0;

	const setIndex = (index) => (currentIndex = index);

	$: profile = profilesData[currentIndex];
</script>

<section id="profiles-details-section" class={`profile-${currentIndex}`}>
	<Title type="special" align="center" color="gold">Choose your player</Title>
	<Legend align="center" color="white">
		These images are merely illustrative and are not intended to stereotype the profiles or
		represent “personas”.
	</Legend>
	<ProfilesCarousel data={profilesData} active={currentIndex} chooseProfile={setIndex} />
	<div id="profile-details-intro" class={currentIndex % 2 === 0 ? 'even' : 'odd'}>
		{#if currentIndex % 2 === 0}
			<img src={base + profile.image} alt={profile.name} />
		{/if}
		<div>
			<h2 style:color={profile.color}>{profile.name}</h2>
			<p style:color={profile.color}>“{profile.description}”</p>
			<div class="profile-stars-wrapper">
				<span>Plays every day</span>
				<span>
					{#each Array(profile.stars.days) as i}<img src={StarIcon} alt={i} />{/each}
				</span>
			</div>
			<div class="profile-stars-wrapper">
				<span>Plays more than 7h/week</span>
				<span>
					{#each Array(profile.stars.hours) as i}<img src={StarIcon} alt={i} />{/each}
				</span>
			</div>
			<div class="profile-stars-wrapper">
				<span>Identifies as a gamer</span>
				<span>
					{#each Array(profile.stars.gamer) as i}<img src={StarIcon} alt={i} />{/each}
				</span>
			</div>
			<div class="profile-stars-wrapper">
				<span>Plays on PC/Console</span>
				<span>
					{#each Array(profile.stars.platform) as i}<img src={StarIcon} alt={i} />{/each}
				</span>
			</div>
			<div class="profile-stars-wrapper">
				<span>Plays on mobile</span>
				<span>
					{#each Array(profile.stars.mobile) as i}<img src={StarIcon} alt={i} />{/each}
				</span>
			</div>
		</div>
		{#if currentIndex % 2 !== 0}
			<img src={base + profile.image} alt={profile.name} />
		{/if}
	</div>
	<div id="profile-details-card" style:border-color={profile.color}>
		<div
			id="profile-percentage-wrapper"
			style:background-color={profile.color}
			style:border-color={profile.color}
		>
			<h2>{profile.percentage}</h2>
			<p>of survey respondents are in this profile</p>
		</div>
		<div id="game-categories-wrapper" style:border-color={profile.color}>
			<h6>Most played game categories</h6>
			<GameCategoriesChart categories={profile.gameCategories} color={profile.color} />
		</div>
		<div id="top-games-wrapper" style:border-color={profile.color}>
			<h6>Top 3 most played games</h6>
			<div>
				<img src={profile.topGames[0].image} alt={profile.topGames[0].name} />
				<img src={profile.topGames[1].image} alt={profile.topGames[1].name} />
				<img src={profile.topGames[2].image} alt={profile.topGames[2].name} />
			</div>
		</div>
		<div
			id="daily-players-wrapper"
			style:background-color={profile.color}
			style:border-color={profile.color}
		>
			<h2>{profile.dailyPlayers}</h2>
			<p>play daily</p>
		</div>
		<div id="gender-dist-wrapper" style:border-color={profile.color}>
			<h6>Gender</h6>
			<GenderDistributionChart gender={profile.genderDistribution} color={profile.color} />
		</div>
		<div id="motivation-radar-wrapper" style:border-color={profile.color}>
			<h6>Motivations</h6>
			<GamerMotivationsChart active={currentIndex} />
		</div>
		<div id="routine-items-wrapper" style:border-color={profile.color} style:color={profile.color}>
			<h6>Elements that are part of the routine</h6>
			<div>
				<div class="routine-item">
					<div>
						<p class="routine-item-percentage">{profile.routine.salgadinhos}</p>
						<img src={RoutineIcon1} alt="Snacks" style:background-color={profile.color} />
					</div>
					<p class="routine-item-name">Snacks</p>
				</div>
				<div class="routine-item">
					<div>
						<p class="routine-item-percentage">{profile.routine.comida}</p>
						<img src={RoutineIcon2} alt="Food" style:background-color={profile.color} />
					</div>
					<p class="routine-item-name">Food</p>
				</div>
				<div class="routine-item">
					<div>
						<p class="routine-item-percentage">{profile.routine.doces}</p>
						<img src={RoutineIcon3} alt="Sweets" style:background-color={profile.color} />
					</div>
					<p class="routine-item-name">Sweets</p>
				</div>
				<div class="routine-item">
					<div>
						<p class="routine-item-percentage">{profile.routine.musica}</p>
						<img src={RoutineIcon4} alt="Music" style:background-color={profile.color} />
					</div>
					<p class="routine-item-name">Music</p>
				</div>
			</div>
		</div>
		<div id="content-type-wrapper" style:border-color={profile.color}>
			<h6>Most accessed contents</h6>
			<ContentTypesChart active={currentIndex} />
		</div>
		<div id="content-channels-wrapper" style:border-color={profile.color}>
			<h6>Most accessed channels</h6>
			<ContentChannelsChart active={currentIndex} />
		</div>
	</div>
</section>

<style>
	#profiles-details-section {
		align-items: center;
		background-color: var(--color-background-darkblue);
		display: flex;
		flex-direction: column;
		overflow-x: clip;
	}

	#profiles-details-section :global(.p-legend) {
		border: none;
	}

	#profile-details-intro {
		display: flex;
		width: 100%;
	}

	#profile-details-intro > img {
		margin-top: auto;
	}

	#profile-details-intro .profile-stars-wrapper {
		align-items: center;
		display: flex;
	}

	#profile-details-intro .profile-stars-wrapper img {
		display: inline;
	}

	#profile-details-intro h2 {
		font-family: 'Dx Slight', sans-serif;
		font-style: italic;
		font-weight: 800;
		letter-spacing: 0.125rem;
		line-height: 115%;
		text-transform: uppercase;
	}

	#profile-details-intro p {
		font-family: 'Overpass Mono', monospace;
		font-style: italic;
		font-weight: 400;
		line-height: 130%;
	}

	#profile-details-intro span {
		color: var(--color-white);
		font-family: 'Overpass Mono', monospace;
		font-weight: 400;
		text-transform: uppercase;
	}

	#profile-details-card {
		align-items: center;
		background-color: var(--color-background-darkblue);
		border-style: solid;
		border-width: 6px;
		display: grid;
		flex-direction: column;
	}

	#profile-details-card h2 {
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
	}

	#profile-details-card h6 {
		color: var(--color-white);
		font-family: 'Overpass Mono', monospace;
		font-weight: 700;
		text-transform: uppercase;
		width: 100%;
	}

	#profile-details-card p {
		font-family: 'Fraunces', serif;
		font-weight: 400;
		line-height: 115%;
		margin-top: auto;
	}

	#profile-details-card > div {
		align-items: center;
		border-bottom-width: 1px;
		border-style: solid;
		display: flex;
		flex-direction: column;
	}

	#profile-percentage-wrapper,
	#daily-players-wrapper {
		color: var(--color-background-darkblue);
		flex-direction: row !important;
	}

	#top-games-wrapper div {
		display: flex;
		flex-direction: row;
	}

	#routine-items-wrapper > div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

	#routine-items-wrapper .routine-item {
		display: flex;
		flex-direction: column;
	}

	#routine-items-wrapper .routine-item div {
		display: flex;
	}

	#routine-items-wrapper .routine-item-percentage {
		font-family: 'Dx Slight', sans-serif;
		font-weight: 500;
	}

	#routine-items-wrapper .routine-item-name {
		font-family: 'Fraunces', serif;
		font-weight: 400;
		text-transform: lowercase;
	}

	@media only screen and (max-width: 768px) {
		#profiles-details-section {
			padding: 4rem 0 2rem 0;
		}

		#profiles-details-section > :global(h2) {
			padding: 0 7.5vw;
		}

		#profiles-details-section :global(.p-legend) {
			margin-top: -1rem;
			padding: 0 7.5vw;
		}

		#profile-details-intro {
			padding: 0 0.75rem;
		}

		#profile-details-intro > img {
			width: 35%;
		}

		#profile-details-intro > div {
			padding-bottom: 0.5rem;
			width: 65%;
		}

		#profile-details-intro .profile-stars-wrapper img {
			height: 0.75rem;
			width: 0.65rem;
			padding-bottom: 0.125rem;
		}

		#profile-details-intro h2 {
			font-size: 3.75rem;
			margin: 0 0 1rem 0;
			padding-right: 1rem;
		}

		#profile-details-intro p {
			font-size: 0.875rem;
			margin: 0 0 1rem 0;
		}

		#profile-details-intro span {
			font-size: 0.65rem;
			margin: 0 0.5rem 0.5rem 0;
		}

		#profile-details-intro span:first-child {
			padding-left: 0;
		}

		#profile-details-card {
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 0 0.5rem;
			width: calc(100% - 1.5rem);
		}

		#profile-details-card h2 {
			font-size: 4.5rem;
			line-height: 80%;
		}

		#profile-details-card h6 {
			font-size: 0.75rem;
			margin-bottom: 1rem;
		}

		#profile-details-card p {
			font-size: 1.125rem;
			max-width: 10rem;
		}

		#profile-details-card > div {
			justify-content: center;
			padding: 2rem 1rem;
		}

		#profile-percentage-wrapper,
		#daily-players-wrapper {
			gap: 1rem;
			padding: 0 1rem;
		}

		#top-games-wrapper div {
			gap: 0.5rem;
		}

		#top-games-wrapper img {
			border-radius: 0.125rem;
			width: calc((100% - 1.5rem) / 3);
		}

		#routine-items-wrapper > div {
			gap: 2rem;
			margin: 1rem auto;
		}

		#routine-items-wrapper .routine-item {
			gap: 0.25rem;
		}

		#routine-items-wrapper .routine-item div {
			gap: 0.5rem;
		}

		#routine-items-wrapper .routine-item img {
			height: 4rem;
			padding: 0.5rem;
			width: 4rem;
		}

		#routine-items-wrapper .routine-item-percentage {
			font-size: 2.5rem;
		}

		#routine-items-wrapper .routine-item-name {
			font-size: 1.125rem;
		}
	}

	@media only screen and (min-width: 768px) {
		#profiles-details-section {
			padding: 5rem 0 2.5rem 0;
		}

		#profiles-details-section > :global(h2) {
			padding: 0 15vw;
		}

		#profiles-details-section :global(.p-legend) {
			margin-top: -1.25rem;
			padding: 0 15vw;
		}

		#profile-details-intro {
			padding: 0 15vw;
		}

		#profile-details-intro > img {
			width: 25%;
		}

		#profile-details-intro > div {
			padding-bottom: 0.5rem;
			width: 75%;
		}

		#profile-details-intro .profile-stars-wrapper img {
			height: 1.125rem;
			width: 1rem;
			padding-bottom: 0.15rem;
		}

		#profile-details-intro h2 {
			font-size: 3.5rem;
			margin: 0 0 1rem 1.25rem;
			padding-right: 1rem;
		}

		#profile-details-intro p {
			font-size: 1rem;
			margin: 0 0 1.125rem 1.25rem;
		}

		#profile-details-intro span {
			font-size: 0.75rem;
			margin: 0 0.5rem 0.5rem 0;
		}

		#profile-details-intro span:first-child {
			padding-left: 1.25rem;
		}

		#profile-details-card {
			grid-template-columns: unset;
			grid-template-rows: unset;
			margin: 0 1.25rem;
			width: calc(100% - 30vw);
		}

		#profile-details-card h2 {
			font-size: 5rem;
			line-height: 80%;
		}

		#profile-details-card h6 {
			font-size: 1rem;
			margin-bottom: 1.25rem;
		}

		#profile-details-card p {
			font-size: 1.25rem;
			max-width: 11rem;
		}

		#profile-details-card > div {
			justify-content: center;
			padding: 2.5rem 2.5rem;
		}

		#profile-percentage-wrapper,
		#daily-players-wrapper {
			gap: 1.25rem;
			padding: 0 1.25rem;
		}

		#top-games-wrapper div {
			gap: 1rem;
		}

		#top-games-wrapper img {
			border-radius: 0.25rem;
			width: calc((100% - 3rem) / 3);
		}

		#routine-items-wrapper > div {
			gap: 2.5rem;
			margin: 1.25rem auto;
		}

		#routine-items-wrapper .routine-item {
			gap: 0.25rem;
		}

		#routine-items-wrapper .routine-item div {
			gap: 0.75rem;
		}

		#routine-items-wrapper .routine-item img {
			height: 6rem;
			padding: 0.75rem;
			width: 6rem;
		}

		#routine-items-wrapper .routine-item-percentage {
			font-size: 3.5rem;
		}

		#routine-items-wrapper .routine-item-name {
			font-size: 1.25rem;
		}
	}

	@media only screen and (min-width: 1280px) {
		#profiles-details-section {
			padding: 5rem 0;
		}

		#profiles-details-section > :global(h2) {
			padding: 0 20vw;
		}

		#profiles-details-section :global(.p-legend) {
			margin-top: -1.25rem;
			padding: 0 15vw;
		}

		#profile-details-intro {
			padding: 0 15vw;
		}

		#profile-details-intro > img {
			width: 20%;
		}

		#profile-details-intro > div {
			padding-bottom: 0.5rem;
			width: 80%;
		}

		#profile-details-intro .profile-stars-wrapper img {
			height: 1.125rem;
			width: 1rem;
			padding-bottom: 0.15rem;
		}

		#profile-details-intro h2 {
			font-size: 4.5rem;
			margin: 0 0 1rem 1.25rem;
			padding-right: 1rem;
		}

		#profile-details-intro p {
			font-size: 1rem;
			margin: 0 0 1.25rem 1.25rem;
		}

		#profile-details-intro span {
			font-size: 0.875rem;
			margin: 0 0.5rem 0.5rem 0;
		}

		#profile-details-intro span:first-child {
			padding-left: 1.25rem;
		}

		#profile-details-card {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
			margin: 0 auto;
			width: calc(100% - 30vw);
		}

		#profile-details-card h2 {
			font-size: 5rem;
			line-height: 80%;
		}

		#profile-details-card h6 {
			font-size: 1rem;
			margin-bottom: 1.25rem;
		}

		#profile-details-card p {
			font-size: 1.25rem;
			max-width: 16rem;
		}

		#profile-details-card > div {
			justify-content: flex-start;
			padding: 2.5rem 1.25rem;
		}

		#profile-percentage-wrapper,
		#daily-players-wrapper {
			gap: 1.25rem;
			justify-content: center !important;
			padding: 0 1.25rem;
		}

		#top-games-wrapper {
			height: 100%;
		}

		#top-games-wrapper div {
			gap: 1rem;
		}

		#top-games-wrapper img {
			border-radius: 0.25rem;
			width: calc((100% - 3rem) / 3);
		}

		#routine-items-wrapper > div {
			gap: 2.5rem;
			margin: 1.25rem auto;
		}

		#routine-items-wrapper .routine-item {
			gap: 0.25rem;
		}

		#routine-items-wrapper .routine-item div {
			gap: 0.875rem;
		}

		#routine-items-wrapper .routine-item img {
			height: 4rem;
			padding: 0.5rem;
			width: 4rem;
		}

		#routine-items-wrapper .routine-item-percentage {
			font-size: 3rem;
		}

		#routine-items-wrapper .routine-item-name {
			font-size: 1.125rem;
		}

		#profile-percentage-wrapper {
			grid-row: 1/2;
			grid-column: 1/2;
			height: 100%;
		}

		#daily-players-wrapper {
			grid-row: 1/2;
			grid-column: 2/3;
			height: 100%;
		}

		#game-categories-wrapper {
			grid-row: 2/3;
			grid-column: 1/2;
			height: 100%;
		}

		#motivation-radar-wrapper {
			grid-row: 2/3;
			grid-column: 2/3;
			height: 100%;
		}

		#routine-items-wrapper {
			grid-row: 3/5;
			grid-column: 1/2;
			height: 100%;
			justify-content: center !important;
		}

		#gender-dist-wrapper {
			grid-row: 3/4;
			grid-column: 2/3;
			height: 100%;
		}

		#top-games-wrapper {
			grid-row: 4/5;
			grid-column: 2/3;
			height: 100%;
		}

		#content-type-wrapper {
			grid-row: 5/6;
			grid-column: 1/2;
			height: 100%;
		}

		#content-channels-wrapper {
			grid-row: 5/6;
			grid-column: 2/3;
			height: 100%;
		}
	}

	@media only screen and (min-width: 1536px) {
		#profiles-details-section {
			padding: 6rem 0;
		}

		#profiles-details-section > :global(h2) {
			padding: 0;
			padding-left: calc((100% - 50rem) / 2);
			padding-right: calc((100% - 50rem) / 2);
		}

		#profiles-details-section :global(.p-legend) {
			margin-top: -1.25rem;
			padding: 0;
		}

		#profile-details-intro {
			padding: 0;
			padding-left: calc((100% - 70rem) / 2);
			padding-right: calc((100% - 70rem) / 2);
		}

		#profile-details-intro > img {
			width: 17.5%;
		}

		#profile-details-intro > div {
			padding-bottom: 0.5rem;
			width: 82.5%;
		}

		#profile-details-intro .profile-stars-wrapper img {
			height: 1.125rem;
			width: 1rem;
			padding-bottom: 0.15rem;
		}

		#profile-details-intro h2 {
			font-size: 5rem;
			margin: 0 0 1.25rem 3rem;
			padding-right: 1rem;
		}

		#profile-details-intro p {
			font-size: 1rem;
			margin: 0 0 1.5rem 3rem;
		}

		#profile-details-intro span {
			font-size: 0.875rem;
			margin: 0 0.5rem 0.5rem 0;
		}

		#profile-details-intro span:first-child {
			padding-left: 3rem;
		}

		#profile-details-card {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
			margin: 0 auto;
			width: 70rem;
		}

		#profile-details-card h2 {
			font-size: 5rem;
			line-height: 80%;
		}

		#profile-details-card h6 {
			font-size: 1rem;
			margin-bottom: 1.25rem;
		}

		#profile-details-card p {
			font-size: 1.25rem;
			max-width: 16rem;
		}

		#profile-details-card > div {
			justify-content: flex-start;
			padding: 2.5rem 1.25rem;
		}

		#profile-percentage-wrapper,
		#daily-players-wrapper {
			gap: 1.25rem;
			justify-content: center !important;
			padding: 0 1.5rem;
		}

		#top-games-wrapper {
			height: 100%;
		}

		#top-games-wrapper div {
			gap: 1rem;
		}

		#top-games-wrapper img {
			border-radius: 0.25rem;
			width: calc((100% - 3rem) / 3);
		}

		#routine-items-wrapper > div {
			gap: 3rem;
			margin: 1.5rem auto;
		}

		#routine-items-wrapper .routine-item {
			gap: 0.25rem;
		}

		#routine-items-wrapper .routine-item div {
			gap: 0.875rem;
		}

		#routine-items-wrapper .routine-item img {
			height: 4rem;
			padding: 0.5rem;
			width: 4rem;
		}

		#routine-items-wrapper .routine-item-percentage {
			font-size: 3rem;
		}

		#routine-items-wrapper .routine-item-name {
			font-size: 1.125rem;
		}

		#profile-percentage-wrapper {
			grid-row: 1/2;
			grid-column: 1/2;
			height: 100%;
		}

		#daily-players-wrapper {
			grid-row: 1/2;
			grid-column: 2/3;
			height: 100%;
		}

		#game-categories-wrapper {
			grid-row: 2/3;
			grid-column: 1/2;
			height: 100%;
		}

		#motivation-radar-wrapper {
			grid-row: 2/3;
			grid-column: 2/3;
			height: 100%;
		}

		#routine-items-wrapper {
			grid-row: 3/5;
			grid-column: 1/2;
			height: 100%;
			justify-content: center !important;
		}

		#gender-dist-wrapper {
			grid-row: 3/4;
			grid-column: 2/3;
			height: 100%;
		}

		#top-games-wrapper {
			grid-row: 4/5;
			grid-column: 2/3;
			height: 100%;
		}

		#content-type-wrapper {
			grid-row: 5/6;
			grid-column: 1/2;
			height: 100%;
		}

		#content-channels-wrapper {
			grid-row: 5/6;
			grid-column: 2/3;
			height: 100%;
		}
	}
</style>
