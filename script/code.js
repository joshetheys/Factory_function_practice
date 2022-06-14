function Employee(name, hours, rate) {
    return {
        name: name,
        salary: hours*rate,
        display: () => {
            document.write(`
            <br>Name: ${name} <br>
                Salary: ${hours*rate}<br>`
            );
    
        }
        
    };
}
let emp1 = Employee('Peter', 40, 500);
let emp2 = Employee('Samuel', 80, 300);

emp1.display();
emp2.display();

