// closures are nothing but an inner function which has access to the outer variables and parameters 
function reterment(country){
    let title = 'years are left '
    return function(dateOfBurth){
        let age = 2020 - dateOfBurth
        console.log(`${country-age} ${title}`); // as you can the inner function are getting access to the outer variable title and parameters  country
        
    }
}

reterment(60)(2000)