//this refers current object

let laptop1={
    brand: "HP",
    cpu: 'i7',
    ram: 8,
    getConfig: function(){
        console.log("Laptop1 CPU: "+laptop1.cpu);
        console.log("Laptop2 CPU: "+laptop2.cpu);
        console.log("Current Object CPU: "+this.cpu);
    }
}

let laptop2={
    brand: "Dell",
    cpu: 'i9',
    ram: 12,
    getConfig: function(){
        console.log("Laptop1 CPU: "+laptop1.cpu);
        console.log("Laptop2 CPU: "+laptop2.cpu);
        console.log("Current Object CPU: "+this.cpu);
    }
}

laptop1.getConfig();
laptop2.getConfig();