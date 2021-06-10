// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, Sam) 
{
    const newEmployee = {...employee};
    newEmployee[streetAddress] = '11 Broadway';
    return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, Sam) {
    employee[streetAddress] = '12 Broadway';
    return employee
}

function deleteFromEmployeeByKey(employee, name) { 
    const lostEmployee = {...employee};
    delete lostEmployee.name;
    return lostEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}