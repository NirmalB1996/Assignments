function occurences(str: string, word: string): void {
    let originalStr: string = str.trim();
    let words: string[] = originalStr.split(" ");
    let wordCount: number = 0;
    for(let i=0; i<words.length; i++) {
        if(words[i] === word) {
            wordCount++;
            console.log(`Word "${word}" found at index: ${i}`);
        }
    }
    console.log(`Total number of occurences of word "${word}": ${wordCount}`);
}
occurences("Java is a popular programming language. Java is used for web development, mobile applications, and more.", "Java");
