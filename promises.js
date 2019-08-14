const posts = [{
    title: 'posts one',
    body: 'body one'
}, {
    title: 'posts two',
    body: 'body two'
}]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);


}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error');
            }
        }, 2000);
    });
}

// createPost({ title: 'posts three', body: 'body three' })
//     .then(getPosts)
//     .catch(error => console.log(error));

// Async/await 
// async function init() {
//     await createPost({ title: 'posts three', body: 'body three' });

//     getPosts();
// }

// init();

async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res;

    console.log(data);
}

fetchUser();

// Promise.all
// const promise1 = Promise.resolve('hello world');
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values => console.log(values));x