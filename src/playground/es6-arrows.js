
// const firstName = (x) => x.split(" ")[0];
// console.log(firstName("Srinivas Natarajan"));

const multiplier ={

    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiplication(){
        return this.numbers.map( (y) =>  y*this.multiplyBy );
    }

};

console.log(multiplier.multiplication());