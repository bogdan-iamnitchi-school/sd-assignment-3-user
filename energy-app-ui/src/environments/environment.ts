export const environment = {
  usersURL: 'http://user-containergroup.germanywestcentral.azurecontainer.io:8081',
  usersPath: '/api/v1/user',

  deviceURL: 'http://device-containergroup.germanywestcentral.azurecontainer.io:8082',
  devicesPath: '/api/v1/device',
  deviceUsersPath: '/api/v1/device/user',

  monitorURL: 'http://monitor.localhost',
  monitorHost: 'monitor.localhost',
  monitorWsPath: '/ws/notification',
  monitorPath: '/api/v1/monitor',

  chatURL: 'http://chat.localhost',

  keycloakURL: 'http://keycloak-containergroup.germanywestcentral.azurecontainer.io:8080',
  keycloakRealm: 'energy-app',
  keycloakClientId: 'energy-app-id',
};
