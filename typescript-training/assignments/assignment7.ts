//define a function that takes array as a parameter and returns the maximum difference

function displayArray(arr: number[]): void {
    let maxDiff: number = 0;
    let buyday: number = 0;
    let sellday: number = 0;
    for (let i:number = 0; i < arr.length; i++) {
        for (let j:number = i; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let diff = arr[j]-arr[i];
                if (diff > maxDiff) {
                    maxDiff = diff;
                    buyday = i+1;
                    sellday = j+1;}
            }
        }   
    }
    if(buyday != sellday) {
        console.log("Buy on day " + buyday + " and sell on day " + sellday);
    } else {
        console.log("No transaction made");
    }

    console.log("Maximum profit achieved = " + maxDiff);
}

//test the function with different arrays
displayArray([7, 1, 5, 3, 6, 4]);
displayArray([7, 6, 4, 3, 1]);