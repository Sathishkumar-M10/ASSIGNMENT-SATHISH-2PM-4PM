function getdata() {
    return new Promise((resolve) => {
        resolve("promise resolved successfully!");
    });
}

async function run() {
    let result = await getdata();
    console.log(result);
}

run();