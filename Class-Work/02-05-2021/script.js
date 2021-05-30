function creatEle(eleName,className="",value=""){
    var ele=document.createElement(eleName);
    ele.className=className;
    ele.innerHTML=value;
    return ele;

}


var container=creatEle("div","container");
var table=creatEle("table","table");
var theading=creatEle("thead","thead-dark");
var headingRow=creatEle("tr");
var th1=creatEle("th","","Name");
var th2=creatEle("th","","Email");
headingRow.append(th1,th2);
theading.append(headingRow);

var tbody=creatEle("tbody");
var bodyRow=creatEle("tr");
var td1=creatEle("td","","Kartik")
var td2=creatEle("td","","kr.panjla.3@gmail.com")
bodyRow.append(td1,td2);
tbody.append(bodyRow);

var bodyRow2=creatEle("tr");
var td1=creatEle("td","","Panjla")
var td2=creatEle("td","","panjla.3@gmail.com")
bodyRow2.append(td1,td2);
tbody.append(bodyRow2);



table.append(theading,tbody);
container.append(table);

var button =creatEle("button","0","Click me");
button.classList.add("btn","btn-primary");
button.addEventListener("click",foo)

function foo(){
var p=creatEle("p","display-1 danger","Button is clicked")
document.body.append(p)
}

container.append(button)
document.body.append(container)