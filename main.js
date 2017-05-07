'use strict'        //类体中的代码都强制在严格模式中执行

class Calendar {

    //初始化
    constructor(node){
        this.calendarMain = node;       //传递实例
        this.calendarFound = false;         //日历未创建
        this.display = false;          //日历未显示
        this.date = new Date();
        this.calendarDate = {};
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
        this.calendarMain.appendChild(chooseDate);

        //input绑定点击事件
        this.queryElement('.chooseDate>input',true).addEventListener('click',function(){
            if( !this.calendarFound && !this.display ){                       //日历未创建未显示
                cthis.create();                                                 //创建日历
            }else if(this.display){                                           //日历已创建已显示
                this.hide( cthis.queryElement('.calendar',true) );            //隐藏日历
                this.display = false;                                         //修改初始值为未显示
            }else if(!this.display){                                          //日历已创建未显示
                this.show( this.queryElement('.calendar',true) );             //显示日历
                this.display = true;                                           //修改初始值为已显示
            }
        })
    }

    //创建并绘制日历
    create(){
        this.calendarFound = true;                   //修改初始值为已创建
        this.display = true;                         //修改初始值为已显示

        //绘制calecdar
        var calendar = this.creatElement('div');
        calendar.className = 'calendar clear';
        var calendarShow = this.creatElement('div');
        calendarShow.className = 'c-show';                   //日历左边
        var calendarBox = this.creatElement('div');
        calendarBox.className = 'c-box';                     //日历右边

        //拼接calendar
        calendar.appendChild(calendarShow);
        calendar.appendChild(calendarBox);
        this.calendarMain.appendChild(calendar);

        //获取当前时间
        var weeks = ['Sun','Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        this.calendarDate.year = this.date.getFullYear();        //年
        this.calendarDate.month = months[this.date.getMonth()];  //月
        this.calendarDate.day = this.date.getDate();             //日
        this.calendarDate.week = weeks[this.date.getDay()];      //周几

        //获取当月天数
        this.calendarDate.Alldays = this.days(this.calendarDate.year,this.calendarDate.month);
        var calendarDate = this.calendarDate;
        this.initialCalendarShow(calendarDate,calendarShow,calendarBox);
        this.initialCalendarBox(calendarDate,calendarBox,calendarShow);
    }

    //初始化calendarShow
    initialCalendarShow(date,calendarShow,calendarBox){
        var cthis = this;

        //绘制calendarShow
        calendarShow.innerHTML = '';

        var showYear = this.creatElement('a');
        showYear.className = 'year';
        showYear.innerHTML = date.year;
        var showWeek = this.creatElement('a');
        showWeek.className = 'week';
        showWeek.innerHTML = date.week + ',';
        var showDay = this.creatElement('a');
        showDay.className = 'day';
        showDay.innerHTML = date.month  + ' ' +  date.day;

        //拼接calendarShow
        calendarShow.appendChild(showYear);
        calendarShow.appendChild(showWeek);
        calendarShow.appendChild(showDay);
    }

    //初始化calendarBox
    initialCalendarBox(date,calendarBox,calendarShow,animate){
        var cthis = this;

        //绘制calendarBox
        calendarBox.innerHTML = '';

        var control = this.creatElement('div');
        control.className = 'c-year clear';
        var iconZuo = this.creatElement('i');
        iconZuo.className = 'iconfont icon-zuo';
        var currentYear = this.creatElement('a');
        currentYear.className = 'years';
        currentYear.innerHTML = date.month + ' ' + date.year;
        var iconGengDuo = this.creatElement('i');
        iconGengDuo.className = 'iconfont icon-gengduo';

        //拼接calendarBox
        calendarBox.appendChild(control);
        control.appendChild(iconZuo);
        control.appendChild(currentYear);
        control.appendChild(iconGengDuo);

        //显示日历数字部分
        this.dateTable(calendarBox,date,calendarShow,animate);

        //绘制控制按钮
        var controlButton = this.creatElement('div');
        controlButton.className = 'c-button';
        var deterMine = this.creatElement('a');
        deterMine.className = 'go-determine';
        deterMine.innerHTML = 'OK';
        var today = this.creatElement('a');
        today.className = 'go-today';
        today.innerHTML = 'Today';

        //拼接控制按钮
        calendarBox.appendChild(controlButton);
        controlButton.appendChild(deterMine);
        controlButton.appendChild(today);

        //today绑定点击事件
        today.addEventListener('click',function(){
            var now = new Date();
            var weeks = ['Sun','Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
            date.year = now.getFullYear();
            date.month = months[now.getMonth()];
            date.day = now.getDay();
            date.week = weeks[now.getDay()];
            date.Alldays = cthis.days(date.year,date.month);
            cthis.initialCalendarBox(date,calendarBox,calendarShow,'animate');
            cthis.initialCalendarShow(date,calendarShow,calendarBox);
        })

        //ok绑定点击事件
        deterMine.addEventListener('click',function(){
            cthis.hide( cthis.queryElement('.calendar',true) );
            cthis.dis = false;
            cthis.queryElement('.chooseDate>input',true).value = date.day + ' ' + date.month + ' ' + date.year;
            cthis.initialCalendarShow(date,calendarShow,calendarBox);
        })
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

    //获取当月天数
    days(year,month){
        var days = 30;
        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 2:
                if( year % 4 === 0 && year % 100 !== 0 ){
                    days = 29;
                }else if( year % 400 === 0 ){
                    days = 29;
                }else{
                    days = 28;
                }
                break;
        }
        return days;
    }

    //显示日历数字部分
    dateTable(calendarBox,date,calendarShow,animate){
        var cthis = this;

        //绘制date-box
        var table = this.creatElement('table');
        var thead = this.creatElement('thead');
        var tr = this.creatElement('tr');
        var header = ['S','M','T','W','T','F','S'];
        header.forEach(function(val){
            var th = cthis.creatElement('th');
            th.innerHTML = val;
            tr.appendChild(th);
        })

        //拼接date-box
        table.appendChild(thead);
        thead.appendChild(tr);
        table.className == 'animate' ? '' : 'animate';

        //得到每月第一天周几
        var tbody = this.creatElement('tbody');
        var firstDay = new Date(date.year + '/' + date.month + '/' + 1).getDay();

        //计算出一个月中的每个周日
        for(var i=1;i<=date.Alldays;i++){
            if( i===1 || i + firstDay === 8 ){
                var tr = this.creatElement('tr');         //每个周日另起一行
            }
            var td = this.creatElement('td');
            
        }
    }

}

var calendarUnit = document.getElementById('calendar');
var myCalendar = new Calendar(calendarUnit);

myCalendar.start();