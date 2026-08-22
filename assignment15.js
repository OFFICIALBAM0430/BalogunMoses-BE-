//Using this nested array:
//const nestedArrays = [['Lucy', 'Tom'],['Molly', 'Bella'],];
//Print 'Lucy', 'Bella', and then print every name with nested loops.

const nestedArrays = [
    ['Lucy', 'Tom'],
    ['Molly', 'Bella'],
];
console.log(nestedArrays[0][0]);
console.log(nestedArrays[1][1]);

for (let i = 0; i < nestedArrays.length; i++){
    for (let m = 0; m < nestedArrays[i].length; m++){
        console.log(nestedArrays[i][m]);
    }
}


