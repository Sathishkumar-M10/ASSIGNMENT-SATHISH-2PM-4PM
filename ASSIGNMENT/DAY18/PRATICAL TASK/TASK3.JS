let correctPassword = "12345";
let input;

do {
    input = prompt("Enter your password:");

    // 1. Handle user clicking "Cancel"
    if (input === null) {
        console.log("Login cancelled.");
        break; 
    }

    // 2. Check for incorrect password
    if (input !== correctPassword) {
        alert("Incorrect password, try again.");
    }

} while (input !== correctPassword && input !== null);

// 3. Final success check
if (input === correctPassword) {
    console.log("Access granted!");
}