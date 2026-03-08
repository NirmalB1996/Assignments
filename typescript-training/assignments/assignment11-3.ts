//printing triangle pattern
function printTriangle(rows: number): void {
    for(let i=1; i<=rows; i++) {
        let rowStr: string = "";
        for(let j=1; j<=rows-i; j++) {
            rowStr = rowStr + " ";
        }
        for(let j=1; j<=i; j++) {
            rowStr = rowStr + "*";
        }
        console.log(rowStr);
    }
}
printTriangle(5);