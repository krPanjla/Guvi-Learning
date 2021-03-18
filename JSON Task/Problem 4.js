var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    var firstEle=arr[0];
    var last=arr.length-1
    var secondEle=arr[last];
    var ob={
        
    }
    ob[firstEle]=secondEle;
    return  ob
 
}
console.log(transformFirstAndLast(arr));