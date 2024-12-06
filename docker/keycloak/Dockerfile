FROM quay.io/keycloak/keycloak:24.0.2

COPY ./data /opt/keycloak/data

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

RUN chmod +x /opt/keycloak/bin/kc.sh

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
