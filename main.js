const url = "http://localhost:5500/api";

const NewUser = {
    name: "Wesley Bernardes",
    avatar: "http://lorempixel/400/200/",
    city: "Itajubá"
}

const UpdatedUser = {
    name: "Mayk Brito",
    avatar: "http://lorempixel/400/200/",
    city: "Recife"
}

function getUser() {
    axios.get(url).then(response => {
        const data = response.data.users;

        const renderResults = document.querySelector("#render-results");
        renderResults.textContent = JSON.stringify(data);
    }).catch(error => console.log(error));
}

getUser();

function addNewUser() {
    axios.post(url, MewUser).then(response => {
        alert(JSON.stringify(response.data));
    }).catch(error => console.log(error));
}

// addNewUser();

function updateUser() {
    axios.put(`${url}/3`, UpdatedUser).then(response => {
        alert(JSON.stringify(response.data));
    }).catch(error => console.log(error));
}

// updateUser();

function deleteUser() {
    axios.delete(`${url}/11`).then(response => {
        alert(JSON.stringify(response.data));
    }).catch(error => console.log(error));
}

deleteUser();