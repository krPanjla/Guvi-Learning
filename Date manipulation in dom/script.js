//function used to create element 
function createEle(eleName,eleContent="",eleClass="",eleId=""){
    var element=document.createElement(eleName);
    element.innerHTML=eleContent;
    element.className=eleClass;
    element.id=eleId;

    return element;

}

var container=createEle("div");
container.style.padding="30px"
container.style.textAlign="center"

var dateInput=createEle("input","","","date");
dateInput.type="date";
container.append(dateInput);

var calculateBtn=createEle("button","Calculate");
calculateBtn.addEventListener("click",calculate);
container.append(calculateBtn);

var cont=createEle("div","","","main");
container.append(cont);



document.body.append(container);


//function which is calculating the differences

function calculate(){
   
    var dob=document.getElementById("date").value
    var currentDate= new Date();
    var dateOfBirth= new Date(dob);

    var birthYear=dateOfBirth.getFullYear();
    var currentYear=currentDate.getFullYear();

    var millisecDiff=parseInt(currentDate.getTime())-parseInt(dateOfBirth.getTime());
    var secDiff=Math.floor(millisecDiff/1000);
    var minDiff=Math.floor(secDiff/60);
    var hoursDiff=Math.floor(minDiff/60);
    var dayDiff=Math.floor(hoursDiff/24);
    var yearDiff=currentYear-birthYear;
    var monthDiff=(yearDiff*12)+(currentDate.getMonth()-dateOfBirth.getMonth());


    var ele=document.getElementById("main");
    ele.innerHTML=`<br>Your Date of Birth is: ${dateOfBirth}<br>
    Your year difference is: ${yearDiff} <br>
    Your month difference is: ${monthDiff} <br>
    Your day difference is: ${dayDiff} <br>
    Your hour difference is: ${hoursDiff} <br>
    Your seconds difference is: ${secDiff}<br>
    Your millisecond difference is: ${millisecDiff}`



}



