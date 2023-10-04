$(() => {
    getVendors();
});
const getVendors = () => {
    $.getJSON("http://localhost:5555/api/vendors")
    .done((res) => {
        console.log(res);
        display(res);
    })
    .fail((err) => {
        console.error(err);
    });
}
const display = (vendors) => {
    let tbody = $("#tbody");
    tbody.empty();
    for(v of vendors) {
        let tr = $("<tr></tr>");
        tr.append(`<td>${v.id}</td>`);
        tr.append(`<td>${v.code}</td>`);
        tr.append(`<td>${v.name}</td>`);
        tr.append(`<td>${v.city}</td>`);
        tr.append(`<td>${v.state}</td>`);
        tr.append(`<td><a class="link-info link-offset-2 link-underline link-underline-opacity-0" href="tel:${v.phone}">${v.phone}</a></td>`);
        tr.append(`<td><a class="link-info link-offset-2 link-underline link-underline-opacity-0" href="mailto:${v.email}">${v.email}</td>`);
        let a1 =(`<a class="link-secondary link-offset-2 link-underline link-underline-opacity-0" href="get-vendor.html?id=${v.id}">Details</a>`);
        let sep = " | "
        let a2=(`<a class="link-secondary link-offset-2 link-underline link-underline-opacity-0" href="put-vendor.html?id=${v.id}">Edit</a>`);
        let tda = $("<td></td>")
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);
        tbody.append(tr);
    }
}