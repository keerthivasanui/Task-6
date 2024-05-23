class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("surya", "theeran", "26-02-1998" , "chennai");
var person2 = new Person("Ramachandran", "selvapathy", "20-08-1953" , "chennai");
var person3 = new Person("Banumathi", "Sundram", "15-08-1960" , "mandaveli");
var person4 = new Person("vivek", "dhakshinamoorthy", "31-10-1984" , "chennai");
var person5 = new Person("keerthivasan", "Ramachandran", "15-07-2000" , "mylapore");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)