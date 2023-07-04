FROM node:lts-alpine AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY index.html index.html
COPY vite.config.ts vite.config.ts
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json
COPY public/ public
COPY src/ src
RUN npm run build

FROM httpd:alpine
COPY --from=build /build/dist/ /usr/local/apache2/htdocs