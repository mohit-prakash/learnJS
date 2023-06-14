//object
let alien={
    name: 'Akash',
    tech: 'JS',
    laptop: {
        model: 'Dell',
        cpu: 'i7',
        ram: 8
    }
}

// console.log(alien);
// console.log(alien.laptop.cpu);
// console.log(alien['tech']);

// for in loop
// for(let key in alien){
//     console.log(alien[key]);
// }

for(let key in alien){
    if(key==='laptop'){
        for(let k in alien.laptop)
            console.log(alien.laptop[k]);
    }else{
        console.log(alien[key]);
    }
}