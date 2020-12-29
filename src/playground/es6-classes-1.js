
class Person{
    constructor(name = "kuch bhi",age = 0){
        this.name =name;
        this.age =age;

    }
    getGretting(){
       // return this.name+"hey";
       return `hi this is ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major=major;

      }
        hasMajor() {
            return !!this.major;
        }
    getDescription(){
            let description = super.getDescription();
            if(this.hasMajor()){
                description += ` their majaor is ${this.major}.`;
            }
            
            
            return description;
        }
   
    }


    class Traveler extends Person {
        constructor(name, age , homeLocation){
            super(name,age);
            this.homeLocation = homeLocation;
        }
        
        getGretting(){
            let dest = super.getGretting();
            
            if(this.homeLocation){
            dest += `and home town is ${this.homeLocation}.`; 
             }
              return dest;
        }

    }
    


const me = new Traveler("vijay",12,"agar");
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());