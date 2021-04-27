const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Bob', '1000', 'test@test.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('1000');
    expect(employee.email).toBe('test@test.com');
});