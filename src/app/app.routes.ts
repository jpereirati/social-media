import { Route } from '@angular/router';
import { AuthGuard } from '@social-media/lib/data-access';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
