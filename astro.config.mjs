import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeGithubEmoji from "rehype-github-emoji";
import { rehypeTwemoji } from "rehype-twemoji";
import { visit } from "unist-util-visit";

export const rehypeFootnotesPlugin = () => {
	return (tree) => {
		visit(tree, "element", (node, _1, _2) => {
			// Find the footnotes section
			if (node.tagName === "section") {
				visit(node, "element", (child, childIndex, childParent) => {
					if (child.tagName === "h2") {
						// Replace h2 with hr
						childParent.children.splice(childIndex, 1, {
							type: "element",
							tagName: "hr",
						});
					}
				});
			}
		});
	};
};

export default defineConfig({
	site: "https://dubet.fr",
	compressHTML: true,

	redirects: {
		"/": "/fr",
	},

	build: {
		inlineStylesheets: "never",
	},

	output: "static",

	vite: {
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				output: {
					assetFileNames: "assets/style.css",
				},
			},
		},
	},

	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "dracula" },
			processor: unified({
				rehypePlugins: [
					rehypeFootnotesPlugin,
					rehypeGithubEmoji,
					[
						rehypeTwemoji,
						{
							format: "svg",
							source: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest",
						},
					],
				],
			}),
		}),
		solidJs(),
	],
});
