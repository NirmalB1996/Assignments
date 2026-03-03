//number pyramid
function numPyramid(num: number): void {
    let line: string = "";
    for(let i=1;i<=num;i++) {
        for(let j=num-1;j>=i;j--) {
            line = line + " ";
        }
        for(let k=1;k<=i;k++) {
            line = line + k + " ";
        }
        console.log(line);
        line = "";
    }
    for(let i=num-1;i>=1;i--) {
        for(let j=num-1;j>=i;j--) {
            line = line + " ";
        }
        for(let k=1;k<=i;k++) {
            line = line + k + " ";
        }
        console.log(line);
        line = "";
    }
}
numPyramid(5);