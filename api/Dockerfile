FROM node:20

WORKDIR /usr/src/app/api

COPY package*.json ./
RUN npm i

COPY ./src ./src
COPY index.ts ./
COPY tsconfig.json ./

RUN npm run reset-db

EXPOSE 3080

CMD ["npm", "run", "dev"]

HEALTHCHECK CMD (wget -O - localhost:3080/recipes | grep '{') || exit 1
