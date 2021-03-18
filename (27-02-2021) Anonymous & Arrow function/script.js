//Print odd numbers in an array
var arr=[1,68,7,45,78,2,2,45,13,17,19,101,9,34,2,5,78,89,34,34,5,54,5,45,5,1];
var oddArr=[];
var anonymous=function(arr){
    for(var i in arr){
        if(!(arr[i]%2===0)){

            oddArr.push(arr[i]);
        }
       
    }
    
    return oddArr;

}
console.log(anonymous(arr));



//Convert all the strings to title caps in a string array 
var str='Kartik Panjla';
(function(str){
console.log(str.toUpperCase()); 
})(str);


//Sum of all numbers in an array
var sum=arr.reduce((preValue,currentValue)=>{
    return preValue=preValue+currentValue;
},0);
console.log(sum);


//Return all the prime numbers in an array 
primes = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(primes)


//Return all the palindromes in an array 

var palindromesArr=[121,156651,1771,878,33,7856,7698,568974];

var res=function(palindromesArr){
    var out=[];
    var out1=[];
    var lengtt=palindromesArr.length;
    for(z=0;z<lengtt;z++){

        var str=String(palindromesArr[z]);
        var spli=(str.split(''));
        var rev=spli.reverse();
       var joi=(rev.join('')) ;
       var num=parseInt(joi);
       out.push(num)
    }
    //console.log(out)
    for(k=0;k<lengtt;k++){
        if(out.indexOf(palindromesArr[k])!==-1){
            out1.push(palindromesArr[k]);
        }
    }
    console.log(out1)

}
res(palindromesArr)




//Return median of two sorted arrays of same size 
var arr1=[2,4,7,8,10,17,34,56,78,90,102,244,558,766];
var arr2=[6,7,8,12,33,55,77,109,567,1001,1900,3000,89797,457567568];

(function(arr1,arr2){
    var arr1Len=arr1.length;
    var m1=arr1[arr1Len-1];
    var m2=arr2[0];
    var median=(m1+m2)/2
console.log(median)

})(arr1,arr2);

//Remove duplicates from an array
var duplicates=function(arr){
    var arrayWithoutDuplicates=[];
var lengt=arr.length;
    for(y=0;y<lengt;y++){
        if(arrayWithoutDuplicates.indexOf(arr[y])===-1){
            
            arrayWithoutDuplicates.push(arr[y]);
        }
    }
    console.log(arrayWithoutDuplicates);
}
duplicates(arr);


//Rotate an array by k times and return the rotated array
var arr3=[1, 2, 3, 4, 5, 6];
(function(arr3,b){
    var l=arr3.length;
    b=b;
    var tem=[];
    
    for(var r=0;r<b;r++){
        console.log(arr3[r])
    tem[r]=arr3.shift()
    arr3.push(tem[r])
    }
    console.log(tem);
    console.log(arr3);
    
})(arr3,2);

