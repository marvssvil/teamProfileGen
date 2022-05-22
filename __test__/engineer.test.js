const Engineer = require('../lib/Engineer');
 
test('Engineer', () => {
    const engineer = new Engineer('Maria', 45, 'marcs@gmail', 'marvsiil');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('github value', () => {
    const engineer = new Engineer('Maria', 45, 'marcs@gmail', 'marvsiil');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('role', () => {
    const engineer = new Engineer('Maria', 45, 'marcs@gmail', 'marvsiil');

    expect(engineer.getRole()).toEqual("Engineer");
});