fetch("https://ajax.test-danit.com/api/swapi/films")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: " + response.status);
    }
  })
  .then(movies => {
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
  .catch(error => {
    console.error("Error:", error);
  });

function retrieveCharacters(characterUrls, movieId) {
  const charactersDiv = document.getElementById(`characters-${movieId}`);
  const characterPromises = characterUrls.map(url => {
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(character => character.name);
  });

  Promise.all(characterPromises)
    .then(characters => {
      charactersDiv.innerHTML = characters.join(", ");
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
