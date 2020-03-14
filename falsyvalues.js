// the values which returns there output in  false values  :undefined,null,0,'',NaN(not a number)
let falsy = NaN;
falsy = '' ;
falsy = 0;
falsy = null ;
falsy = undefined;
if(falsy){
    console.log('this is a true value');
    
}else{
    console.log('this is a false value');
    
}