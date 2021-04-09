var div=document.createElement("div")
document.body.appendChild(div);

var count=document.createElement("h1");
div.setAttribute("style","text-align:center")

div.appendChild(count);

setTimeout(()=>{ count.innerHTML=10
    setTimeout(()=>{count.innerHTML=9
        setTimeout(()=>{count.innerHTML=8
            setTimeout(()=>{count.innerHTML=7
                setTimeout(()=>{count.innerHTML=6
                    setTimeout(()=>{count.innerHTML=5
                        setTimeout(()=>{count.innerHTML=4
                            setTimeout(()=>{count.innerHTML=3
                                setTimeout(()=>{count.innerHTML=2
                                    setTimeout(()=>{count.innerHTML=1
                                       
                                            setTimeout(()=>{count.innerHTML='Happy independence day'
                                        setTimeout(()=>{
                                            var img=document.createElement('img');
                                            img.setAttribute("src","https://images.indianexpress.com/2020/08/independence-day-Feature.jpg")
                                            div.appendChild(img)
                                        },0)},1000)
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)


