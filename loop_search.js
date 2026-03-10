
// 1st example: Looping through an array of numbers and finding a specific number
console.log("Example 1: Searching for a specific student in the student list");
const studentlist = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 21 }
];

for (let i of studentlist) {
    console.log(`Checking student: ${i.name}`);
    if (i.name === "Charlie") {  //the 3 === operator checks for both value and type equality
        console.log("Found Charlie!");
        break; // Exit the loop once Charlie is found
    }
}

console.log("---------------------------------------------------------");

// 2nd example:: test score
console.log("Example 2: Searching for a high score in the test scores array");
const testScores = [85, 92, 78, 90, 88];

for (let score of testScores) {
    console.log(`Checking score: ${score}`);
    if (score >= 90) {
        console.log("Found a high score!");
        break; // Exit the loop once a high score is found
    }
}
console.log("---------------------------------------------------------");

// 3rd example: let go back to studentlist and add position tracker
console.log("Example 3: Searching for Charlie and tracking his position in the student list");
const studentlist2 = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 21 }
];

let position = -1; // Initialize position tracker

for (let i = 0; i < studentlist2.length; i++) {
    console.log(`Checking student: ${studentlist2[i].name}`);
    if (studentlist2[i].name === "Charlie") {
        console.log(`Found Charlie at index ${i}!`);
        position = i; // Update position tracker
        // break; // Exit the loop once Charlie is found
    }
}
if (position !== -1) {
    console.log(`Charlie is located at index ${position} in the student list.`);
}
else {
    console.log("Charlie was not found in the student list.");
}

console.log("---------------------------------------------------------");

// 4th example: tracking obj focus
console.log("Example 4: Searching for an employee in the IT department and tracking the search process");
const employees = [
    { name: "Emily", department: "HR" },
    { name: "James", department: "IT" },
    { name: "Sophia", department: "Finance" },
    { name: "Michael", department: "Marketing" }
];

for (let employee of employees) {
    console.log(`Checking employee: ${employee.name} in ${employee.department} department`);
    if (employee.department === "IT") {
        console.log(`Found an employee in the IT department: ${employee.name}`);
        // break; // Exit the loop once an employee in the IT department is found
    }
}

console.log("---------------------------------------------------------");