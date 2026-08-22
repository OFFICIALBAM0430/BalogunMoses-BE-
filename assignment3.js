//Predict the output, then run the code. In one or two sentences, explain why var and let behave differently here.

console.log(pet);
var pet = 'lucy';

console.log(animal);
let animal = 'tom';
//var came back as undefined because it was logged before declaring the value
//same thing happens to the let, the value was logged without declaring