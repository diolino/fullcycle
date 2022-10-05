FROM php:7.4-cli
WORKDIR /var/www

#instala zip - que o laravel vai precisar
RUN apt-get update && \
apt-get install libzip-dev -y

# instala extensão zip do php - docker-php-ext-install específico dessa imagem
RUN docker-php-ext-install zip 

#baixa o composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

# instala o laravel Create project "blog"
RUN php composer.phar create-project --prefer-dist laravel/laravel blog
#executa o laravel
ENTRYPOINT [ "php", "blog/artisan", "serve" ]
CMD [ "--host=0.0.0.0" ]