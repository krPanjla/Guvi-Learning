var randomWordUrl = "https://random-word-api.herokuapp.com//word?number=1";
var giphy = "https://api.giphy.com/v1/gifs/search?api_key=RTnSCCOdbs2xei25GaMZQAoewuhujHtv&limit=1&offset=0&rating=g&lang=en";

async function fetching() {
  try {
    var randomRes = await fetch(randomWordUrl);
    var randomword = await randomRes.json();
    console.log(randomword);
    var ele=document.createElement("p")
    ele.innerHTML="<h1>"+"Random word is:  "+randomword+"</h1>";
    document.body.append(ele);

    var gifRes= await fetch(giphy+"&q="+randomword);
    
    var gifUrl=await gifRes.json();
    var url=gifUrl.data[0].images.original.url;
    console.log(url)
    
        var gif=document.createElement("object");
        gif.data=url;
        document.body.append(gif)
    
    

  } catch (error) {
    console.log(error);
    var gif=document.createElement("p");
    gif.innerHTML="<h2>No gif available</h2>"
     document.body.append(gif)
  }
}
fetching();
