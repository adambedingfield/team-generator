const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer employee', () => {
    const engineer = new Engineer('Bob', '1000', 'test@test.com', 'Engineer','Test@github.com');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('1000');
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('Test@github.com');
});