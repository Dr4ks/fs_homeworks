Hello, I show you how I completed Homework4 for Full Stack Advanced Course.

Requirements of task and how I handle them

1.Explain in your own words what AJAX is and how it is useful in JavaScript development.
Answer=>
AJAX, which stands for Asynchronous JavaScript and XML, is a technique used in web development to create interactive and dynamic web pages. It allows for data to be sent and received from a web server asynchronously, meaning that the browser can make requests to the server and receive responses without having to reload the entire web page.

Traditionally, when a user interacts with a web page, such as submitting a form or clicking a button, the browser sends a request to the server, which then processes the request and sends back a response. The web page then reloads, displaying the updated content.

With AJAX, what we can do=>
With AJAX, JavaScript can send requests to the server in the background without reloading the entire page. This enables the web page to update specific sections or components dynamically, providing a more responsive and seamless user experience.


2.Practical Session of Homework is below.

Requirements of task=>
1.Send an AJAX request to the URL https://ajax.test-danit.com/api/swapi/films to retrieve a list of all Star Wars movies
For this we just fetch and make the HTTP request to API to retrieve data.
```javascript
fetch("https://ajax.test-danit.com/api/swapi/films")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: " + response.status);
    }
  })
```

2.For each movie, retrieve the list of characters that appeared in that movie from the server. The list of characters can be obtained from the characters property.
3.As soon as the information about the movies is received from the server, immediately display the list of all movies on the screen. Include the episode number, movie title, and a brief summary (fields episodeId, name, openingCrawl).

Solution way of above reqs=>
We got movies and fields of them + to get more advanced while browsing for characters of movie, we add animation for here. As a result, we also did **Optional** part of this task.
```javascript
then(movies => {
    const moviesList = document.getElementById("movies-list");
    movies.forEach(movie => {
      const movieItem = document.createElement("li");
      movieItem.innerHTML = `<h2>Episode ${movie.episodeId}: ${movie.name}</h2>
                            <p>${movie.openingCrawl}</p>
                            <div class="characters" id="characters-${movie.id}">
                              Loading characters... <span class="loading">⏳</span>
                            </div>`;
      moviesList.appendChild(movieItem);
      retrieveCharacters(movie.characters, movie.id);
    });
  })
```