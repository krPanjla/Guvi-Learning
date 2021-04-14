document.body.style.backgroundColor = "black";


//creating container class
let mainContainer=document.createElement('div');
//creating row class
let row=document.createElement('div');
mainContainer.className="container";
row.className='row';


mainContainer.appendChild(row);
document.body.appendChild(mainContainer);



let restCountryUrl="https://restcountries.eu/rest/v2/all";


async function mainFunction(){
try {
  let restCountryResponse=await fetch(restCountryUrl);
  let restCountryResult=await restCountryResponse.json();
  console.log(restCountryResult);

  function createCard(){
    var length=restCountryResult.length;
    for(i=0;i<length;i++){
      var countryName=restCountryResult[i].name;
      var countryFlag=restCountryResult[i].flag;
      var countryCapital=restCountryResult[i].capital;
      var countryNativeName=restCountryResult[i].nativeName;
      var countryPopulation=restCountryResult[i].population;

      //Element creation
      let column=document.createElement('div');
      let card=document.createElement('div');
      let cardBody=document.createElement("div");
      let image=document.createElement("img");
      let title=document.createElement("div");
      let list=document.createElement("ul");
      let item1=document.createElement("li");
      let item2=document.createElement("li");
      let item3=document.createElement("li");
      

      //set attributes to elements
      column.className='col-4';
      card.className="card";
      card.style="margin:5px;"
      cardBody.className="card-body"
      image.className="card-img";
      image.src=countryFlag;
      image.style="height:200px"
      title.className="card-header";
      title.style="text-align:center;font-weight:bold;color:white;background:black"
      title.innerText=countryName;
      list.className="list-group list-group-flush";
      list.style="text-align:center"
      item1.className="list-group-item"
      item2.className="list-group-item"
      item3.className="list-group-item"
      item1.innerText="Capital: "+countryCapital;
      item2.innerText="Native name: "+countryNativeName;
      item3.innerText="Population: "+countryPopulation;
      


      //appending elements
      card.appendChild(title);
      card.appendChild(cardBody);
      cardBody.appendChild(image);
      cardBody.appendChild(list);
      list.appendChild(item1)
      list.appendChild(item2)
      list.appendChild(item3)
      
      
      column.appendChild(card);
      row.appendChild(column);
      
    }
    
  
  }
  createCard();

  
} catch (error) {
  
}
}


mainFunction();