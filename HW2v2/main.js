const books = [
    {
        author: "Lucy Foley",
        name: "List of Invitees",
        price: 70
    },
    {
        author: "Susanna Clarke",
        name: "Jonathan Strange & Mr Norrell",
    },
    {
        name: "Design. A Book for Non-Designers.",
        price: 70
    },
    {
        author: "Alan Moore",
        name: "Neonomicon",
        price: 70
    },
    {
        author: "Terry Pratchett",
        name: "Moving Pictures",
        price: 40
    },
    {
        author: "Angus Hyland",
        name: "Cats in Art",
    }
];


const rootElement = document.getElementById("root");
const ulElement = document.createElement("ul");

books.forEach(book => {
  try {
    if (!book.author || !book.name || !book.price) {
      throw new Error("Invalid book object");
    }

    const liElement = document.createElement("li");

    let content = `<strong>Title:</strong> ${book.name}<br>`;
    content += `<strong>Author:</strong> ${book.author}<br>`;
    content += `<strong>Price:</strong> $${book.price}`;

    liElement.innerHTML = content;
    ulElement.appendChild(liElement);
  } catch (error) {
    console.error(`${error.message}: ${JSON.stringify(book)}`);
  }
});

rootElement.appendChild(ulElement);
