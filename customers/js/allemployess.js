$(() => {
    console.log("test");
    getAllEmplyees();
});

const getAllEmplyees = () => {
    $.getJSON("http://localhost:5555/api/employees/").done((res) => {
        console.log(res);
        display(res);
    }).fail((err) => {
        console.log(err);
    });
}
const display = (employees) => {
    let tdata = $("#employeesTable");
    tdata.empty();
    for(let employee of employees) {
        let tr = $("<tr></tr>");
        tr.append(`<td>${employee.id}</td>`);
        tr.append(`<td>${employee.email}</td>`);
        tr.append(`<td> ${employee.active? 'YES' : 'NO' }</td>`);
        tr.append(`<td><a href="get-employee.html?id=${employee.id}">Details</a></td>`);
        console.log(employee);
        tdata.append(tr);
    }
    
}
class Employee {
    constructor(id, email, password, active) {
        this.id = id;
        this.email = email,
        this.password = password;
        this.active = active;
    }
}