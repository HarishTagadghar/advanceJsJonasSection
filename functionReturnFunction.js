function question(job){
    if (job === 'backend'){
        return function(name){
            console.log('what node js dose ' + name +' ?');
        }
    }else if (job === 'frontend'){
        return function(name){
            console.log( name +' can you explain ux');
        }
    }else{
        return function(name){
            console.log('what do you do ' + name);
        }
    }
}// tis question function returns the hole function
let full = question('fullstack')
full('john')
// you can also give argument like this because question('backend') returns hole funcion 
question('backend')('mark')