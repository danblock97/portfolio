FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install all dependencies once for caching
COPY package.json package-lock.json ./
RUN npm ci

# Development image
FROM node:20-alpine AS development
WORKDIR /app
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=base /app/node_modules ./node_modules
COPY . .
CMD ["npm", "run", "dev"]

# Build the static export
FROM node:20-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production runtime: serve static export on port 3000
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install -g serve
COPY --from=build /app/out ./out
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
