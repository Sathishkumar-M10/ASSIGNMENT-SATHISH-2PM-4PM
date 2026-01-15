window.addEventListener("Load", () => {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        console.log("Welcome back,", savedName);
    } else {
        console.log("No user data found");
    }
});