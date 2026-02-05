//Determine if a number is prime or not

function isPrime(num:number):boolean {
    let count:number=0;
    if(num<1)
        console.log("Number is less than 1");
        return false;
    if(num ==1)
        return false;
    for(let i=2;i<num;i++){
        if(num % i ===0){
            count++;
        }
    }
    if(count ===0)
        return true;
    else
        return false;   
}
console.log("Is 7 prime?", isPrime(7));
console.log("Is 25 prime?", isPrime(25));
console.log("Is 1 prime?", isPrime(1));
console.log("Is -5 prime?", isPrime(-5));
