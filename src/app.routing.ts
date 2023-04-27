import {provideRoutes, Route} from "@angular/router";

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./app/pages/dashboard').then(c => c.DashboardPage)
    }
]
export const appRouting = [provideRoutes(routes)]
