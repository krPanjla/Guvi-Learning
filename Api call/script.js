var request= new XMLHttpRequest();
var ur;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var sum=0;
    var countrydata=JSON.parse(this.response )
    //console.log(countrydata)
// if((countrydata[i].name)=='India')
// {console.log(countrydata[i].nativeName)}
    
    try{
        if(countrydata.length===250){

            throw new SyntaxError("Just to check");
}    }
catch(ob){

    alert(ob);
    
}


for(i in countrydata){      
    
     sum =sum + (countrydata[i].population);

}
console.log('Total population is :'+sum)

}