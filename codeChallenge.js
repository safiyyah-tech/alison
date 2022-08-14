let fidoAge = 12;
let whiskersAge = 9;
let dogyears = 7;
let catyears = 5;

let fidoHumanYears = fidoAge * dogyears;
console.log(fidoHumanYears + ' years.');

let whiskersHumanAge = whiskersAge * catyears;
console.log(whiskersHumanAge + ' years.');

// One way of getting the answer.
/*let isFidoOlder = fidoHumanYears >= whiskersHumanAge;
console.log('is Fido Older? ' + isFidoOlder); 
*/

// Another way of getting the anwser.
if (fidoHumanYears >= whiskersHumanAge){
    console.log('is Fido older? ' + true);
}