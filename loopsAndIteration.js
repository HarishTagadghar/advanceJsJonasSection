let family = ["harish","nitesh","pawan",1999,"rahul",false];

for (let i = 0 ; i <= family.length - 1 ; i++){
        console.log(family[i]);
        
}
let i = 0
while (i < family.length) {
   console.log(family[i]);
    i++;
}

for (let i = 0; i < family.length; i++)  {
    if(typeof family[i] !== 'string')continue;
   console.log(family[i]);
   
    
}

for (let i = 0; i < family.length; i++)  {
    if( typeof family[i] !== 'string')break;
   console.log(family[i]);
   
    
}