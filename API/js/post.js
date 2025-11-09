
const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            displayPost(data);

        })
}


const displayPost = (posts) => {

    const postContainer = document.getElementById('post-container');

    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('div-card');
        div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>


        `;

        postContainer.appendChild(div);
    }
}

handlePost();
