//A bunny's health can be 'healthy', 'sick', or anything else.
//Write this check three ways:
//if / else if / else
//a switch statement
//a ternary operator (healthy vs not healthy is enough for the ternary)
    //if    /else if    /else
let bunny = 'Healthy';
if (bunny === 'Healthy') {
    console.log('bunny is healthy');
}else if (bunny === 'Sick') {
    console.log('bunny needs to see the vet');
}else {
    console.log('bunnys health can not be determined');
};

// a switch statement
switch (bunny){
    case 'Healthy':
        console.log('The bunny is healthy.');
        break;
        case 'Sick':
            console.log('The bunny is sick.');
            break;
            default:
                console.log('The bunny health can not be determined');
};

        //a tenary operator
let health = 
bunny === 'healthy'
? 'The bunny is healthy.'
: 'The bunny is sick.'
console.log(health);

