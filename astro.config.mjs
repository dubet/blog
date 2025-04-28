// @ts-check

import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: 'https://dubet.fr',
	compressHTML: true,
	build: {
		inlineStylesheets: 'never'
	},
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				output: {
					assetFileNames: 'assets/style.css',
				}
			}
		}
	}
});
