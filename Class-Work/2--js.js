 var pname= document.createElement('label');
 pname.innerHTML='Enter name <br>'
 //pname.setAttribute()
 document.body.appendChild(pname)

 var enterpname=document.createElement('input');
// enterpname.innerHTML=''
 document.body.appendChild(enterpname);

var break1=document.createElement('br');
document.body.appendChild(break1);



 var email= document.createElement('label');
 email.innerHTML='Enter your email<br>';
 document.body.appendChild(email)

 var email=document.createElement('input');
// enterpname.innerHTML=''
 document.body.appendChild(email);

 var break1=document.createElement('br');
 document.body.appendChild(break1);


 var mobileNo = document.createElement('label');
 mobileNo.innerHTML='Enter your name<br>';
  document.body.appendChild(mobileNo);
 

 var mobileNo=document.createElement('input');
 document.body.appendChild(mobileNo)

 
 var break1=document.createElement('br');
 document.body.appendChild(break1);


 
 var btn=document.createElement('input');
 btn.setAttribute("type", "submit")
 document.body.appendChild(btn);


 var table=document.createElement('table');
 table.setAttribute('id','table');
 document.body.appendChild(table);


 btn.addEventListener("click",()=>{
     var row=document.createElement('tr');
     var row=document.createElement('tr');
     var row=document.createElement('tr');
     var row=document.createElement('tr');
     row.setAttribute("style","border: red")
table.appendChild(row);

 })


 