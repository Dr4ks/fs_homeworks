Hello, I show you how I completed Homework1 for Full Stack Advanced Course.

Requirements of task and how I handle them

1.project should be named "project-x".For this, we need to have "name" value in package.json file like this.
```json
{
  "name": "project-x"
}
```

Reminder! I also add 'node_modules' folder into .gitignore.
```gitignore
node_modules/
```

2.project should include a description that contains your name, surname, and group.For this, we need to have "description" value in package.json file like this.
```json
{
  "description": "Sahib Humbatzada (Full Stack Advanced)",
}
```

3.Below dependencies should be added.
eslint (as a dev-dependency)
gulp (as a dev-dependency)
moment (as a normal dependency)
bootstrap (as a normal dependency)
browser-sync (as a dev-dependency)

Here is the solution that 'dependencies' and 'dev-dependencies' values in package.json file.
Adding by npm like this
How to add dependency and dev-dependency to our project:
Dependency=> npm install <dep_name> 
Dev-dependency=> npm install <dep_name> --save-dev

Our package.json file like below.
```json
{
  "dependencies": {
    "bootstrap": "^5.2.3",
    "moment": "^2.29.4"
  },
  "devDependencies": {
    "browser-sync": "^2.29.3",
    "eslint": "^8.40.0",
    "gulp": "^4.0.2"
  }
}
```

4.Our entry point file which means "main" value in package.json file.
```json
{
  "main": "app.js"
}
```

5.Adding link to git repository in package.json
```json
{
  "repository": "https://github.com/Dr4ks/fs_homeworks.git"
}
```

6.Create a script in package.json called "start" that executes the command "node app.js"
```json
{
  "scripts": {
    "start": "node app.js"
  }
}
```

Let's run on Powershell and see the results.
```powershell
PS C:\Users\Sahib\Desktop\Coding\fs_homeworks\HW1> npm start

> project-x@1.0.0 start
> node app.js

Hello Node
```




