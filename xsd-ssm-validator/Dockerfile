FROM isaitb/xml-validator:latest
COPY resources /validator/resources/
ENV validator.resourceRoot /validator/resources/
ENV server.port 9090
EXPOSE 9090
WORKDIR /validator
ENTRYPOINT ["java", "-jar", "/validator/validator.jar"]
