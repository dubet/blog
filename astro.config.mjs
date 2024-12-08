import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://dubet.fr',
	compressHTML: true,
	build: {
		inlineStylesheets: 'never'
	},
	output: 'static',
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: 'assets/style.css',
				}
			}
		}
	}
});
