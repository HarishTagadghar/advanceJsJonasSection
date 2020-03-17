 
 function  constructor(name,age,job) {
     this.name = name ;
     this.age = age ;
     this.job = job;
}
// here the new keyword creates a empty object 
let john = new constructor('john',19,'student');

// this prototype inherited function calculate in the constructor it meals the object created by the constructor function they have this function in the object but not directly this is prasent in the proto object
constructor.prototype.calculate = function (){
    console.log(2020 - this.age);
    
}
john.calculate();
console.log(john);
