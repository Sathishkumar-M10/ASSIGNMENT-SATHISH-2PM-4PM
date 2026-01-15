const user = {
    id: 1,
    name: "Sathish",
    email: "sathish@example.com"
};

// Convert object to JSON (string)
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// Convert JSON back to object
const parsedObject = JSON.parse(jsonString);
console.log("Object:", parsedObject);

