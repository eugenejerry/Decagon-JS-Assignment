# JS-Fundamentals-Assignment

1. Given a string of characters as input, write a function that returns it with the characters reversed.
  e.g "hello world" => "!dlroW olleH"
  
2. A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. the function should return true if a word is a palindrome and false otherwise. e.g "Racecar" => true, "sit ad est love" => false
3. Given a string of characters, write a function that returns the character that appears the most often. e,g "Hello World!" => "l"
4. write a function that checks the number of consonants and vowels in a given string. if number of consonants is greater than the number of vowels return "consonants win", if number of vowels is greater than the number of consonants return "vowels win", if the number of consonants and vowels are the same, return "draw"
5.  Implement the function encode(plainText) which returns an encoded message.
 It receives a plainText string parameter, for example aaaabcccaaa.
 You must encode it by counting each consecutive sequence of a letter. e.g. in aaaabcccaaa, there are:
 4 times the letter a
 then 1 b
 then 3 c
 then 3 a
 Therefore you must return the string 4a1b3c3a.
 Constraints :
 plainText is made of lowercase letters: a-z
 plainText is never null and has a maximum length of 15000 characters
 EXAMPLES:
 PlainText
 aabaa
 EncodedText
 2a1b2a
 PlainText
 aaaabcccaaa
 EncodedText
 4a1b3c3a 
