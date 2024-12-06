FROM quay.io/keycloak/keycloak:24.0.2

# Copy your custom data into the Keycloak data directory
COPY ./data /opt/keycloak/data

# Set admin credentials for Keycloak
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Ensure the Keycloak script is executable
RUN chmod +x /opt/keycloak/bin/kc.sh

# Grant full permissions to the data directory
RUN chmod -R 777 /opt/keycloak/data

# Use Keycloak's start script as the entrypoint
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
