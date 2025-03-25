FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

ENV PORT=8080
ENV APP_VERSION=v1.0.0
ENV APP_ENV=production

EXPOSE 8080

CMD ["node", "app.js"]
