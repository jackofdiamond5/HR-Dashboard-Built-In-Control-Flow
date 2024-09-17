import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      text: 'Dashboard'
    }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: {
      text: 'Team'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      text: 'Events'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
