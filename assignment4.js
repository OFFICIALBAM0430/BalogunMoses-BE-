//Write two short examples:
//a local variable inside a function called animalName
//a global variable that the same function can still print
//Call the function and show both results.

let globalAnimal = "lucy";
function showAnimals(){
    let animalName = "Tom";
    console.log(animalName);
    console.log(globalAnimal);
}
showAnimals();