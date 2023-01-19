FROM httpd:alpine
COPY ./ssm-editor-web /usr/local/apache2/htdocs
EXPOSE 8080
WORKDIR /usr/local/apache2/htdocs
CMD ["httpd-foreground"]
