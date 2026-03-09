//Create a function that checks if a string is a palindrome.
function isPalindrome(str: string): boolean {
    let cleanedStr: string = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedString: string = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedString += cleanedStr.charAt(i);
   }
    if(cleanedStr === reversedString) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race a car"));
