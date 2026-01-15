function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve({ status: "success", token: "abc123" });
            } else {
                reject({ status: "failed", message: "Invalid credentials" });
            }
        }, 1500);
    });
}

async function login(username, password) {
    console.log("Logging in...");
    try {
        const response = await authenticate(username, password);
        console.log("Login successful:", response);
    } catch (error) {
        console.log("Login failed:", error.message);
    }
}

// Test
login("admin", "1234");
// login("user", "0000");
