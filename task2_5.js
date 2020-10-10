const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]

let avg_salary = employees.reduce(function(acc, employee){
    return acc += employee.salary / employees.length;
}, 0);

let sorted_employees = employees.sort(function(a, b) {
    return a.salary - b.salary; 
})

let selected_employees = employees.filter(function(employee){
    return employee.age > 25 && employee.salary > 4500
});
