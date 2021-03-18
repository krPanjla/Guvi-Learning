var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    var act=JSON.stringify(actual);
    var exp=JSON.stringify(expected);
    if(act===exp){
        console.log('Passed');

    }else{
        console.log('Failed')
    }
    
}
assertObjectsEqual(actual,expected)
