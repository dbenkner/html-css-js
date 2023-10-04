$(() => {
    console.log("Ready");
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    getUserByPK(id);
    $("#remove").on("click", () => {
        remove();
    });
  });


let user = null;
const getUserByPK = (id) => {
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done((res) => {
            console.log(res);
            display(res);
            user = res;
        })
        .fail((err) => {
            console.log(err);
        })
}
const remove = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("DELETE", `http://localhost:5555/api/users/${user.id}`, true);
    http.onload = () => {
       console.log(http.response);
   }
   http.send();
   document.location = 'get-all-users.html'
}
const loaded = () => {
    let data = document.URL.split("?")[1];
    let id =  +data.split("=")[1];
    getUserByPK(id);
}
const display = (user) => {
    let tData = document.getElementById("tData");
    tData.innerHTML = "";
    let td = "<tr>";
    td += `<td>Id</td><td>${user.id}</td></tr>`;
    td += `<tr><td>Name</td><td>${user.firstname} ${user.lastname}</td></td>`;
    td += `<tr><td>Username</td><td>${user.username}</td></td>`;
    td += `<tr><td>Phone</td><td>${user.phone}</td></td>`;
    td += `<tr><td>Email</td><td>${user.email}</td></td>`;
    td += `<tr><td>Reviewer</td><td>${user.isReviewer? "Yes" : "No"} </td></td>`;
    td += `<tr><td>Admin</td><td>${user.isAdmin? "Yes" : "No"}</td></td>`;
    tData.innerHTML = td;
}