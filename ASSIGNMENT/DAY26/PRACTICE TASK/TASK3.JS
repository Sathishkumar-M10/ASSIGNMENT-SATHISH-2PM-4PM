function greet(name, callback) {
    console.log("Hello" + name);

    setTimeout(function () {
        callback();
    }, 2000);
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sathish", sayGoodbye);