$(() => {
    $("#save").on("click", () => {
        save();
    });
});

const postVendor =(vendor) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/vendors",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    }
    )
    .done((res) =>{
        console.log(res);
        display(res);
    })
    .fail((err) => {
        console.error(err);
    });
}
const save = () => {
    let vendor = getDataFromHTML();
    postVendor(vendor);
}
const getDataFromHTML = () => {
    let vendor = {}
    vendor.id ="0";
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