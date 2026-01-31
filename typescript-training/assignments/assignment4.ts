//Assignment 4 -> Conditional Statements and Loops

//create a function to check positive and negative transactions
function checkTransaction(amount: number): boolean {
    if (amount >= 0) {  
        return true; // Positive transaction
    } else {
        return false; // Negative transaction
    }  }

let numTransactions: number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let creditTransactionsCount: number = 0;
let debitTransactionsCount: number = 0;
let creditTransactionsSum: number = 0;
let debitTransactionsSum: number = 0;
let totalTransactionsSum: number = 0;
let countSuspiciousTransactions: number = 0;
let amountCurrent: number = numTransactions[0] ?? 0;

//loop through the transactions array and classify transactions
for(let i=0; i<numTransactions.length; i++){
    amountCurrent = numTransactions[i] ?? 0;
    totalTransactionsSum += amountCurrent;
    if(checkTransaction(amountCurrent)){
        creditTransactionsCount++;
        creditTransactionsSum += amountCurrent;
        if(amountCurrent > 10000){
            countSuspiciousTransactions++;
            console.log("Suspicious Credit Transaction of", amountCurrent, "detected.");
        }
    } else {
        debitTransactionsCount++;
        debitTransactionsSum += amountCurrent;
        if(amountCurrent < -10000){
            countSuspiciousTransactions++;
            amountCurrent = 0 - amountCurrent; //convert to positive for display
            console.log("Suspicious Debit Transaction of", amountCurrent, "detected.");
        }
    }
    
}
console.log("Total Credit Transactions:", creditTransactionsCount);
console.log("Total Debit Transactions:", debitTransactionsCount);
console.log("Sum of Credit Transactions:", creditTransactionsSum);
console.log("Sum of Debit Transactions:", debitTransactionsSum);
console.log("Total Sum of Transactions:", totalTransactionsSum);
console.log("Total Suspicious Transactions:", countSuspiciousTransactions);