/**
 * 列表组件
 * @param type string 类型 有参数【access,跳转列表】
 * @param datas array 列表显示数据
 *        [{
 *             title:'列表显示文字',
 *             ft:'列表说明文字，可选',
 *             url:'跳转链接，可选',
 *             img:'显示图片的src，可选'
 *        }]
 * @param imgStyle object 图片样式对象（注意margin-right 写成 marginRight） 默认是图片自身宽度
 */
import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'ui-list',
    template: `<div [ngClass]="typeClass">
    <a class="weui_cell" *ngFor="#d of datas" href="{{d.url}}">
    <div class="weui_cell_hd" *ngIf="d.img">
    <img src="{{d.img}}" alt="" [ngStyle]="imgStyle" >
    </div>
    <div class="weui_cell_bd weui_cell_primary">
    <p>{{d.title}}</p>
    </div>
    <div *ngIf="d.ft" class="weui_cell_ft">{{d.ft}}</div>
    </a>
    </div>`,
    inputs:['type','datas','imgStyle'],
    styles:[`.weui_cells a.weui_cell {color: inherit;} .weui_cells{margin-top:0rem} .weui_cell_hd img{imgStyle}`]
})

export class ListComponent implements OnInit {
    type='';
    typeClass={};
    imgStyle={
        width:'',
        marginRight:'5px',
        display:'block'
    }
    datas=[{
        title:"标题文字",
        ft:"说明文字",
        url:"http://baidu.com",
        img:''
    },{
        title:"标题文字",
        ft:"说明文字",
        url:"http://baidu.com",
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
    }]
    setClasses(){
        this.typeClass={
            weui_cells:true,
            weui_cells_access:this.type === 'access'
        }
    }

    ngOnInit() {
       this.setClasses()
    }
}
