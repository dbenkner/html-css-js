$(() => {
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    productDetail(id)
        .done((res) => {
            console.log(res);
            listDetail(res);
        })
});

const listDetail = (product) => {
    let tbody = $(`#tbody`);
    tbody.empty();
        $(`<tr><td>ID</td><td>${product.id}</td></tr>`).appendTo(tbody);
        $(`<tr><td>name</td><td>${product.name}</td></tr>`).appendTo(tbody);
        $(`<tr><td>Part Number</td><td>${product.partNbr}</td></tr>`).appendTo(tbody);
        $(`<tr><td>Price</td><td>$${product.price}</td></tr>`).appendTo(tbody);
        $(`<tr><td>Unit</td><td>${product.unit}</td></tr>`).appendTo(tbody);
        $(`<tr><td>Vendor</td><td>${product.vendor.name}</td></tr>`).appendTo(tbody);
}