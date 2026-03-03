//implement a function to find power. Number raised to the power of n. r^n
function numPower(num: number, power: number):void {
    let output: number = 1;
    while(power != 0) {
        if(power < 0) {
            output = output / num;
            power++;
        }
        else {
            output = output * num; 
            power--; 
        }
                
    }
    console.log(output);    
}

numPower(2, 10);
numPower(2.1,3);
numPower(2,-2);