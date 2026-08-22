//Create a JavaScript object called bunny with name, age, and isHappy. 
// Convert it to JSON, store it in bunnyJSON, and print bunnyJSON

var bunny = {
    name: 'Moses',
    age: 199,
    isHappy: 'Yes'
};
var bunnyJSON = JSON.stringify(bunny);
console.log(bunnyJSON);