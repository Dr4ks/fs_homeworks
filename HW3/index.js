class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

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
}

class Programmer extends Employee{
    constructor(name,age,salary,languages){
        super(name,age,salary);
        this.languages=languages;
    }

    //salary property multiplied
    get getsalary(){
        return this.salary*3;
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

var programmer1=new Programmer("Sahib Humbatzada",20,10000,['Javascript','Python','Java']);
var programmer2=new Programmer("Akif Humbatzada",23,17000,['Javascript','Python','Java','Typescript']);

console.log(programmer1);
console.log(programmer2);
