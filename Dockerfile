FROM node:14 AS builder

WORKDIR /wtds

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /wtds/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Запуск Nginx в режиме демона
CMD ["nginx", "-g", "daemon off;"]
