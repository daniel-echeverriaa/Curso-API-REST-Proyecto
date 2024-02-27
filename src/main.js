const API_KEY = 'c9aefab675b3395b00a55d32ac312945'
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
    'languaje':'es'
  },
});

//Utils

function createMovies(movies, container){
  container.innerHTML = '';
  console.log('holaaa');
  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    movieContainer.addEventListener('click', () =>{
      location.hash = '#movie=' + movie.id
    })

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt',movie.tittle);
    movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path)

    movieContainer.appendChild(movieImg)
    container.appendChild(movieContainer)
});
}

function createCategories(categories, container){
  container.innerHTML = ''
  categories.forEach(category => {
        
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTittle = document.createElement('h3');
    categoryTittle.classList.add('category-title');
    categoryTittle.setAttribute('id','id'+ category.id);
    categoryTittle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
  })
    const categoryTittleText = document.createTextNode(category.name)

    categoryTittle.appendChild(categoryTittleText)
    categoryContainer.appendChild(categoryTittle)
    container.appendChild(categoryContainer)
});
}
//Llamados a la API


/* document.addEventListener("DOMContentLoaded", function () { 
 }); */

 async function getMoviesByCategory(id) {
  const { data } = await api('discover/movie', {
    params: {
      with_genres: id,
    },
  });
  window.scroll(0,0);
  const movies = data.results;
  category_movies_section.innerHTML = ''
  tittle_category_movie.innerHTML = ''
  const [_, categoryData] = location.hash.split('=');
  const [categoryId, categoryName]= categoryData.split('-');
  const tittle_movie = document.createElement('h2')
  const categoryTittleText = document.createTextNode(categoryName)
  tittle_movie.appendChild(categoryTittleText)
  tittle_category_movie.appendChild(tittle_movie)

  createMovies(movies , category_movies_section)
} 

async function getTrendingMoviesPreview(){
    const {data} = await api(`trending/movie/day`);
    const movies = data.results;
    console.log(data);

    createMovies(movies, trendingPreviewMoviesContainer)

}

async function getCategoriesPreview(){
    const { data } = await api(`genre/movie/list`);
    previewCategoriesContainer.innerHTML = ''
    
    const categories = data.genres;
    createCategories(categories, previewCategoriesContainer)
    
}

async function getMoviesBySearch(query) {
  const { data } = await api('search/movie', {
    params: {
      query,
    },
  });
  window.scroll(0,0);
  const movies = data.results
  console.log('holaaa');
  createMovies(movies , search_section)
} 

async function getTrendingMovies(){
  const {data} = await api(`trending/movie/day`);
  const movies = data.results;
  console.log(data);

  createMovies(movies, trends_images_movies)

}

async function getMovieById(movieid){
  const {data: movie} = await api(`movie/${movieid}`);

  movie_detail_title.textContent = movie.title
  movie_detail_info.textContent = movie.overview
  //movie_detail_img.setAttribute('src', 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path)
  
  createCategories(movie.genres, movie_detail_genre)
}






