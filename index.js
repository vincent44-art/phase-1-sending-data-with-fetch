// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(object => {
            const idElement = document.createElement("p");
            idElement.textContent = `New ID: ${object.id}`;
            document.body.appendChild(idElement);
        })
        .catch(error => {
            const errorElement = document.createElement("p");
            errorElement.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorElement);
        });
}
