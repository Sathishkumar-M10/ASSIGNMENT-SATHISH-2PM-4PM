const mypromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise resolved successfully!");
    }else {
        reject("Promise failed!");
    }
});

mypromise.then(result => {
    console.log(result);
    
});