let john = {
    fullName : 'john marten',
    mass:79,
    heigt:1.67,
    bmicalc: function (){
        this.bmi = this.mass / (this.heigt*this.heigt)
        return this.bmi // if you remove this return line it will not return the out put of john.bmicalc()
    }
}
console.log(john.bmicalc());
console.log(john);

