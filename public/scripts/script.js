const movieSelect = (item) => {
  const selector = document.getElementById(item.id);
  const val = selector.getAttribute("select") === "true" ? "false" : "true";
  selector.setAttribute('select', val);
}

if(window.location.hostname === 'localhost')
  MOVIE_API_HOST = 'http://localhost:5000'
else
  MOVIE_API_HOST = 'https://rest-movie2100.herokuapp.com'

const init = () => {
  return;
  fetch(`${MOVIE_API_HOST}/movies/list/345345`)
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      const item = document.getElementById("movie-list")
      item.innerHTML = '';
      count = movies.length;
      let content = '';
      for (let index = 0; index < count; index++) {
        movie = movies[index];
        //div.card.col-sm-5.col-md-3.mb-2.mx-1#movie-list
        content += `<div class='col-sm-6 col-md-4 col-lg-3 mb-2'
                                onClick='movieSelect(this)'
                                id='movieSelector:${movie.movieId}'
                                select='false'
                    >
                      <div class="card mr-2">
                          <img class='card-image-top' src=${movie.image} />
                           <div class='card-body'>
                            <p class = 'card-text text-center'>${movie.title}</p>
                           </div>
                      </div>
                    </div>`;
      }
      item.innerHTML = content;
    }).catch(function (err) {
      console.log(err);
    })
}

const findRecommended = () =>{
  fetch(`${MOVIE_API_HOST}/movies/list/2`)
    .then(function (response) {
      return response.json();
    })
    .then(function (movies) {
      const item = document.getElementById("movie-list")
      item.innerHTML = '';
      count = movies.length;
      let content = '';
      for (let index = 0; index < count; index++) {
        movie = movies[index];
        content += `<div class='movie-item'
                                onClick='movieSelect(this)' 
                                id='movieSelector:${movie.movieId}'
                                select='false'>
                      <img class='image' src=${movie.image} />
                      <div class='content'>
                        <p class = 'name'>${movie.title}</p>
                      </div>
                    </div>`;
      }
      item.innerHTML = content;
    }).catch(function () {

    })
}