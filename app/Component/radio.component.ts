/**
 * 单选组件
 * @param title 选择标题
 * @param name 默认是radio1 如果有多个radio 可以传这个值区分
 * @param value 默认选中的值
 * @param datas array 列表显示数据
 *        [{
 *             title:'列表显示文字',
 *             value:'标题对应的值'
 *        }]
 * @outputs radio_value 调用该组件需要返回该组件的选择结果
 */

import {Component, OnInit,EventEmitter} from 'angular2/core';

@Component({
    selector: 'ui-radio',
    template: `<div class="weui_cells_title">{{title}}</div>
    <div class="weui_cells weui_cells_radio">
        <label *ngFor="#d of datas"  class="weui_cell weui_check_label">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>{{d.title}}</p>
                </div>
                <div class="weui_cell_ft">
                    <input type="radio" class="weui_check" (change)="setValue(d.value)" name="{{name}}" value="d.value"  checked="{{d.value==value?'checked':''}}"  >
                    <span class="weui_icon_checked"></span>
                </div>
        </label>
    </div>`,
    inputs: ['title', 'name', 'value','datas'],
    outputs:['radio_value']
})

export class RadioComponent implements OnInit {
    title="";
    name="radio1";
    value="";
    model={};
    datas=[];
    
    radio_value=new EventEmitter();
    setValue(value){
        this.value=value;
        this.radio_value.next({value:this.value}) //向调用该组件的对象返回选择的值
    }
    ngOnInit() {
    }
}