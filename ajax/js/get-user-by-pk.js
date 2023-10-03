const getUserByPK = (id) => {
    let http = new XMLHttpRequest();
         http.responseType = "json";
         http.open("GET", `http://localhost:5555/api/users/${id}`, true);
         
         http.onload = () => {
            console.log(http.response);
            display(http.response);
        }
        http.send();
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