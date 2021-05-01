
//Function to create Elements
function createElements(element,classN="",id="",innerText=""){

    var element=document.createElement(element);
    element.className=classN;
    element.id=id;
    element.innerText=innerText;
    return element;

}

var navbar=createElements("nav","navbar  navbar-expand-xl navbar-dark bg-dark");
navbar.style.position="sticky"
navbar.style.top="0px"
navbar.style.zIndex="1"

document.body.appendChild(navbar); 


var mainContainer=createElements("div","container");
mainContainer.id="mainContainer"
document.body.appendChild(mainContainer);



// var row1=createElements("div","row","row1");
// mainContainer.appendChild(row1)

var row1=createElements("div","row","row2");
mainContainer.appendChild(row1)



var navContainer=createElements("div","container-fluid");
navbar.appendChild(navContainer);

var navBrand=createElements("div","btn navbar-brand","","TopStories");
navBrand.href="#";
navContainer.appendChild(navBrand);
navBrand.addEventListener("click",defaultData);


var button=createElements("button","navbar-toggler");
button.type="button"
button.id="";


button.setAttribute("data-bs-toggle","collapse");
button.setAttribute("data-bs-target","#navbarSupportedContent")
button.setAttribute("aria-controls","navbarSupportedContent" )
button.setAttribute("aria-expanded","false");
button.setAttribute("aria-label","Toggle navigation");
navContainer.appendChild(button);

var icon=createElements("span","navbar-toggler-icon");
button.appendChild(icon);

var navBarCollapse=createElements("div","collapse navbar-collapse","navbarSupportedContent");
navContainer.appendChild(navBarCollapse);

var list=createElements("ul","navbar-nav me-auto mb-2 mb-lg-0");
navBarCollapse.appendChild(list);

//Function to create Categories
function categories(id,ItemName,href=""){
   
    
     var item=createElements("li","nav-item");
    list.appendChild(item);

    category=createElements("button","btn active",id,ItemName);
    category.style="border:none"
    category.setAttribute("aria-current","page");
    category.style="color:white"
    
    item.appendChild(category)  

    document.getElementById(id).addEventListener("click",fetchingNews); 


}

categories("home","Home")
categories("world","World")
categories("politics","Politics")
categories("magazine","Magazine")
categories("technology","Technology")
categories("science","Science")
categories("health","Health")
categories("sports","Sports")
categories("arts","Arts")
categories("fashion","Fashion")
categories("food","Food")
categories("travel","Travel")




async function fetchingNews(e){
   
    removeElements();
    var row1=createElements("div","row","row2");
    mainContainer.appendChild(row1)

    try {
    
    
        var section=e.target.id;
        var url="https://api.nytimes.com/svc/topstories/v2/";
        var remainingUrl_key=".json?api-key=cOzElZAmchDaO8RejRlC7cWFXeHUGggS";
        var nytimesResponse= await fetch(url+section+remainingUrl_key);
        var nytimesResult=await nytimesResponse.json();
        
        for(i in nytimesResult.results){
            var abstract=nytimesResult.results[i].abstract;
            var byline=nytimesResult.results[i].byline;
            var created_date=nytimesResult.results[i].created_date;
            var item_type=nytimesResult.results[i].item_type;
            var section=nytimesResult.results[i].section;
            var title=nytimesResult.results[i].title;
            var short_url=nytimesResult.results[i].short_url;
            var image=nytimesResult.results[i].multimedia[3].url;
         
            
            var column=createElements("div"," col-12 ");
            row1.appendChild(column);
           
            var card=createElements("div","card ")
            card.style="margin:10px"
            column.appendChild(card);

            var cardRow=createElements("div","row no-gutters");
            card.appendChild(cardRow);


            var cardColumn1=createElements("div","col-md-8");
            cardRow.appendChild(cardColumn1);

            //Card body
            var cardBody=createElements("div","card-body");
            cardColumn1.appendChild(cardBody);

            var cardColumn2=createElements("div","col-md-4 ");
           // cardColumn2.style.justifyContent="center"
           cardColumn2.style="max-height:100%"
            cardRow.appendChild(cardColumn2);

            var img=createElements("img","card-img")
            img.src=image;
           
            cardColumn2.appendChild(img);

            
            var cat=createElements("h5","card-title","",section.toUpperCase()+" ("+item_type+")");
            cat.style.color="blue"
            cat.style.fontWeight="bold"
            cardBody.appendChild(cat)
           
             var title=createElements("h4","card-title","",title);
             cardBody.appendChild(title)

             var date=createElements("p","card-text","",created_date);
             date.style.color="gray"
             cardBody.appendChild(date)
         
             var abstract=createElements("p","card-text","",abstract);
             cardBody.appendChild(abstract)

             var byline=createElements("p","card-text","",byline);
             byline.style.color="gray"
             cardBody.appendChild(byline)



             var continue_reading=createElements("a","card-link","","Continue reading");
             continue_reading.href=short_url;
             continue_reading.target="_blank"
             cardBody.appendChild(continue_reading)
     
             

        }
         
           

    } catch (error) {
        console.log(error)
    }
    
}



async function defaultData(){
    removeElements();
    var row1=createElements("div","row","row2");
    mainContainer.appendChild(row1)
    try {
         var nytimesResponse= await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=cOzElZAmchDaO8RejRlC7cWFXeHUGggS");
         var nytimesResult= await nytimesResponse.json()
        console.log(nytimesResult)

        for(i in nytimesResult.results){
            var abstract=nytimesResult.results[i].abstract;
            var byline=nytimesResult.results[i].byline;
            var created_date=nytimesResult.results[i].created_date;
            var item_type=nytimesResult.results[i].item_type;
            var section=nytimesResult.results[i].section;
            var title=nytimesResult.results[i].title;
            var short_url=nytimesResult.results[i].short_url;
            var image=nytimesResult.results[i].multimedia[3].url;
         
            
            var column=createElements("div"," col-12 ");
            row1.appendChild(column);
           
            var card=createElements("div","card ")
            card.style="margin:10px"
            column.appendChild(card);

            var cardRow=createElements("div","row no-gutters");
            card.appendChild(cardRow);


            var cardColumn1=createElements("div","col-md-8");
            cardRow.appendChild(cardColumn1);

            //Card body
            var cardBody=createElements("div","card-body");
            cardColumn1.appendChild(cardBody);

            var cardColumn2=createElements("div","col-md-4");
          // cardColumn2.style.textAlign="center"
           //cardColumn2.style.justifyContent="center"
            cardRow.appendChild(cardColumn2);

            var img=createElements("img","card-img")
            img.alt=".........Loading..........."
            img.src=image;
            //img.style.objectFit = "fit"; 
            cardColumn2.appendChild(img);

            
            var cat=createElements("h5","card-title","",section.toUpperCase()+" ("+item_type+")");
            cat.style.color="blue"
            cat.style.fontWeight="bold"
            cardBody.appendChild(cat)
           
             var title=createElements("h4","card-title","",title);
             cardBody.appendChild(title)

             var date=createElements("p","card-text","",created_date);
             date.style.color="gray"
             cardBody.appendChild(date)
         
             var abstract=createElements("p","card-text","",abstract);
             cardBody.appendChild(abstract)

             var byline=createElements("p","card-text","",byline);
             byline.style.color="gray"
             cardBody.appendChild(byline)



             var continue_reading=createElements("a","card-link","","Continue reading");
             continue_reading.href=short_url;
             continue_reading.target="_blank"
             cardBody.appendChild(continue_reading)
     
             

        }
    } catch (error) {
       console.log(error)
    }


}
 defaultData();



//function used to remove previous elements
 function removeElements(){
     var ele=document.getElementById("row2")
     ele.remove();

 }
 

 