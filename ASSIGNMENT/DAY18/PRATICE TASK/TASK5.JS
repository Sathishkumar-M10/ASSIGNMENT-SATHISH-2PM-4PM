let student = {
    name: "Sathish",
    age: 22,
    grade: "A"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
