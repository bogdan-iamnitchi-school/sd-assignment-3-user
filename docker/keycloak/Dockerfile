FROM quay.io/keycloak/keycloak:24.0.2

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Expose Keycloak's default port
EXPOSE 8080

# Copy your energy-app-keycloak.json file into the appropriate directory
COPY energy-app-keycloak.json /opt/keycloak/data/import/

# Ensure the script has execution permissions
RUN chmod +x /opt/keycloak/bin/kc.sh

# Append the hostname to the keycloak.conf file
RUN echo "hostname=keycloak-containergroup.germanywestcentral.azurecontainer.io" >> /opt/keycloak/conf/keycloak.conf

# Add the --import-realm flag to the entrypoint
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--import-realm"]
