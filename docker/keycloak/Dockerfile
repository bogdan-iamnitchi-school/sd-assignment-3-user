FROM quay.io/keycloak/keycloak:24.0.2

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

#USER root
#
#RUN whoami
#
#COPY ./data /opt/keycloak/data
#
#RUN chown -R keycloak:keycloak /opt/keycloak/data
#
#RUN chmod -R 777 /opt/keycloak/data

RUN chmod +x /opt/keycloak/bin/kc.sh
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
