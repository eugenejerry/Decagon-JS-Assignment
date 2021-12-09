//ALGO TEST
// 1. Given a string of characters as input, write a function that returns it with the 
//characters reversed. e.g "hello world" => "dlrow olleh"

//USING split(),reverse() &join() built-in methods

let myString = "Hello World";
function reverseString(myString){
    return myString.split('').reverse().join();
}
reverseString(myString);


//Chaining the three methods together

// let str = "Hello World";
function reverseString2(myStr) {
    return myStr.split("").reverse().join("");      //difference: quotation marks within join()
}
reverseString2("hello");


//2.A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. 
//the function should return true if a word is a palindrome and false otherwise. e.g "Racecar" => true, "sit ad est love" => false

function palindrome(str) {
    return true;
  }
  palindrome("Racecar, eye");



  //USING BUILT-IN METHODS
const myString2 = "Racecar"
const myString3 = "Racecar, plan, a canal. Panama "

function palindrome(myString2) {
    let remov = /[\W_]/g;                                      //remove unwanted xters
    let lowRegString = myString2.toLowerCase().replace(remov, '');
    let reverseString = lowRegString.split('').reverse().join(''); 
    return reverseString === lowRegString;
  }
palindrome(myString2);

  

  // 3. Given a string of characters, write a function that returns the character that appears 
  //the most often. e,g "Hello World!" => "l"

let string3 = "hello world";




/// 4. write a function that checks the number of consonants and vowels in a given string. 
//if number of consonants is greater than the number of vowels return "consonants win", if 
//number of vowels is greater than the number of consonants return "vowels win", if the 
//number of consonants and vowels are the same, return "draw"

const string4 = "this is a simple sentence";

// COUNT NUMBER OF VOWELS IN A STRING

// vowels defination
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(string4) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of string4.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(`There are ${result} Vowel(s) in your string`);
