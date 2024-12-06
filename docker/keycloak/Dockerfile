FROM quay.io/keycloak/keycloak:24.0.2

COPY ./data /opt/keycloak/data

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

CMD ["start-dev"]

EXPOSE 8080