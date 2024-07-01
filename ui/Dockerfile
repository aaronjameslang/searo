FROM node:20

WORKDIR /usr/src/app/ui

COPY package*.json ./

RUN npm i
RUN npm i -g serve

# COPY ./public ./public
# COPY ./src ./src

# RUN npm run build

COPY ./build ./build

EXPOSE 3000

# CMD ["npm", "start"]
CMD ["serve", "-s", "build"]

HEALTHCHECK CMD (wget -O - localhost:3000 | grep html) || exit 1
