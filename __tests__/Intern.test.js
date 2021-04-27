const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern employee', () => {
    const intern = new Intern('Bob', '1000', 'test@test.com', 'Intern','Test Uni');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('1000');
    expect(intern.email).toBe('test@test.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('Test Uni');
});