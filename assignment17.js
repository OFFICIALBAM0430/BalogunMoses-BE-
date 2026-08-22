//Start with this JSON string:
//let bunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';
//Convert it back to a JavaScript object and print name and age

let bunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';

let bunny = JSON.parse(bunnyJSON);

console.log(bunny.name);
console.log(bunny.age);