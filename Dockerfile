# Dependency instalation
FROM node:12.1.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build project
COPY src ./src
COPY public ./public
COPY tsconfig.json ./
RUN npm run build

# Install production dependencies and copy build
FROM nginx:1.19-alpine
COPY --from=builder /app/build /var/www
COPY ./default.conf.template /etc/nginx/templates/default.conf.template
