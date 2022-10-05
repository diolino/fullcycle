FROM nginx:latest
COPY html /usr/share/nginx/html

ENTRYPOINT [ "/doccker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off" ]


