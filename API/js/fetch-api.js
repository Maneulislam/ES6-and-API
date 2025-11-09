


const handleLoadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            userData(data)
        })
}


const userData = (users) => {
    const olContainer = document.getElementById('ol-container');
    for (let user of users) {

        const div = document.createElement('div');

        div.innerHTML = `<h3> id: ${user.id}
        <h3>name: ${user.name}</h3>
        <h4>email: ${user.email}</h4>
        
        `;
        olContainer.appendChild(div);

        // const li = document.createElement('li');
        // li.innerText = user.name;
        // olContainer.appendChild(li);
    }
}