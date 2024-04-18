FROM node:lts AS build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
