$(() => {

});

const postEmployee = () => {
    let data = getEmployee();
    console.log(data);
    $.ajax({
        method: "post",
        url: 'http://localhost:5555/api/employees',
        context: JSON,
        data: JSON.stringify(data),
        contentType: "application/JSON"
    }).done((res) => {
        console.log(res);
    }).fail((err) => {
        console.error(err);
    });
}

const getEmployee = () => {
    let employee = {};
    employee.id = "0";
    employee.email = document.getElementById("eEmail").value;
    employee.password = document.getElementById("ePassword").value;
    employee.active = document.getElementById("eActive").checked;
    return employee;
}
class Employee {
    constructor() {

    }
}