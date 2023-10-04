$(() => {
    productList()
    .done((res) => {
        getAllProducts(res);
        console.log(res);
    });
});

const getAllProducts = (products) => {
    let tbody = $("#tbody");
    console.log(products);
    tbody.empty();
    for(let p of products){
        let tr = $("<tr></tr>");
        $(`<td>${p.id}</td>`).appendTo(tr);
        $(`<td>${p.partNbr}</td>`).appendTo(tr);
        $(`<td>${p.name}</td>`).appendTo(tr);
        $(`<td>${p.price}</td>`).appendTo(tr);
        $(`<td><a href="get-product.html?id=${p.id}">Details</a> | <a href="put-product.html?id=${p.id}"> Edit</a>`).appendTo(tr);
        tr.appendTo(tbody);
    }
}