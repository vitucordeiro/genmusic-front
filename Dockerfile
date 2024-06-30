FROM node:22.3.0-alpine3.19 AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src

COPY public ./public

COPY next.config.mjs .

COPY tsconfig.json .

RUN npm install

#FROM base AS builder 
#WORKDIR /app
#COPY --from=deps /app/node_modeules ./node_modules
#RUN npm run build

COPY . . 

EXPOSE 3000:3000

CMD npm run dev