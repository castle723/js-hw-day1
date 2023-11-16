//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(inputString, dogNames){
        const lowercasedString = inputString.toLowerCase();
    
        let matchesFound = false;
    
        for (const dogName of dogNames) {
            const lowercasedDogName = dogName.toLowerCase();
            if (lowercasedString.includes(lowercasedDogName)) {
                console.log(`Matched ${dogName}`);
                matchesFound = true;
            }
        }
        if (!matchesFound) {
            console.log("No Matches");
        }
    }
    
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}

replaceEvens(arr);
console.log(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Code wars #1//
/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

function countVowels(inputString) {
    const lowercasedString = inputString.toLowerCase();

    const vowelRegex = /[aeiou]/g;

    const vowelMatches = lowercasedString.match(vowelRegex);

    return vowelMatches ? vowelMatches.length : 0;
}

/*Code wars 2 
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
    const startNumber = (n * (n - 1)) + 1;

    let sum = 0;
  
    for (let i = 0; i < n; i++) {
        sum += startNumber + 2 * i;
    }

    return sum;
}

/* Code wars 3
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
}
function findShort(s) {
    const words = s.split(' ');

    const shortestWordLength = Math.min(...words.map(word => word.length));

    return shortestWordLength;
}

/* code wars 4 
make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
    return parseInt((n+'').split('').sort().reverse().join(''))
}
