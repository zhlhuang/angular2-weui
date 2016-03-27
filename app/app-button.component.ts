import {Component,OnInit} from 'angular2/core';
import {ButtonComponent} from './Component/button.component';

@Component({
	selector:'app-button',
	templateUrl:'/template/app.button.html',
	directives: [ButtonComponent],
	styles: [".m_top{margin-top:15px}"]
})

export class appButtonComponent implements OnInit {
	ngOnInit (){

	}
}