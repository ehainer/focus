FROM node:10.15.3-alpine as builder

# Need python to build shrink-ray-current package (zopfli support)
RUN apk add python build-base

ARG CTF_SPACE_ID
ARG CTF_ACCESS_TOKEN

ENV BUILD_ROOT /build

ENV CTF_SPACE_ID=${CTF_SPACE_ID}
ENV CTF_ACCESS_TOKEN=${CTF_ACCESS_TOKEN}

RUN mkdir ${BUILD_ROOT}
WORKDIR ${BUILD_ROOT}
COPY . ${BUILD_ROOT}

RUN yarn install --force --no-lockfile
RUN yarn build

FROM node:10.15.3-alpine

ENV APP_ROOT /app
ENV CTF_SPACE_ID=${CTF_SPACE_ID}
ENV CTF_ACCESS_TOKEN=${CTF_ACCESS_TOKEN}

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY --from=builder /build ${APP_ROOT}

CMD ["yarn", "start"]
