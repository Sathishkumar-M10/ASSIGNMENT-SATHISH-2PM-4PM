function saveUserName(name) {
    localStorage.setItem("username", name);
}

// Example usage
saveUserName("Sathish");

// To retrieve later
const storedName = localStorage.getItem("username");
console.log(storedName);
