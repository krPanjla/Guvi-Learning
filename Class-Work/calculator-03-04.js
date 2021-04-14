
// function sum(n1,n2){
// return n1+n2;
// }
// function multiply(n1,n2){
//     return n1*n2;
//     }

//     function divide(n1,n2){
//         return n1/n2;
//         }

//         function substract(n1,n2){
//             return n1-n2;
//             }

//             function mod(n1,n2){
//                 return n1%n2;
//                 }
                

// function calculator(a,b,fun){
// console.log(fun(a,b))
// }

// calculator(2,6,sum);
// calculator(2,6,multiply);
// calculator(2,6,mod);
// calculator(2,6,substract);
// calculator(2,6,divide);

//another way
function sum(no1,no2){
return no1+no2;
}
function multiply(no1,no2){
    return no1*no2;
}
function divide(no1,no2){
    return no1/no2;
}
function mod(no1,no2){
    return no1%no2;
}
function substract(no1,no2){
    return no1-no2;
}

function calculator(no1,no2,operation){
   return operation(no1,no2);
}


console.log(calculator(3,4,sum));
console.log(calculator(3,4,multiply));
console.log(calculator(3,4,divide));
console.log(calculator(3,4,mod));
console.log(calculator(3,4,substract));