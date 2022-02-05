FROM node:16.13.2-alpine

WORKDIR /src/backend

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "run", "dev"]