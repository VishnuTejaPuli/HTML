var Student = /** @class */ (function () {
    function Student(studentId, firstName, age) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.age = age;
    }
    Student.prototype.printRecord = function () {
        console.log(this.studentId, this.firstName, this.age);
    };
    return Student;
}());
var student1 = new Student("101", "Naruto", 10);
// student1.studentId="101";
// student1.firstName="naruto";
// student1:age =16;
console.log(student1);
student1.printRecord();
var firstName = "vishnu teja";
firstName = 'puli';
console.log(firstName);
var loc = "Trv";
console.log(loc);
var pin = 695582;
console.log(pin);
var date = new Date();
console.log(date.getDate());
var language;
language = [4, 5, 5, 6, 6];
language = "Malayalam";
console.log(language);
var runs = 42;
console.log("runs:" + runs);
var wickets = 4;
console.log("wickets:" + wickets);
var catches = 1;
console.log("Total Catches:" + catches);
var points = 25 * wickets + runs + catches * 10;
console.log("Total points in a match:" + points);
var fruits = ['apple', 'orange', 'grapes', 'leech', 'strawberry'];
console.log(fruits);
console.log(fruits.length);
var score = ['Rohit', 240, 46.20, 130.45, 13000, 'India', true];
score.push('lives in Mumbai');
console.log(score);
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
var add = function (a, b) { return a + b; };
console.log(add(3, 4));
// 
// a(10,30);
// console.log(a);
var plus = function (a, b, c) {
    console.log(a, b, c);
};
var a = plus;
a(true, 10, 20);
var pet = { type: "Dog", name: "Bruno", Breed: "Pug" };
console.log(pet.name);
var pet2 = pet;
pet2 = { type: "cat", name: "tom", Breed: "arabian" };
console.log(pet2);
console.log(pet);
