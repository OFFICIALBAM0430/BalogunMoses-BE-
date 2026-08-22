//Using this array:
//const bunnies = ['Lucy', 'Tom', 'Molly', 'Bella']; Print: the first item//the last item (do not hard-code the index 3)
//the index of 'Tom'///a copy of the array (do not change the original)

const bunnies = ['Lucy', 'Tom', 'Molly', 'Bella'];
console.log(bunnies[0]);
console.log(bunnies[bunnies.length -1]);
console.log(bunnies.indexOf('Tom'));

const newBunniesCopy = bunnies.slice();
console.log(newBunniesCopy);
