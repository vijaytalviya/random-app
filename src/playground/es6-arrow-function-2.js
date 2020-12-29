/*const multiplier = {
    number:[1,2,3],
    multiplyBy: 2,
    multiply() {
      return  this.number.map((n) => n * this.multiplyBy);
    }
};
console.log(multiplier.multiply());*/

const user ={
  name:'vijay',
  cities:["agar","indore","ujjain"],
  printPlaceLived(){
   return this.cities.map((city)=>city + "!");
    return cityM;
  }
};

console.log(user.printPlaceLived());