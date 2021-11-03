import { Route } from '@vaadin/router';
import './views/main-layout';
import './views/statusupdates/statusupdates-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'statusupdates-view',
    icon: '',
    title: '',
  },
  {
    path: 'forum',
    component: 'statusupdates-view',
    icon: 'la la-list',
    title: 'Status updates',
  },
  {
    path: 'contacts',
    component: 'contacts-view',
    icon: 'la la-columns',
    title: 'Contacts',
    action: async (_context, _command) => {
      await import('./views/contacts/contacts-view');
      return;
    },
  },
  {
    path: 'about',
    component: 'about-view',
    icon: 'la la-file',
    title: 'About',
    action: async (_context, _command) => {
      await import('./views/about/about-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
