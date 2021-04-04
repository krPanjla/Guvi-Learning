
function sum(n1,n2){
return n1+n2;
}
function multiply(n1,n2){
    return n1*n2;
    }

    function divide(n1,n2){
        return n1/n2;
        }

        function substract(n1,n2){
            return n1-n2;
            }

            function mod(n1,n2){
                return n1%n2;
                }
                

function calculator(a,b,fun){
console.log(fun(a,b))
}

calculator(2,6,sum);
calculator(2,6,multiply);
calculator(2,6,mod);
calculator(2,6,substract);
calculator(2,6,divide);

