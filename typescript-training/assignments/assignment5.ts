// Assignment 5 -> Conditional Statements and Loops

//Creating employee table using map
let employeeData: Map<string, number[]> = new Map();
employeeData.set("Alice Johnson", [75000, 5.1, 4.2]);
employeeData.set("Bob Smith", [68000, 3.2, 3.8]);
employeeData.set("Carol Davis", [82000, 7.1, 4.5]);
employeeData.set("David Brown", [90000, 10.2, 2.5]);
employeeData.set("Charlie", [60000, 2.4, 3.5]);

//Creating map to store hike percentages with employee names
let hikeData: Map<string, number> = new Map();

//Creating loop to calculate hike percentages
for (let key of employeeData.keys()) {
    let name: number[]  = employeeData.get(key);
    let salary: number = name[0];
    let experience : number = name[1];
    let performanceRating : number = name[2];
    let variablePay: number | undefined = 0;
    let bonus: number | undefined = 0;
    let hikeAmount: number | undefined = 0;
    let extraReward: number = 0;
    
    if (performanceRating >=4.0){
        variablePay = 15;
        bonus = 1500;}
    else if (performanceRating >=3.0 && performanceRating <4.0){
        variablePay = 10;
        bonus = 1200;}
    else {
        variablePay = 3;
        bonus = 300;}

    if (experience >5){
        extraReward = 5000;}
    
    let hike = calculateHike(salary, variablePay, bonus, extraReward);
    hikeData.set(key, hike);
    }
    
    //Printing hike data using map keys
    for(let key of hikeData.keys()){
        console.log("Hike for", key, "is", hikeData.get(key));
    }


//Function to calculate hike amount
function calculateHike(salary: number, variablePay: number, bonus: number, extraReward: number): number {
    let hike: number = ((salary * variablePay) / 100) + bonus + extraReward;
    return hike;
}
