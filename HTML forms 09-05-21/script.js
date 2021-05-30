var btn=document.getElementById("submit");
btn.addEventListener("click",addData)

function createTableCell(eleName,innerHtml=""){
    var element=document.createElement(eleName);
    element.innerHTML=innerHtml;
     
    return element;
}


function addData(e){
    e.preventDefault()

    var fname=document.getElementById("firstNameInput")
    var firstName=fname.value;
    fname.value=""
    
    var lname=document.getElementById("lastNameInput")
    var lastName=lname.value;
    lname.value=""

    var add=document.getElementById("address")
    var address=add.value;
    add.value=""


    var pinCode=document.getElementById("pin")
    var pin=pinCode.value;
    pinCode.value=""
    
    var st=document.getElementById("state")
    var state=st.value;
    st.value=""

    var coun=document.getElementById("country");
    var country=coun.value;
    coun.value=""

    var gen=document.getElementsByName("gender")
    for(i=0;i<gen.length;i++){
        if(gen[i].checked){
           var gender= gen[i].value 
           
        }
        
    }
  

    

     var food=document.getElementsByName("choiceOfFood")

     var choosedFood=[];
    for(i=0;i<food.length;i++){
        
        if(food[i].checked){
           // console.log(food[i].value)
            choosedFood.push(food[i].value+"<br>") 
           
           
           
        }
        
        
    }

   

    var tbody=document.getElementById("tbody");

    var tRow=createTableCell("tr");

    var tDef1=createTableCell("td",firstName);
    tRow.append(tDef1)

    var tDef2=createTableCell("td",lastName);
    tRow.append(tDef2)

    var tDef3=createTableCell("td",address);
    tRow.append(tDef3)

    var tDef4=createTableCell("td",pin);
    tRow.append(tDef4)

    var tDef5=createTableCell("td",gender);
    tRow.append(tDef5)

  
    var tDef6=createTableCell("td",choosedFood);
    tRow.append(tDef6)
   // console.log(choosedFood)

    var tDef7=createTableCell("td",state);
    tRow.append(tDef7)

    var tDef8=createTableCell("td",country);
    tRow.append(tDef8)

    tbody.append(tRow);
  


 

   

    
    

}