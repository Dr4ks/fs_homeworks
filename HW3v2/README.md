Hello, I show you how I completed Homework3 for Full Stack Advanced Course.

Requirements of task and how I handle them

1.Explain in your own words, as you can understand, what such destructurization and new things are needed

Destructuring is a feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and convenient way.
It simplifies the process of accessing and working with the individual elements or properties of complex data structures.

For example, if you have an array, you can use array destructuring to assign its elements to separate variables:

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

Another example for us that similarly, object destructuring allows you to extract properties from an object and assign them to variables with the same name:

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: 'John'
console.log(age); // Output: 30
```

Now, it's time to start practical questions of this HomeWork3.

Reminder! All tasks must be completed using the destructuring syntax.


TASK 1
Two companies have decided to merge, and they need to combine their customer databases.

You have two arrays of strings, each containing customer surnames. Create a new array based on these arrays, which will be the combination of the two arrays without any duplicate surnames.

Solution is below

```javascript
const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const [...combinedClients] = [...new Set([...clients1, ...clients2])];

console.log(combinedClients);
```

Output should be like below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
[
  'Gilbert',    'Salvatore',
  'Pierce',     'Summers',
  'Forbes',     'Donovan',
  'Bennett',    'Zaltzman',
  'Michaelson'
]
```



TASK 2
You have an array called characters which consists of objects. Each object describes a character.

Create an array charactersShortInfo based on it, which consists of objects with only 3 fields - name, surname, and age.

Solution is below.

```javascript
const charactersShortInfo = characters.map(({ name, lastName, age }) => ({ name, lastName, age }));

console.log(charactersShortInfo);
```

Output should be like below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
[
  { name: 'Elena', lastName: 'Gilbert', age: 17 },
  { name: 'Caroline', lastName: 'Forbes', age: 17 },
  { name: 'Alaric', lastName: 'Saltzman', age: 31 },
  { name: 'Damon', lastName: 'Salvatore', age: 156 },
  { name: 'Rebekah', lastName: 'Mikaelson', age: 1089 },
  { name: 'Klaus', lastName: 'Mikaelson', age: 1093 }
]
```


TASK3
We have an object user:
Write a destructuring assignment that:

assigns the property name to a variable name
assigns the property years to a variable age
assigns the property isAdmin to a variable isAdmin with a default value of false if the property doesn't exist in the object


Solution is below

```javascript
const user1 = {
    name: "John",
    years: 30
  };
  
  const { name, years: age, isAdmin = false } = user1;
  
  console.log(name);     
  console.log(age);      
  console.log(isAdmin);  
```

Output should be like this.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
John
30
false
```


TASK4
The detective agency has been collecting information about the possible identity of Satoshi Nakamoto for several years. All the information collected in a specific year is stored in a separate object. There are three such objects - satoshi2018, satoshi2019, satoshi2020.

To create a complete profile, you need to combine the data from these three objects into one object called fullProfile.

Please note that some fields may be repeated in the objects. In such cases, the resulting object should retain the value obtained from the latest year (for example, the value from 2020 takes priority over 2019).

Write code that creates a complete dossier about the possible person Satoshi Nakamoto. You are not allowed to modify the satoshi2018, satoshi2019, satoshi2020 objects.


Solution is below
```javascript
const fullProfile = {
  ...satoshi2020,
  ...satoshi2019,
  ...satoshi2018
};

console.log(fullProfile);
```

Reminder! Due to requirement of third which talks about repeatition (for example, the value from 2020 takes priority over 2019). For this we need to enter objects into fullprofile from 2020 to 2018, like decreasing way.

Output should be like below.

```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
John
30
false
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
John
30
false
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
{
  name: 'Satoshi',
  surname: 'Nakamoto',
  age: 44,
  country: 'Japan',
  birth: '1975-04-05',
  location: { lat: 38.869422, lng: 139.876632 },
  hidden: true,
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Tor',
  technology: 'Bitcoin'
}
```



TASK5
You are given an array of books. You need to add one more book to it without modifying the existing array (the result should be a new array).

Solution is below like this.
```javascript
  const newBooks = [...books, {...bookToAdd}];

  console.log(newBooks);
```

And output should be like below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js  
[
  { name: 'Harry Potter', author: 'J.K. Rowling' },
  { name: 'Lord of the rings', author: 'J.R.R. Tolkien' },
  { name: 'The witcher', author: 'Andrzej Sapkowski' },
  { name: 'Game of thrones', author: 'George R. R. Martin' }
]
```


TASK6
Given the object employee. Add properties age and salary to it without modifying the original object (a new object should be created with all the necessary properties). Print the new object to the console.
```javascript
const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
}
```

Here is the solution below.
```javascript
const newEmployee = {
  ...employee,
  age: 30,
  salary: 5000
};

console.log(newEmployee);
```


Output should be like below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
{ name: 'Vitalii', surname: 'Klichko', age: 30, salary: 5000 }
```


TASK7
Complete the code so that it works correctly

```javascript
const array = ['value', () => 'showValue'];

// Write the code here

alert(value); // should output 'value'
alert(showValue()); // should output 'showValue'
```


Solution is below.
```javascript
const array = ['value', () => 'showValue'];

const [value, showValue] = array;

console.log(value); // Output: 'value'
console.log(showValue()); // Output: 'showValue'
```


Finally, output should be like this below.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW3v2> node .\main.js
value
showValue
```

FINALLY, as you see from "package.json" file, that I added short way for you to run scripts, we have seven tasks.
Example:
To run first task1. You just need to enter `npm run task1` into terminal