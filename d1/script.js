const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let posts ='';
        data.forEach((post) =>{ 
            posts += `
                <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                </div>
            `
        })
        document.querySelector('#output').innerHTML = posts;
    })
    .catch((err) => {
        console.log('rejected')
    })
}

const addPost = (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain",
            "Content-type": "application/json"
        },
        body: JSON.stringify({title: title, body: body}) 
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
}

const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', getData)

const addForm = document.querySelector('#addPost')
addForm.addEventListener('submit', addPost);