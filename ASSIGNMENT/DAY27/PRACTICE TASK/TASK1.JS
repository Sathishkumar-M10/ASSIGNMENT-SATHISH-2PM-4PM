async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        users.forEach(user => {
            console.log(user.email);
        });
    } catch (error) {
        console.log("Error fetching users:", error);
    }
    
}

fetchUsers();