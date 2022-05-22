const Employee = require('../lib/Employee');

test('creates employee', () => {
    const employee = new Employee('Maria', 45, 'marcs@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('employee name', () => {
    const employee = new Employee('Maria', 45, 'marcs@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('employee ID', () => {
    const employee = new Employee('Maria', 45, 'marcs@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('email', () => {
    const employee = new Employee('Maria', 45, 'marcs@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('role', () => {
    const employee = new Employee('Maria', 45, 'marcs@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});      