/*城市交换函数*/
function switchCity() {
    var fromCity = document.getElementById("fromCity").value;
    var toCity = document.getElementById("toCity").value;
    document.getElementById("fromCity").value = toCity;
    document.getElementById("toCity").value = fromCity;
}

function ticketCheck() {
    var fromCity = document.getElementById("fromCity").value;
    if (fromCity == "北京") {
        alert("全部没票");
    } else { alert("还有票"); }
}








/*点击查询车票改变字体颜色*/


/*改变多选框中背景颜色*/
function colorChange() {
    $(".checkbox").css("background-color", "#F35C5C");
}



/*购票日期选择*/
// function generateDays(month) {
//     var days = caculateDaysOfMonth(month);
//     var contentStr = "<tr>";
//     for (var i = 1; i <= days; i++) {
//         document.write("<td>"+ i + "</td>");
//         contentStr += "<td>" + i + "</td>";

//         if (i % 7 == 0) {
//             contentStr += "</tr><tr>"
//         }
//     }

//     contentStr += "</tr>";
//     return contentStr;

// }
// var caculateDaysOfMonth = function(month) {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days = 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             days = 30;
//             break;
//         case 2:
//             days = 28;
//             break;
//     }
//     return days;
// };
/*var temp = caculateDaysOfMonth;
alert(temp(4));*/
// function nextMonth(month){
//  //month=month+1
//  month += 1;

// }
// var nowMonth = 3;
// nextMonth(nowMonth);
// alert(nowMonth);


// function populateCalendar() {
//     var tbody_left = document.createElement("tbody");
//     document.getElementById("calendarTableLeft").appendChild(tbody_left);
//     tbody_left.innerHTML = generateDays(4);
//     document.getElementById("calendar_div_left_tbody").innerHTML = generateDays(2);
//     /*document.getElementById("calendar_div_right_tbody").innerHTML = generateDays(3);*/
//     var tbody_right = document.createElement("tbody");
//     document.getElementById("calendarTableRight").appendChild(tbody_right);
//     tbody_right.innerHTML = generateDays(5);
// }

// function showDatePicker() {
//     document.getElementById("calendar").style.display = "block";
//     populateCalendar();
// }



/*获取城市列表信息*/
function cityNameList() {
    var district_list = document.getElementById("district-list");
    var cityName = new Array(' ', '北京', '上海', '天津', '重庆', '长沙', '长春', '成都', '福州', '广州', '贵阳', '呼和浩特', '哈尔滨', '合肥', '杭州', '海口', '济南', '昆明', '拉萨', '兰州', '南宁', '南京', '南昌', '沈阳', '石家庄', '太原', '乌鲁木齐', '武汉', '西宁', '西安', '银川', '郑州', '深圳', '厦门');
    var cityStr = "<tr>";
    for (var i = 0; i < cityName.length; i++) {
        cityStr += '<td>' + cityName[i] + '</td>';
        if (i % 7 == 0) {
            cityStr += '</tr><tr>'
        }

    }
    /*break;*/
    cityStr += '</tr>';
    console.log(cityStr);
    return cityStr;
}

function populateDistrict() {
    var tbody = document.createElement('tbody');
    document.getElementById('district-list-table').appendChild(tbody);
    tbody.innerHTML = cityNameList();
    $(".close_city").click(function() {
        $('.district-list').hide();
    })
}

function showCityPicker() {
    document.getElementById("district-list").style.display = "block";
    populateDistrict();
}


/*获取所有事件的函数*/
function init() {
    document.getElementById("fromCity").addEventListener('focus', showCityPicker, false);
    // document.getElementById("setoutDate").addEventListener('focus', showDatePicker, false);


    var hotPlace = new Array('北京', '上海', '天津', '重庆', '长沙', '长春', '成都', '福州', '广州', '贵阳', '呼和浩特', '哈尔滨', '合肥', '杭州', '海口', '济南', '昆明', '拉萨', '兰州', '南宁', '南京', '南昌', '沈阳', '石家庄', '太原', '乌鲁木齐', '武汉', '西宁', '西安', '银川', '郑州', '深圳', '厦门');
    var index = Math.floor(Math.random() * 32 + 0);
    console.log(index);
    document.getElementById('fromCity').value = hotPlace[index];
}
window.addEventListener('load', init, false);
