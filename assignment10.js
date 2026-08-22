// question 9 rewrite sumBunnies so it takes two parameters, blackBunnies and whiteBunnies.
// Call it with sumBunnies(10, 20) and with sumBunnies(7, 3).
//Rewrite question 9 as: an anonymous function stored in a variable.....an arrow function
//Call both and print the results.  

const sumBunniesAnnoymous = function (blackBunnies, whiteBunnies){
    return blackBunnies + whiteBunnies;
}
const sumBunniesArrow = (blackBunnies, whiteBunnies)=>
    blackBunnies + whiteBunnies;
console.log(sumBunniesAnnoymous(10,20));
console.log(sumBunniesArrow(7,3));