$(() => {

});
const postUser = (user) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:5555/api/users",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .done((res) => {
        console.log(res);
        document.location = "get-all-users.html";
    })
    .fail((err) => {
        console.error(err);
    })
    ;
}
const save = () => {
    let user = getDataFromHtml();
    postUser(user);
}
const getDataFromHtml = () => {
    let user = {};
    user.id = "0";
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = "Train@MAX";
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReviewer = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    console.debug(user);
    return user;
}
const loaded = () => {

}
const display = (user) => {
    document.getElementById("pid").value = user.id;
    document.getElementById("pfirstname").value = user.firstname;
    document.getElementById("plastname").value = user.lastname;
    document.getElementById("pusername").value = user.username;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("pemail").value = user.email;
    document.getElementById("previewer").checked = user.isReviewer;
    document.getElementById("padmin").checked = user.isAdmin;
}
