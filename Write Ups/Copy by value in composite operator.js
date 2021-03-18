//Using the spread (...) operator

var arr1=['kar','tik','pan','jla'];
var coppied_arr=[...arr1];
arr1[1]='changed in ist array';
coppied_arr[2]='chnaged';
console.log(arr1,coppied_arr);

//Using the Object.assign() method

var arr0=['kar','tik','pan','jla'];
var b=Object.assign([],arr0);
b[0]='raj'
console.log(arr0,b);

//Using the JSON.stringify() and JSON.parse() methods

var arr=['kar','tik','pan','jla'];
var c=JSON.parse(JSON.stringify(arr));
arr[3]='changed'
console.log(arr,c);
