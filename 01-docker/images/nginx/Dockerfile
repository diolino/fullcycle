FROM nginx:latest
# por padrão entra como root, mas caso queira outro usuário, tem que pegar um que já existe na imagem.
#USER root
#WORKDIR /app
#RUN apt-get update && \
#    apt-get install vim -y
COPY html/ /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]