# Stage 1: Build the Next.js application
FROM node:20 AS builder

WORKDIR /app

# Copy package configuration files
COPY package.json package-lock.json* jsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built assets from the builder stage
COPY --from=builder /app/out .

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the application
CMD ["serve", "-s", ".", "-l", "3000"]