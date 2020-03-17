// primitivess 
//string , number,boolean,null ,undefined are the primitives and other like object,array,function,etc all are object
let a = 20;
let b = a;
a=30;
console.log(a===b); // it returns false because variabe b just dont refer a it makes a copy of varible a

//while in objects they reffer the associted value to it {will not make copy of other object }
 
let obj1 = {
    name:'harish',
    age:19
}
let obj2 = obj1 // the obj2 dont make another copy like variables it just reffers the object

obj1.age = 19 + 1;

console.log(obj1);
console.log(obj2);




