// Example: Searching for an employee in the employee list and updaing hourly wage

const employeelist = [ 
    {name : "Hana", hourlyRate: 15.20},
    {name : "John", hourlyRate: 18.50},
    {name : "Emily", hourlyRate: 17.00},
    {name : "Michael", hourlyRate: 20.00}
]

//create func to search for employee and update wage
const updateHourlyWage = (employeeName, newWage) => {
    console.log(`Searching for ${employeeName} to update hourly wage to $${newWage.toFixed(2)}...`);
    for (let employee of employeelist) {
        console.log(`Checking employee: ${employee.name}`);
        if (employee.name === employeeName) {
            console.log(`Found ${employeeName}! Updating hourly wage from $${employee.hourlyRate.toFixed(2)} to $${newWage.toFixed(2)}.`);
            employee.hourlyRate = newWage;
            break; // Exit the loop once the employee is found and updated
        }else {
            console.log(`${employeeName} not found at this index.`);
        }
    }
}

// Call the function to update John's hourly wage
updateHourlyWage("John", 19.00);