//used to get multiple objects

// function Alien(name,tech){ //Just to differentiate with function name use Caps at first letter
//     this.name=name;
//     this.tech=tech;
// }

// let alien1 = new Alien("Ritik","Aloo");
// let alien2 = new Alien("Chitti","Anda"); 

// console.log(alien1);
// console.log(alien2.tech);

// we can use function in constructor as well
function Alien(name,tech){
    this.name=name;
    this.tech=tech;
    this.work=function(){
        console.log("I'm method inside constructor.");
    };
    return 8; // It will skip this, if doesn't return object skip it
}

let alien1 = new Alien("Banku","Chin");
let alien2 = new Alien("Sanku","Sink");
alien2.tech="Java";
console.log(alien1);
console.log(alien2);

alien1.work();