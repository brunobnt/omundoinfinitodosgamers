const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},

				// choose your player
				players_background: '#010033',
				player1: '#FF4040',
				player2: '#03FF59',
				player3: '#F2FF00',
				player4: '#FF11A0',
				player5: '#11F1FF',
				player6: '#8400EC'
			}
		}
	}
};

module.exports = config;
