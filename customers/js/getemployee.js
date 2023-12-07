$(() => {
    console.log("test");
    let data = document.URL;
    let id = data.split("=")[1];
    console.log(id);
    load(id);
});
const load = (id) => {
    let url = `http://localhost:5555/api/employees/${id}`;
    console.log(url);
    $.getJSON(url).done((res) => {
        console.log(res);
        display(res);
    }).fail((err) => {
        console.error(err);
    });
}
const display = (employee) => {
    let header = $("#employeeDetHead");
    header.append(`<h1>Details of ${employee.email}</h1>`);
    let tdata = $(`#empDetails`);
    tdata.append(`<tr><td>ID</td><td>${employee.id}</td></tr>`);
    tdata.append(`<tr><td>Email</td><td>${employee.email}</td></tr>`);
    tdata.append(`<tr><td>Active</td><td>${employee.active ? "yes": "no"}</td></tr>`);
}