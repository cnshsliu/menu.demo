const dev = process.argv.includes('dev');
//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		/* paths: {
			base: dev ? '' : '/menu.demo'
		}, */
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: [
				'*',
				'/biz/1',
				'/template/create',
				'/template/import',
				'/template/search',
				'/workflow/normal',
				'/workflow/mining'
			]
		}
	}
};

export default config;
