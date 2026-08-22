//Given:
//let bunny_age = 3;
//let dog_age = '3';
//Print the result of each:
//bunny_age == dog_age
//bunny_age === dog_age
//bunny_age != dog_age
//bunny_age !== dog_age
//In one sentence, explain the difference between == and ===.

let bunny_age = 3;
let dog_age = '3';

bunny_age == dog_age
console.log(bunny_age ==  dog_age);
console.log(bunny_age === dog_age);
console.log(bunny_age != dog_age);
console.log(bunny_age !== dog_age);

// == simply means the value assigned to the bunny is equal to the value assign to the dog age
//=== this simply check for the value and also if it has same properties (string, number, object or array)