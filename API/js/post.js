
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




// Async Await with Try Catch

const handleAsync = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
    }
    catch {
        console.log("Error");
    }
}

handleAsync();



// create fetch


const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;

        if (status) {
            const mockData = {
                json: () => Promise.resolve({ name: "hero" })
            };
            resolve(mockData);
        }
        else {
            reject("Error")
        }
    })
}

fetchData()
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))




// set Interval


let count = 0;
const interval = setInterval(() => {
    count++;
    // console.log(count);

    if (count >= 5) {
        clearInterval(interval)
    }
}, 1000)