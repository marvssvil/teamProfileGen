const Manager = require('../lib/Manager');
 
test('Manager', () => {
    const manager = new Manager('Maria', 45, 'marcs@gmail', 56);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('manager role', () => {
    const manager = new Manager('Maria', 45, 'marcs@gmail', 56);

    expect(manager.getRole()).toEqual("Manager");
}); 