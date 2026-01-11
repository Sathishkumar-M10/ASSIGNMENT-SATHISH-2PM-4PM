const AgeChecker = [
    {Name : "Sathish", Age : 20},
    {Name : "Eren Yeager", Age : 19},
    {Name : "Naruto Uzumaki", Age : 33},
    {Name : "Thorfinn", Age : 25},
    {Name : "Light Yagami", Age : 23},
    {Name : "Satoru Gojo", Age : 28},
];

const adults = AgeChecker
.filter(Name => Name.Age >= 18);
console.log(adults)