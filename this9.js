let laptop1={
    brand: "HP",
    cpu: 'i7',
    ram: 8,
    getConfig: function(){
        console.log("CPU: "+this.cpu);
    },
    compare: function(other){
        if(this.cpu>other.cpu)
            console.log(this);
        else
            console.log(other);
    }
}

let laptop2={
    brand: "Dell",
    cpu: 'i9',
    ram: 12,
    getConfig: function(){
        console.log("CPU: "+this.cpu);
    }
}

laptop1.compare(laptop2);