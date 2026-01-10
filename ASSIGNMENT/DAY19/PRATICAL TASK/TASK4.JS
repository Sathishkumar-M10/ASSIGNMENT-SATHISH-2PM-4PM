let number = [1,2,3,4,5,6];

number.forEach(function(x){
    console.log(x)
})

let dd = number.map(function(x){
    return x*75 ;
});
console.log(dd);