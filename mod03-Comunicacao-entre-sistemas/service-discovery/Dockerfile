FROM consul:1.10

# Diretório base no container
WORKDIR /

# Build da aplicação go
RUN apk -U add nginx
RUN apk -U add bind-tools
RUN mkdir /var/lib/consul
RUN mkdir /etc/consul.d
RUN mkdir /usr/share/nginx/html -p
COPY ./clients/nginx/default.conf ./etc/nginx/http.d/
COPY ./clients/nginx/index.html ./usr/share/nginx/html/