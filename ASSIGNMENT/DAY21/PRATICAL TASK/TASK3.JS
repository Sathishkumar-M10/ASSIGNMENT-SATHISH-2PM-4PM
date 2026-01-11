const Students = [
    ["Sathish", 85],
    ["Eren Yeager" ,92],
    ["Satoru Gojo" , 72],
    ["Light Yagami", 70],
    ["Naruto Uzumaki", 60],
    ["Thorfinn", 50]
]

Students.forEach(Students => {
    const Name = Students[0];
    const Marks = Students[1];
    console.log(`Name : ${Name}, Marks : ${Marks}`)
})