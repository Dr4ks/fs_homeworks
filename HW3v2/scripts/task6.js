const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
  };
  
  const newEmployee = {
    ...employee,
    age: 30,
    salary: 5000
  };
  
  console.log(newEmployee);
  