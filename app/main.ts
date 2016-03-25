import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {IndexComponent} from './index.component';
import {appButtonComponent} from './app-button.component';

@Component({
	selector: 'my-app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
	{
	path: '/index',
			name: 'Index',
			component: IndexComponent,
			useAsDefault: true //默认路由
	},
	{
	path: '/button',
    name: 'Button',
    component: appButtonComponent,
	}
])

class AppComponent {
}

bootstrap(AppComponent);