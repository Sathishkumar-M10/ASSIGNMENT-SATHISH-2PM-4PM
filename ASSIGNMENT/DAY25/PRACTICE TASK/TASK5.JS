function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("User data loaded successfully");
      } else {
        reject("Failed to load user data");
      }
    }, 2000);
  });
}

async function loadUser() {
  try {
    const data = await getUserData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

loadUser();
