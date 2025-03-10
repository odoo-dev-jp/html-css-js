FROM php:7.4-apache

# Instalar extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Habilitar mod_rewrite y headers
RUN a2enmod rewrite headers

# Exponer el puerto 80
EXPOSE 80
