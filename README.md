# dubet.fr

This is my personal website sources. Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

## Build & Run

This project uses [docker](https://www.docker.com/) so the runtime is isolated ("containerized") from the host machine where the website will run.

Two containers are created, based on the [nginx](https://nginx.org/en/) image:

1. One to serve the statically built pages by the Astro framework (astro - backend)
2. One to handle both HTTP and HTTPS and redirect the traffic to the backend (proxy frontend)

Below are the commands used to build and deploy.

### Build the project

Simply use `docker compose` to build both backend and frontend images, namely astro and proxy.

```bash
docker compose build
```

The nginx proxy frontend configuration exposes internal ports 8080 for HTTP and 8081 for HTTPS.
The nginx astro backend configuration exposes internal port 9000 for HTTP.

### Deploy the project

The nginx configuration of the frontend proxy requires to have SSL certificates provided by [Let's Encrypt](https://letsencrypt.org/) to enable HTTPS. The directory `/etc/letsencrypt` on the host must be mounted as a volume so the certificates can be accessed by the container at runtime.

The nginx configuration also looks for a dhparam.pem file for key exchange. Make sure it is present.

The frontend proxy ports are mapped to the real world HTTP standard ports, while the backend port is not exposed to the outside (it will still receive internal traffic from the frontend).

```bash
docker compose up
```

The continuous deployment pipeline running in this repository executes the following command to rebuild the images when a push to master occurs:

```bash
docker compose up --build
```
