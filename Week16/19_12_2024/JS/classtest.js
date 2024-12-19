let posts = [];
let showPosts =[];

function searchPosts(event) {
    window.event.preventDefault();
    const searchInput = document.getElementById("searcher");
    const searchValue = searchInput.value.toLowerCase();
    if(searchValue ===""){
        posts.map(item=> showPosts.push(item));
    }
    else{
        const filteredPosts = posts.filter(post => {
            return post.title.toLowerCase().includes(searchValue) || post.content.toLowerCase().includes(searchValue);
        });
        showPosts = filteredPosts;
        renderPosts();
    }
}

function editPost(id) {
    window.event.preventDefault();
    const editPost = posts.find(post => post.id === id);
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    titleInput.value = editPost.title;
    contentInput.value = editPost.content;
    deletePost(id);
}

function deletePost(id) {
    // const index = posts.findIndex(post => post.id === id);
    // posts.splice(index, 1);
    // renderPosts();
    window.event.preventDefault();
    posts = posts.filter(post => post.id !== id);
    showPosts = showPosts.filter(post => post.id !== id);
    renderPosts();
}

function renderPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";
    showPosts.forEach(post => {
        const newDiv = document.createElement("div");
        newDiv.classList.add('post');
        newDiv.innerHTML = `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>${post.date}</small>
            <div class="btn-container">
            <button class="edit-btn" onclick="editPost(${post.id})">Өңдеу</button>
            <button class="delete-btn" onclick="deletePost(${post.id})">Жою</button>
            </div>
        </div>
        `;
        postList.appendChild(newDiv);
    });

}

function addPost(event) {
    event.preventDefault();
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    if (title.value && content.value) {
        const post = {
            id: Date.now(),
            title: title.value,
            content: content.value,
            date: new Date().toLocaleDateString('kk-KZ')
        }
        posts.push(post);
        posts.map(item=> showPosts.push(item));
        renderPosts();
        title.value = '';
        content.value = '';
    }
}

