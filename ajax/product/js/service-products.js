const url ="http://localhost:5555/api/products";

//get all products
const productList = () => {
    return $.getJSON(`${url}`); //returns a "promise". A promise os JS's wayof handling calls to an api.
}
const productDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}
const vendorList = () => {
    return $get.JSON(`http://localhost:5555/api/vendors`);
}
const postProduct = (product) => {
    return $.ajax({
        method: "POST",
        url: url,
        data: JSON.stringify(product),
        contentType: "application/JSON" 
    })
}
