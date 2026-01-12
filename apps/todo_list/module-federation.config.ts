import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'todo_list',
  exposes: {
    './Routes': 'apps/todo_list/src/app/remote-entry/entry.routes.ts',
    './Notification': 'apps/todo_list/src/components/todo-notification/todo_notification.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
