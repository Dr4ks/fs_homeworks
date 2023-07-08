const users = "https://ajax.test-danit.com/api/json/users";
const posts = "https://ajax.test-danit.com/api/json/posts";

class Card {
  constructor(post) {
    this.post = post;
  }

  createCardElement() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${this.post.title}</h3>
      <p>${this.post.body}</p>
      <p><strong>Author:</strong> ${this.post.user.name} ${this.post.user.username} (${this.post.user.email})</p>
      <div class="actions">
        <button class="delete" data-post-id="${this.post.id}">Delete</button>
        <button class="edit" data-post-id="${this.post.id}">Edit</button>
      </div>
    `;
    return card;
  }

  async handleDelete() {
    const postId = this.post.id;
    const success = await deleteData(`${posts}/${postId}`);
    if (success) {
      this.card.remove();
    }
  }

  handleEdit() {
    const newTitle = prompt("Enter new title:", this.post.title);
    const newText = prompt("Enter new text:", this.post.body);
    if (newTitle && newText) {
      const updatedPost = {
        ...this.post,
        title: newTitle,
        body: newText,
      };
      putData(`${posts}/${this.post.id}`, updatedPost);
      this.card.querySelector("h3").textContent = newTitle;
      this.card.querySelector("p").textContent = newText;
    }
  }

  renderCard() {
    this.card = this.createCardElement();

    const deleteButton = this.card.querySelector(".delete");
    deleteButton.addEventListener("click", this.handleDelete.bind(this));

    const editButton = this.card.querySelector(".edit");
    editButton.addEventListener("click", this.handleEdit.bind(this));

    return this.card;
  }
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function deleteData(url) {
  const response = await fetch(url, { method: "DELETE" });
  return response.ok;
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newPost = await response.json();
  return newPost;
}

async function putData(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
}


function displayPosts(posts) {
  const postsContainer = document.getElementById("container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const card = new Card(post);
    const cardElement = card.renderCard();
    postsContainer.appendChild(cardElement);
  });
}

function showLoadingAnimation() {
  document.getElementById("load").style.display = "block";
}

function hideLoadingAnimation() {
  document.getElementById("load").style.display = "none";
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("postitle").value = "";
  document.getElementById("postxt").value = "";
}

function handleAddPost() {
  openModal();
}

async function handleCreatePost() {
  const postTitle = document.getElementById("postitle").value;
  const postText = document.getElementById("postxt").value;

  if (postTitle && postText) {
    const newPost = {
      title: postTitle,
      body: postText,
    };

    const createdPost = await postData(posts, newPost);
    const card = new Card(createdPost);
    const cardElement = card.renderCard();
    const postsContainer = document.getElementById("container");
    postsContainer.insertBefore(cardElement, postsContainer.firstChild);

    closeModal();
  }
}

async function init() {
  showLoadingAnimation();

  try {
    const [usersData, postsData] = await Promise.all([
      getData(users),
      getData(posts),
    ]);
    const postsWithUser = postsData.map((post) => ({
      ...post,
      user: usersData.find((user) => user.id === post.userId),
    }));

    displayPosts(postsWithUser);
  } catch (error) {
    console.error(error);
  } finally {
    hideLoadingAnimation();
  }
}

document.getElementById("addpost").addEventListener("click", handleAddPost);
document.getElementById("crtpost").addEventListener("click", handleCreatePost);
document.querySelector(".cls").addEventListener("click", closeModal);

init();
