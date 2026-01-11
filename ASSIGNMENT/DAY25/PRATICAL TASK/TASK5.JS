function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}


async function login(username, password) {
  console.log("Logging in...");

  try {
    const result = await fakeLogin(username, password);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


login("admin", "1234");   
login("user", "wrong");  
