const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager employee', () => {
    const manager = new Manager('Bob', '1000', 'test@test.com', 'Manager','Testtown');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe('1000');
    expect(manager.email).toBe('test@test.com');
    expect(manager.role).toBe('Manager');
    expect(manager.office).toBe('Testtown');
});