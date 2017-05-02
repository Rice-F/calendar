'use strict'        //类体中的代码都强制在严格模式中执行

class Calendar {

    //初始化
    constructor(node){
        this.myCalendar = node;         //传递实例
        this.calendar = false;         //日历未创建
        this.display = false;          //日历未显示
        this.date = new Date();
        this.calendar = {};
    }

    //开始绘制input
    start(){
        var cthis = this;               //cthis指向Calendar

        //绘制chooseDate
        var chooseDate = this.creatElement('div');
        chooseDate.className = 'chooseDate';
        var input = this.creatElement('input');
        input.setAttribute('type','text');
        input.setAttribute('placeholder','点击选择时间');
        var iconRili = this.creatElement('i');
        iconRili.className = 'iconfont icon-rili';

        //拼接chooseDate
        chooseDate.appendChild(input);
        chooseDate.appendChild(iconRili);
        this.myCalendar.appendChild(chooseDate);

        //input绑定点击事件
        this.queryElement('.chooseDate>input',true).addEventListener('click',function(){
            if( !this.calendar && !this.display ){                            //日历未创建未显示
                cthis.creat();                                                 //创建日历
            }else if(this.display){                                           //日历已创建已显示
                cthis.hide( this.queryElement('.calendar',true) );            //隐藏日历
                cthis.display = false;                                        //修改初始值为未显示
            }else if(!this.display){                                          //日历已创建未显示
                cthis.show( this.queryElement('.calendar',true) );            //显示日历
                cthis.display = true;                                          //修改初始值为已显示
            }
        })

    }

    //创建并绘制日历
    creat(){

    }

    //创建节点
    creatElement(tag){
        return document.createElement(tag);
    }

    //选择节点
    queryElement(selector,boolean){
        return boolean ? document.querySelector(selector) : document.querySelectorAll(selector);
    }

    //隐藏元素
    hide(elm){
        elm.style.display = 'none';
    }
    //显示元素
    show(elm){
        elm.style.display = '';
    }
}

var calendar = document.getElementById('#calendar');
var myCalendar = new Calendar(calendar);

myCalendar.start();