const Intern = require('../lib/Intern');

test('Intern', () => {
    const intern = new Intern('Maria', 45, 'marcs@gmail', 'UM');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new Intern('Maria', 45, 'marcs@gmail', 'UM');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('intern', () => {
    const intern = new Intern('Maria', 45, 'marcs@gmail', 'UM');

    expect(intern.getRole()).toEqual("Intern");
}); 