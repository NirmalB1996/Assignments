//Assignment 3 : Conditional Statements
//Creating common function

function loanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number): void {

        console.log("Customer Name:", customerName);
        //Checking credit score
        if (creditScore > 750)
        {
            console.log("Loan is approved based on credit score.");
        }
        else if (creditScore >= 650 && creditScore <= 750)
        {
            if (income >= 50000) //checking income
            {
                if (isEmployed===true) //checking employment status
                {
                    if (debtToIncomeRatio < 40) //checking debt-to-income ratio
                    {
                        console.log("Loan is approved based on income, employment status, and debt-to-income ratio.");
                    }
                    else
                    {
                        console.log("Loan is not approved as debt-to-income ratio is greater than 40.");
                    }
                }
                else
                {
                    console.log("Loan is not approved as employment status is false.");
                }
            }
            else
            {
                console.log("Loan is not approved as income is less than 50000.");
            }
        }
        else
        {
            console.log("Loan is not approved as credit score is less than 650.");
        }
}

//Data for testing
loanEligibility("John Doe", 720, 55000, true, 35);