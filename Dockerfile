FROM node:20-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID=""
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=""
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=""

ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm ci

COPY next.config.mjs ./
COPY jsconfig.json ./
COPY postcss.config.cjs ./
COPY tailwind.config.js ./
COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx:1.27-alpine AS runner

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
