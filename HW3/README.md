Hello, I show you how I completed Homework3 for Full Stack Advanced Course.

Requirements of task and how I handle them

1.Explain in your own words how you understand prototypical inheritance works in JavaScript.

Prototypical inheritance, in simple words, is a way objects in JavaScript can inherit properties and behaviors from other objects. Every object in JavaScript has a prototype, which serves as a blueprint or template for creating new objects.

There are various ways to achieve Prototype Inheritance in JavaScript, allowing objects to inherit properties and methods from other objects.

First Way=>Using Object.create(protoParentObject):

```javascript
const personPrototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const john = Object.create(personPrototype);
john.name = "John Doe";
john.greet();

```

Second way=>Using the __proto__ keyword:
```javascript
const personPrototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const john = {
  name: "John Doe",
  __proto__: personPrototype
};

john.greet();

```

2.Why is it necessary to call super() in the constructor of a child class?

The super keyword is used to call the constructor of the parent class and allows access to the properties and methods of the parent class. It acts as a reference to the parent class.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old and his skill is ${this.skill}`);
  }
}

const developer = new Developer("Sahib Humbatzada", 19, "JavaScript");
developer.info();

```

Let's start our practical task!

First req=>Create a class called Employee with the following properties: (name), (age), (salary). Ensure that these properties are initialized when an object is created.
```javascript
class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
}
```

Second req=>Create getters and setters for these properties.
```javascript
    //getters
    get getname(){
        return this.name;
    }
    get getage(){
        return this.age;
    }
    get getsalary(){
        return this.salary;
    }
    
    //setters
    set setname(newname){
        this.name=newname;
    }
    set setage(newage){
        this.age=newage;
    }
    set setsalary(newsalary){
        this.salary=newsalary;
    }
```


Third req=>Create a class called Programmer that inherits from the Employee class and has an additional property called lang (list of programming languages).
```javascript
class Programmer extends Employee{
    constructor(name,age,salary,languages){
        super(name,age,salary);
        this.languages=languages;
    }

    //getter
    get getlanguages(){
        return this.getlanguages;
    }

    //setter
    set setlanguages(newlanguages){
        this.languages=newlanguages;
    }
}
```

Fourth req=>Override the getter for the salary property in the Programmer class. Let it return the salary property multiplied by 3.
```javascript
 //salary property multiplied
    get getsalary(){
        return this.salary*3;
    }
```


Fifth req=>Create multiple instances of the Programmer class and display them in the console.
```javascript
var programmer1=new Programmer("Sahib Humbatzada",20,10000,['Javascript','Python','Java']);
var programmer2=new Programmer("Akif Humbatzada",23,17000,['Javascript','Python','Java','Typescript']);

console.log(programmer1);
console.log(programmer2);
```


Our result should be like below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3> node .\index.js
Programmer {
  name: 'Sahib Humbatzada',
  age: 20,
  salary: 10000,
  languages: [ 'Javascript', 'Python', 'Java' ]
}
Programmer {
  name: 'Akif Humbatzada',
  age: 23,
  salary: 17000,
  languages: [ 'Javascript', 'Python', 'Java', 'Typescript' ]
}
```


