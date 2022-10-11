#Nombre de la imagen
FROM nginx:1.21.6-alpine

#Copia el archivo default a la maquina virtual
COPY default.conf /etc/nginx/conf.d/

#Run ejecuta un comando del shell
RUN rm -rf /usr/share/nginx/app/*

#Agrega lo que esta dentro de dist a la ruta
ADD dist /usr/share/nginx/app

#Cambio de permisos
RUN chmod 777 -R /usr/share/nginx/app

#Espera a que esta todo creado se ejecuta al final
CMD ["nginx", "-g", "daemon off;"]