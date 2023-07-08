Hello, I show you how I completed Homework5 for Full Stack Advanced Course.

Requirements of task and how I handle them

1.Upon opening the page, it is necessary to fetch from the server a list of all users and the overall list of posts
2.After loading all the users and their posts, it is necessary to display all the posts on the page.
```javascript
function displayPosts(posts) {
  const postsContainer = document.getElementById("container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const card = new Card(post);
    const cardElement = card.renderCard();
    postsContainer.appendChild(cardElement);
  });
}
```

3.Each post should be displayed as a card (example: https://prnt.sc/hF2kSUR-GC4b) and include a title, text, as well as the name, last name, and email of the user who posted it.
4.Each card should have an icon or button that allows deleting the card from the page. When clicked, it should send a DELETE request to the address https://ajax.test-danit.com/api/json/posts/${postId}. After receiving confirmation from the server (the request was successful), you can remove the card from the page using JavaScript.

```javascript
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
```

5.The cards must be implemented using ES6 classes. For this, you need to create a class called Card. You can add other classes if necessary.
```javascript
class Card {
  constructor(post) {
    this.post = post;
  }

  //functions below, here you can loook at them from source code!
```


6.Add functionality (icon) for editing the content of a card. After editing a card, to confirm the changes, send a PUT request to the address https://ajax.test-danit.com/api/json/posts/${postId}
```javascript
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
```

Reminder! Also **Animation** is ready for application.
