
class Customer {
    constructor (id, code, name, sales, active) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.sales = sales;
        this.active = active;
    }
}
function getAllCustomers() {
    let xhr = new XMLHttpRequest();

    let url = 'http://localhost:5555/api/customers';
    xhr.responseType = "json";

    xhr.open("GET", url, true);
    let customers = [];
    xhr.onload = () => {
        for(let res of xhr.response) {
            customers.push(new Customer(res.id, res.code, res.name, res.sales, res.active));
        }
        let tData = document.getElementById("tableData");
        let data = "";
        for(let customer of customers) {
            data += `<tr><td>${customer.id}</td><td>${customer.code}</td><td>${customer.name}</td><td>${customer.sales}</td><td>${customer.active}</td></tr>`;
        }
        tData.innerHTML = data;
    }
    xhr.send();
}