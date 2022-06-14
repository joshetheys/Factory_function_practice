// function Employee(name, hours, rate) {
//     return {
//         name: name,
//         salary: hours*rate,
//         display: () => {
//             document.write(`
//             <br>Name: ${name} <br>
//                 Salary: ${hours*rate}<br>`
//             );
    
//         }
        
//     };
// }
// let emp1 = Employee('Peter', 40, 500);
// let emp2 = Employee('Samuel', 80, 300);

// emp1.display();
// emp2.display();
function Employee(name, hours, rate) {
    return {
        name: name,
        salary: ()=>{
            return hours * rate;
        }
    };
}
let emp1 = Employee('Peter', 40, 500);
let emp2 = Employee('Samuel', 80, 300);

document.write(`<br>Name: ${emp1.name}<br>
Salary: R ${emp1.salary()}<br>`) ;
document.write(`<br>Name: ${emp2.name}<br>
Salary: R ${emp2.salary()}<br>`) ;

// const Employee = {
//     Name: (name)=> {
//         return name;
// },
// calculateSalary: (hours, rate)=> {
//     return hours * rate;
// }
// }
// console.log(`
// Name: ${Employee.Name('Peter')}
// Salary: R${Employee.calculateSalary(40, 500)}`); 
// console.log(`
// Name: ${Employee.Name('Samuel')}
// Salary: R${Employee.calculateSalary(80, 300)}`); 



