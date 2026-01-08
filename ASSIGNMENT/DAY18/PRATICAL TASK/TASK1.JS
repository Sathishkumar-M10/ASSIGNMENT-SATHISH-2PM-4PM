let age = 20;

if (isNaN(age) || age < 0) {
    console.log("Invalid age entered");
} else if (age < 13) {
    console.log("Category: Child");
} else if (age < 20) {
    console.log("Category: Teen");
} else if (age < 60) {
    console.log("Category: Adult");
} else {
    console.log("Category: Senior");
}
