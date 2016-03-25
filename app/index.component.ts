import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-app',
	templateUrl: '/template/app.html',
	directives: [ROUTER_DIRECTIVES]

})
export class IndexComponent implements OnInit  {
}