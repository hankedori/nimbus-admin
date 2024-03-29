import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';
import { SimpleLayoutComponent }    from './layouts/simple-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'orders',
                loadChildren: 'app/orders/orders.module#OrdersModule'
            },
            {
                path: 'components',
                loadChildren: 'app/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: 'app/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: 'app/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'menu',
                loadChildren: 'app/menu/menu.module#MenuModule'
            },
            {
                path: 'analytics',
                loadChildren: 'app/analytics/analytics.module#AnalyticsModule'
            },
            {
                path: 'charts',
                loadChildren: 'app/chartjs/chartjs.module#ChartJSModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
