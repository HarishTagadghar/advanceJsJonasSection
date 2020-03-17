let years = [1999,2002,1967,1920,1988];

function calc(yesr,fn){
    let arrays = [];
    for(let i = 0 ; i<yesr.length ; i++){
        arrays.push(fn(yesr[i]))
    }
    return arrays
}

let ages = function(input){
    return 2020 - input
}
let adult = function (input){
    if(input > 25 && input < 120 ){
        return 'adult'
    }else if (input >18 ){
        return 'teenager'
    }else {
        return 'young'
    }
}
let age = calc(years,ages)
console.log(age);
console.log(calc(age,adult));

