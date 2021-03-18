var request= new XMLHttpRequest();
var ur;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var sum=0;
    var countrydata=JSON.parse(this.response )
    console.log(countrydata)
    for(x in countrydata){
     if((countrydata[x].name))
{console.log(countrydata[x].flag)}}
    
for(i in countrydata){
    
     sum =sum + (countrydata[i].population);

}
console.log('Total population is :'+sum)

}