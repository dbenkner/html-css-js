$(() => {
    let showButton = false;
    $("#verify").hide();
    $("#verify-delete").hide();
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    getVendor(id);
    $("#remove").on("click", () => {
        showButton = !showButton;
        if(showButton){
            $("#verify").show();
            $("#verify-delete").show();
        }
        else {
            $("#verify").hide();
        }
    });

    $("#verify-delete").on("click", () => {
        remove(id);
        window.location = "get-vendors.html";
    });
});

const getVendor =(id) => {
    $.getJSON(`http://localhost:5555/api/vendors/${id}`)
    .done((res) =>{
        console.log(res);
        display(res);
    })
    .fail((err) => {
        console.error(err);
    });

}
const remove= (id) => {
    $.ajax({
        method: "DELETE",
        url: `http://localhost:5555/api/vendors/${id}`
    })
    .done((res) => {
        console.log(res);
        document.location = "get-vendors.html"
    })
    .fail((err) => {
        console.error(err);
    });
}
const display = (vendor) => {
    document.getElementById("vid").innerText = vendor.id;
    document.getElementById("vcode").innerText = vendor.code;
    document.getElementById("vname").innerText = vendor.name;
    document.getElementById("vaddress").innerText = vendor.address;
    document.getElementById("vcity").innerText = vendor.city;
    document.getElementById("vzip").innerText = vendor.zip;
    document.getElementById("vstate").innerText = vendor.state;
    document.getElementById("vphone").innerText = vendor.phone;
    document.getElementById("vemail").innerText = vendor.email;
}