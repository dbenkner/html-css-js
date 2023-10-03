const getUser = (id) => {
    let http = new XMLHttpRequest();
         http.responseType = "json";
         http.open("GET", `http://localhost:5555/api/users/${id}`, true);
         
         http.onload = () => {
            console.log(http.response);
            display(http.response);
        }
        
        http.send();
}
const deleteUser = (id) => {
    let http = new XMLHttpRequest();
    console.log("hello");
    http.open("DELETE", `http://localhost:5555/api/users/${id}`, true);
         http.onload = () => {
            console.log(http.status);
        }
        http.send();
        console.log(http.status);
        document.location = "get-all-users.html";
}
const del = () => {
    let user = getDataFromHtml();
    deleteUser(user.id);
}
const getDataFromHtml = () => {
    let user = {};
    user.id = document.getElementById("pid").value;
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = document.getElementById("ppassword").value
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReviewer = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    console.debug(user);
    return user;
}
const loaded = () => {
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    getUser(id);
}
const display = (user) => {
    document.getElementById("pid").value = user.id;
    document.getElementById("pfirstname").value = user.firstname;
    document.getElementById("plastname").value = user.lastname;
    document.getElementById("pusername").value = user.username;
    document.getElementById("ppassword").value = user.password;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("pemail").value = user.email;
    document.getElementById("previewer").checked = user.isReviewer;
    document.getElementById("padmin").checked = user.isAdmin;
}
