import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		paths: {
			base: dev ? '' : '/omundoinfinitodosgamers'
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	},
	preprocess: vitePreprocess()
};

export default config;
