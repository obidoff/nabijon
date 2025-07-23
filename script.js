// 1. Reverse Number
function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}
num = prompt("Enter a number: ");
alert("reverse of " + num + " is: " + reverseNumber(num));

// 2. Check Palindrome
function isPalindrome(str) {
    str = str.toString().toLowerCase();
    return str === str.split('').reverse().join('');
}
str = prompt("Enter a string: ");
alert(str + " is " + (isPalindrome(str) ? "" : "not ") + "a palindrome.");


// 3. String Combinations
// don't understand the task, so skipping


// 4. Sort String Alphabetically
function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}
str = prompt("Enter a string to sort: ");
alert("Sorted string: " + sortStringAlphabetically(str));

// 5. Capitalize First Letter of Each Word
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
str = prompt("Enter a string to capitalize: ");
alert("Capitalized string: " + capitalizeFirstLetter(str));

// 6. Find Longest Word
function findLongestWord(str) {
    const words = str.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
str = prompt("Enter a sentence: ");
alert("Longest word is: " + findLongestWord(str));

// 7. Count Vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
str = prompt("Enter a string to count vowels: ");
alert("Number of vowels: " + countVowels(str));

// 8. Check Prime Using Recursion
// don't understand the task, so skipping

// 9. Get Type of Argument
// barcha yozilgan narsalarni kod string sifatida qabul qilyabti bu xatolikni to'g'irlashni bilmadim
function getTypeOfArgument(arg) {
    return typeof arg;
}
arg = prompt("Enter something: ");
alert("Type of argument is: " + getTypeOfArgument(arg));

// 10. Generate Identity Matrix
// don't understand the task, so skipping