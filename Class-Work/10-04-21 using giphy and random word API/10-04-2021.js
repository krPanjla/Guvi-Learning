var container=document.createElement('div');
container.id="mainDiv";
container.style="text-align:center"
document.body.appendChild(container);

let randomWordUrl="https://random-word-api.herokuapp.com/word?number=1";
let gif="https://api.giphy.com/v1/gifs/search?api_key=RTnSCCOdbs2xei25GaMZQAoewuhujHtv";


//Method 1 using promise chaining

// fetch(randomWordUrl)
// .then((wordReasponse)=>{
//   return wordReasponse.json();
// })
// .then((randomWord)=>{
//    var word=randomWord[0];
   
//    function displayWord(word){
//       var tag=document.createElement('h1');
//       tag.innerHTML='Random Word is: '+word;
//       container.appendChild(tag);
   
//    }
//    displayWord(word);
//    return fetch(gif+"&q="+word+"&limit=25&offset=0&rating=g&lang=en")


// })
// .then((gifResponse)=>{
//    return gifResponse.json();
// })
// .then((gifResult)=>{
   
//    var url1=gifResult.data[0].images.original.url
//    var url2=gifResult.data[0].images.downsized.url
//    var url3=gifResult.data[0].images.downsized_large.url
//    var url4=gifResult.data[0].images.downsized_medium.url
//    var url5=gifResult.data[0].images.downsized_still.url
//    console.log(url1,url2,url3,url4,url5);

// function displayGif(src){
// var obj=document.createElement('object');
// obj.data=src;
// obj.style="margin:5px";
// container.appendChild(obj)
// }
// displayGif(url1)
// displayGif(url2)
// displayGif(url3)
// displayGif(url4)
// displayGif(url5)
// })
// .catch((err)=>{
//    console.log(err)
// })



//Methid 2 using async and await 

async function main(){
   try {
      let randomWordResponse=await fetch(randomWordUrl);
      let randomWord=await randomWordResponse.json();
      let word= randomWord[0];
      function displayWord(word){
               var tag=document.createElement('h1');
               tag.innerHTML='Random Word is: '+word;
               container.appendChild(tag);
            
            }
            displayWord(word);
      let gifResponse= await fetch(gif+"&q="+word+"&limit=25&offset=0&rating=g&lang=en")
      let gifResult= await gifResponse.json();
      

      var url1=gifResult.data[0].images.original.url
   var url2=gifResult.data[0].images.downsized.url
   var url3=gifResult.data[0].images.downsized_large.url
   var url4=gifResult.data[0].images.downsized_medium.url
   var url5=gifResult.data[0].images.downsized_still.url
   console.log(url1,url2,url3,url4,url5);

   function displayGif(src){
   var obj=document.createElement('object');
   obj.data=src;
   obj.style="margin:5px";
   container.appendChild(obj)
   }
   displayGif(url1)
   displayGif(url2)
   displayGif(url3)
   displayGif(url4)
   displayGif(url5)

   
   } catch (error) {

      console.log(error)
   }
  

}
main();