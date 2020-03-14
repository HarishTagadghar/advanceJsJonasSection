// this keywork is a global object which points on a window object in the browser untill it is assiend to a object method
console.log(this);// this shows the whole window object
function name(){
console.log(this);//this do show the whole window object because this is not assined to a object method
// if you use this keyword in any function or conditions(if ,ifelse ,etc) or loops (for,while,etc) then this keyword poits on the window object
}
name() // calling funciton
let john = {
    fullName : 'john marten',
    mass:79,
    heigt:1.67,
    bmicalc: function (){
       console.log(this);
       function names(){
        console.log(this); // here this variable refers to the window object because this variabe is used in a function which is in object method 
        }
        names() //calling funciton
},
    
}
john.bmicalc() // calling a funciton