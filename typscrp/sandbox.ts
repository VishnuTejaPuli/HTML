interface Card{
     cardNo : number ;

}

class Student{

   private studentId : string;
    private firstName : string;
    private age : number;

constructor(studentId: string , firstName : string,age: number)
 {
    this.studentId = studentId;
    this.firstName = firstName;
    this.age = age;

 }



    printRecord(){
        console.log(this.studentId,this.firstName,this.age);
    }
}




var student1 = new Student("101","Naruto",10);
// student1.studentId="101";
// student1.firstName="naruto";
// student1:age =16;

console.log(student1);
student1.printRecord();





let firstName = "vishnu teja";
firstName =    'puli';
console.log(firstName);
let loc="Trv";
console.log(loc);
let pin= 695582;
console.log(pin);
var date = new Date();
console.log(date.getDate());
var language: any;
language = [4,5,5,6,6];
language = "Malayalam";
console.log(language);
const runs = 42
console.log("runs:"+runs);
const wickets = 4
console.log("wickets:"+wickets);
const catches = 1
console.log("Total Catches:"+ catches);
const points = 25*wickets + runs + catches*10 ;
console.log("Total points in a match:"+points);

let fruits=['apple','orange','grapes','leech','strawberry'];
console.log(fruits);
console.log(fruits.length);

let score =['Rohit',240,46.20,130.45,13000,'India',true];
score.push('lives in Mumbai');
console.log(score);
let sum  = (x: number ,y: number): number => {
    return x+y;
};
console.log(sum(10,20));

let add = (a: number, b: number): number => a+b;
console.log(add(3,4));


// 
// a(10,30);
// console.log(a);
const plus = (a: String|number|boolean , b: number, c : number) => {
    console.log(a,b,c);
}
const a= plus;
a(true,10,20);

let pet = { type:"Dog",name:"Bruno",Breed:"Pug"};
console.log(pet.name);
let pet2 = pet;
pet2 = { type:"cat",name:"tom",Breed :"arabian"};
console.log(pet2);
console.log(pet);
