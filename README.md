# dubet.fr

[![Continuous Delivery](https://github.com/dubet/blog/actions/workflows/continuous-deployment.yaml/badge.svg?branch=master)](https://github.com/dubet/blog/actions/workflows/continuous-deployment.yaml)

This is my personal website sources. Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

## Build & Run

This project uses [docker](https://www.docker.com/) so the runtime is isolated ("containerized") from the host machine where the website will run.

Two service images must be created: they are based on the [nginx](https://nginx.org/en/) image.

1. One backend service image used to serve the statically pages built by the Astro framework (astro folder)
2. One frontend service image to handle both HTTP and HTTPS and redirect the traffic to the backend (proxy folder)

Below are the commands used to build and deploy.

### Build the project

We simply use `docker compose` to build both backend and frontend images, namely astro and proxy.

```bash
docker compose build
```

### Deploy the project

To deploy the project, use `docker compose` to run the service images with their configuration.

The `docker-compose.yaml` file exposes different ports for the services:

- For `proxy` service (frontend), ports 8080 for HTTP and 8081 for HTTPS are exposed and mapped to real world standard ports (80 and 443 respectively)
- For `astro` service (backend), port 9000 for HTTP is exposed, but only internally

The ports defined in the `docker-compose.yaml` file are tightly coupled with the ones defined in the nginx configuration of both services. We **MUST** make sure these ports do match between them:
- `listen` and `proxy_pass` directives in nginx configurations
- `ports` attributes in compose file

The frontend nginx configuration has been set up to accept HTTPS. In this project, the SSL certificates are provided by [Let's Encrypt](https://letsencrypt.org/) with the [certbot](https://certbot.eff.org/) tool on the host machine. Therefore, the directory `/etc/letsencrypt` on the host machine **MUST** exist and be mounted as a volume, so the certificates can be accessed by the frontend service at runtime. The configuration also looks for a file containing Diffie-Hellman parameters, called `dhparam.pem`, in order to strenghten key exchange, so we **MUST** make sure it is also present in the same directory as the certificates.

These are the most important lines of the nginx configuration file for the frontend:

```
ssl_certificate /etc/letsencrypt/live/dubet.fr/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/dubet.fr/privkey.pem;
ssl_dhparam /etc/letsencrypt/live/dubet.fr/dhparam.pem;
```

These lines locate key, certificate and Diffie-Hellman parameters files required to setup a secure connection. We **MUST** make sure these paths and names correctly match the ones that have been generated with certbot. 

The directory structure for generated certificates is pretty standard (`/etc/letsencrypt/live/${DOMAIN_NAME}`) and is unlikely to change anytime soon, so eventually we would just need to change the domain name (here, it is `dubet.fr`) if a mismatch occur.

We can generate a Diffie-Hellman parameters file with the following command using openssl:

```sh
openssl dhparam -out dhparam.pem 4096
```

Once it's done, we can deploy the application by starting the two services declared in the compose file:

```bash
docker compose up
```

The continuous deployment pipeline running in this repository executes the following command to rebuild the images when a push to master occurs:

```bash
docker compose up --build -d
```
