$(() => {
    console.log("ready");
    loaded();
    $("#save").on("click", () => {
        save();
    });
});
const getvendor = (id) => {
    let http = new XMLHttpRequest();
         http.responseType = "json";
         http.open("GET", `http://localhost:5555/api/vendors/${id}`, true);
         
         http.onload = () => {
            console.log(http.response);
            display(http.response);
        }
        http.send();
}
const putvendor = (vendor) => {
    $.ajax( {
        method: "PUT",
        url: `http://localhost:5555/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
    .done((res) => {
        console.log(res);
        document.location = "get-vendors.html";
    })
    .fail((err) => {
        console.error(err);
    })
    ;
}
const save = () => {
    let vendor = getDataFromHtml();
    putvendor(vendor);
}
const getDataFromHtml = () => {
    let vendor = {}
    vendor.id = document.getElementById("vid").value;
    vendor.code = document.getElementById("vcode").value;
    vendor.name = document.getElementById("vname").value;
    vendor.address = document.getElementById("vaddress").value;
    vendor.city = document.getElementById("vcity").value;
    vendor.zip = document.getElementById("vzip").value;
    vendor.state = document.getElementById("vstate").value;
    vendor.phone = document.getElementById("vphone").value;
    vendor.email = document.getElementById("vemail").value; 
    return vendor;
}
const loaded = () => {
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    getvendor(id);
}
const display = (vendor) => {
    document.getElementById("vid").value = vendor.id;
    document.getElementById("vcode").value = vendor.code;
    document.getElementById("vname").value = vendor.name;
    document.getElementById("vaddress").value = vendor.address;
    document.getElementById("vcity").value = vendor.city;
    document.getElementById("vzip").value = vendor.zip;
    document.getElementById("vstate").value = vendor.state;
    document.getElementById("vphone").value = vendor.phone;
    document.getElementById("vemail").value = vendor.email;
}
