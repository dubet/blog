# dubet.fr

This is the source code of my website hosted at [`https://dubet.fr`](https://dubet.fr), using Astro and TailwindCSS.

The hosting is done with the Google Firebase Hosting product, which is basically a quick and free (as in "**free** beer") way to host small, static websites.

Before, I was using a Virtual Private Server (VPS) rented from OVH and the cost of running it was around 5 euros per month. Switching from Firebase was a really cost effective solution for my needs.

I plan in the future to have also some blog posts in a dedicated section.

## Setting up

You need `node` (>20) installed on your machine, as well as `yarn`. To enable and install the latest version, you'll also need to enable `corepack`.

## Design

A lot of effort has been made to make this website as lightweight as possible. This includes using the most effective image format for pictures (`.webp` instead of `.jpg`) and minifying the assets (`.html`, `.css` and `.js` files).
