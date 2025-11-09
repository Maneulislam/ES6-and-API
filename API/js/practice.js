//------------------------------------
// Fetch data
//------------------------------------

const handleLoadData = () => {
    console.log("object");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}