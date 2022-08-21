FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci --only=production
RUN npm install -g @nestjs/cli
RUN npm run build

EXPOSE 4000

ENTRYPOINT ["npm", "run", "start:prod"]