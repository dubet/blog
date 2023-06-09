FROM node:lts AS build
WORKDIR /app
COPY ./package*.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine AS runtime
COPY ./deploy/astro/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
