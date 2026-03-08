//count total number of words in a string
function countWords(str: string): void {
    let originalStr: string = str.trim();
    let words: string[] = originalStr.split(" ");
    let wordCount: number = words.length; 
    console.log(wordCount);

    //printing the string in reverse order
    let reversedStr: string = "";
    for(let i=wordCount-1; i>=0; i--) {
        reversedStr = reversedStr + words[i] + " ";
    }
    console.log(reversedStr); 
    
    //converting first character of each word to uppercase
    let newCapStr: string = "";
    for(let i: number=0; i<wordCount; i++) {
        words[i] = words[i]!.charAt(0).toUpperCase() + words[i]!.substring(1); ;
        newCapStr = newCapStr + words[i] + " ";
    }
    console.log(newCapStr); //Capitalized first character of each word
     
}
countWords("Java programming is fun and challenging");
