import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./route-wraper-modules/manage-wrapper.module').then((m) => m.ManageWrapperModule),
  },
  {
    path: 'manage/stores/:id',
    loadChildren: () => import('./route-wraper-modules/store-wrapper.module').then((m) => m.StoreWrapperModule),
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./route-wraper-modules/dashboard-wrapper.module').then((m) => m.DashboardWrapperModule),
  // },
  // {
  //   path: 'builder',
  //   loadChildren: () => import('./builder/builder.module').then((m) => m.BuilderModule),
  // },
  // {
  //   path: 'crafted/pages/profile',
  //   loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  //   data: { layout: 'light-sidebar' },
  // },
  // {
  //   path: 'crafted/account',
  //   loadChildren: () => import('./route-wraper-modules/account-wrapper.module').then((m) => m.AccountWrapperModule),
  //   // data: { layout: 'dark-header' },
  // },
  // {
  //   path: 'crafted/pages/wizards',
  //   loadChildren: () => import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  //   data: { layout: 'light-header' },
  // },
  // {
  //   path: 'crafted/widgets',
  //   loadChildren: () => import('../modules/widgets-examples/widgets-examples.module').then((m) => m.WidgetsExamplesModule),
  //   data: { layout: 'light-header' },
  // },
  // {
  //   path: 'apps/chat',
  //   loadChildren: () => import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  //   data: { layout: 'light-sidebar' },
  // },
  // {
  //   path: 'apps/users',
  //   loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  // },
  // {
  //   path: 'apps/roles',
  //   loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  // },
  // {
  //   path: 'apps/permissions',
  //   loadChildren: () => import('./permission/permission.module').then((m) => m.PermissionModule),
  // },
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: 'error/404',
  // },
];

export { Routing };
