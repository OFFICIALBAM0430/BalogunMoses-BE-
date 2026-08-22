//Create an array called bunnies with six bunny names.
//Add Mario to the end...Add Luigi to the beginning....
// Remove Lucy from the array (use whatever method you like, as long as Lucy is gone)
//Print the final array.

var bunnies = ["Adejoke", "sola", "Moses", "Lucy", "pamilerin", "John"];
bunnies.push("Mario");
console.log(bunnies);

bunnies.unshift("Luigi");
console.log(bunnies);

bunnies.splice(1,4);
console.log(bunnies);