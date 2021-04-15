//creating container class
let mainContainer=document.createElement('div');
//creating row class
let row=document.createElement('div');
mainContainer.className="container";
row.className='row';


mainContainer.appendChild(row);
document.body.appendChild(mainContainer);

document.body.style.backgroundColor = "black";

let restCountryUrl="https://restcountries.eu/rest/v2/all";
let openWeatherUrl="api.openweathermap.org/data/2.5/weather?"

async function main(){

    try {
        let restCountryResponse=await fetch(restCountryUrl);
        let restCountryResult=await restCountryResponse.json();

        for(i in restCountryResult){
            var countryName=restCountryResult[i].name;
            var countryFlag=restCountryResult[i].flag;
            var countryCapital=restCountryResult[i].capital;
            var countryNativeName=restCountryResult[i].nativeName;
            var countryPopulation=restCountryResult[i].population;
           // var coordinates=restCountryResult[i].latlng;

            var column=createElement("div"," col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4");
            row.appendChild(column);

            var card=createElement("div","card text-center","margin:5px; height:500px")
            column.appendChild(card);

            var title=createElement("div","card-header","text-align:center;font-weight:bold;color:white;background:black",countryName,"");
            card.appendChild(title);

            var cardBody=createElement("div","card-body")
            card.appendChild(cardBody);

            var image =createElement("img","card-img","height:200px")
            image.src=countryFlag;
            cardBody.appendChild(image);

            var list=createElement("ul","list-group list-group-flush","text-align:center")
            cardBody.appendChild(list);

            var item1=createElement("li","list-group-item","","Capital: "+countryCapital);
            list.appendChild(item1);

            var item2=createElement("li","list-group-item","","Native name: "+countryNativeName);
            list.appendChild(item2);

            var item3=createElement("li","list-group-item","","Population: "+countryPopulation);
            list.appendChild(item3);

            var button=createElement("a","btn btn-primary","margin:5px","Click For Weather",i);
            cardBody.appendChild(button);

            button.addEventListener('click',displayWeather)
        }

        async function displayWeather(e){
            try {   
            let id=e.target.id
            let lat=restCountryResult[id].latlng[0];
            let lon=restCountryResult[id].latlng[1];
              
            let weatherResponse= await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=3b2bef81629dcd6055bad2ef4630bc26");
              let result=await weatherResponse.json();
             let weatherDescription=result.weather[0].description
              let humidity=result.main.humidity
             let temperature=result.main.temp
             alert("Weather Description is: "+weatherDescription+", Humidity: "+humidity+", Temperature is: "+temperature)
            } catch (error) {
              alert("Something gone wrong "+error)
              console.log(error);
            }
            
          }

        function createElement(ele,classN="",style="",innerText="",id=""){
           try {
            var element=document.createElement(ele);
            element.id=id;
            element.className=classN;
            element.style=style;
            element.innerText=innerText;

            return element;
           } catch (error) {
               console.log(error)
           } 
;        }

    } catch (error) {
        console.log(error)
    }
}
main();