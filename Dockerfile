# Multi-stage build for Next.js static export

# 1) Builder: install deps and run `next build` (produces `out/`)
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# 2) Runner: serve static files with Nginx
FROM nginx:1.27-alpine AS runner

# Copy custom Nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy exported site to Nginx html directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose HTTP
EXPOSE 80

# Nginx runs as PID 1 by default via base image's CMD

