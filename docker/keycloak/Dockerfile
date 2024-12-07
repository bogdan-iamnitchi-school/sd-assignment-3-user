FROM quay.io/keycloak/keycloak:23.0.5

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Copy your energy-app-keycloak.json file into the appropriate directory
COPY ./config/energy-app-keycloak.json /opt/keycloak/data/import/

# Ensure the script has execution permissions
RUN chmod +x /opt/keycloak/bin/kc.sh

EXPOSE 8080

# Add the --import-realm flag to the entrypoint
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--import-realm"]
