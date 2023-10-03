const postUser = (user) => {
    let http = new XMLHttpRequest();
         http.responseType = "json";
         http.open("POST", `http://localhost:5555/api/users`, true);
         http.setRequestHeader('Content-type', 'application/json');
         let data = JSON.stringify(user);
         http.data = data;
         console.log(http.data);
         http.onload = () => {
            console.log(http.response);
            display(http.response);
        }
        http.send(data);
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
    let user = getDataFromHtml();
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
