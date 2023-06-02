# dubet.fr Blog

This is my personal blog sources. Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

## Build & Run

This project [docker](https://www.docker.com/) so the runtime is isolated ("containerized") from the host machine where the website will run. It uses [nginx](https://nginx.org/en/) to serve the statically built pages by the Astro framework.

Below are the commands used to build and run the blog.

### Build the image

```bash
docker build -t ${TAG} .
```

Replace `${TAG}` with the name of the tagged image (for example, `dubet/blog`).

The image exposes two ports: 8080 for the sole purpose of HTTP redirection and 8081 for HTTPS. These ports can be mapped to the real world standard ports, namely 80 for HTTP and 443 for HTTPS.

### Run the image

The nginx configuration requires to have SSL certificates provided by [Let's Encrypt](https://letsencrypt.org/) to enable HTTPS. The directory `/etc/letsencrypt` on the host must be mounted as a volume so the certificates can be accessed by the docker daemon. Port mapping is also done for the two exposed ports in the image.

```bash
docker run -d -v /etc/letsencrypt:/etc/letsencrypt -p 80:8080 -p 443:8081 --name ${NAME} ${TAG}
```

Replace `${TAG}` with the name of the previously tagged image (for example, `dubet/blog`).
Replace `${NAME}` with the name of the container (for example, `blog`).
