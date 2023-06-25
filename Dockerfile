# descarga la imagen de node
FROM node:16-alpine AS build

# crea el directorio
WORKDIR /usr/src/app

# copia el package.json y el lock en el WORKDIR
COPY package*.json ./

# STAGE 1: build

# ejecuta el comando para instalar las dependencias
RUN npm install

# copio todos los archivos
COPY . .

# realizo un angular build
RUN npm run build --prod

# para ver el dir del contenedor
RUN ls -alt


# STAGE 2: RUN APP
FROM nginx:1.17.1-alpine

# copio los archivos de la app a nginx
COPY --from=build /usr/src/app/dist/clic-app /usr/share/nginx/html

# copio la configuracion de nginx
COPY  --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80