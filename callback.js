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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'posts three', body: 'body three' }, getPosts);