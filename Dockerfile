FROM node:8-onbuild

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN yarn
