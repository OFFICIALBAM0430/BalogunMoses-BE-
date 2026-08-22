//Create two arrays, bunnies and dogs, with any number of names. Use <= to compare their lengths.
//If the number of bunnies is less than or equal to the number of dogs, print There are more dogs than bunnies
//Otherwise print There are more bunnies than dogs
let bunnies = ["Mira", "Milo", "Soap", "Spoon"]
let dogs = ["Jeffrey", "Drake", "Brown", "Bingo"]

if (bunnies.length <= dogs.length) {
    console.log('There are more dogs than bunnies')
}else {
    console.log('There are more bunnies than dogs');
};
