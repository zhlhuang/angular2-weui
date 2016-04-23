import {Component, OnInit} from 'angular2/core';
import {ButtonComponent} from './Component/button.component';
import {ListComponent} from './Component/list.component';
import {RadioComponent} from './Component/radio.component';

@Component({
	selector: 'app-cell',
	templateUrl: '/template/app.cell.html',
	directives: [ButtonComponent, ListComponent,RadioComponent],
	styles: [".m_top{margin-top:15px}"]
})

export class appCellComponent implements OnInit {
	constructor(){};
	//不带说明的列表项
	list_0 = [{ title: "标题", url: "/cell" }, { title: "标题2", url: "/cell" }];
	//带说明的列表项
	list_1 = [{ title: "标题", ft: "说明文字", url: "/cell" }, { title: "标题2", ft: "说明文字2", url: "/cell" }];
	//带图片，说明的列表项
	list_2 = [
		{
			title: "标题",
			ft: "说明文字",
			url: "/cell",
			img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		},
		{
			title: "标题2",
			ft: "说明文字2",
			url: "/cell",
			img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
		}
	];
	 radio_datas=[
        {
            title:"radio1",
            value:"1",
        },
        {
            title:"radio2",
            value:"2"
        },
		{
			title:"radio3",
			value:"3"
		}
    ];
	radio_value=2;
	show_radio(){
		console.log(this.radio_value)
	}
	ngOnInit() {
	}
}