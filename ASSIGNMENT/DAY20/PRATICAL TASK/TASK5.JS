function Student (Name, Course) {
    this.Name = Name;
    this.Course = Course;
}
const Student1 = new Student(`Sathishkumar M`, `BCA`);
const Student2 = new Student(`Vignesh`, `B.COM`);

Student.prototype.intro = function () {
    console.log(`Hi!! I'm ${this.Name} & i'm studying &{this.Course}`)
}
Student1.intro();
Student2.intro();
