FROM node:22.13-bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN userdel -r node && \
    groupadd -g 1001 node && \
    useradd -m -u 1001 -g 1001 -s /bin/bash node

USER node