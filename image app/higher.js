var animals = [
    { name: "fluffy", speciaes: 'rabbit'},
    { name: "bob", speciaes: 'dog'},
    { name: "joe", speciaes: 'cat'},
    { name: "sally", speciaes: 'lion'},
    { name: "jim", speciaes: 'fish'},
]

// var cat = []

// for( var i = 0; i < animals.length; i++){
//     if(animals[i].speciaes === 'cat'){
//         cat.push(animals[i]);
//     }
// }

// console.log(cat)


var cat = animals.filter( (animal) => {
    return animal.speciaes === 'cat'
})

console.log(cat)