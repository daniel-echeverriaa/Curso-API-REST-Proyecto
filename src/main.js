const API_KEY = 'c9aefab675b3395b00a55d32ac312945'
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
      'language': 'es-VE',

    },
  });
/* document.addEventListener("DOMContentLoaded", function () { 
 }); */


async function getTrendingMoviesPreview(){
    const {data} = await api(`trending/movie/day`);
    const movies = data.results;
    console.log(data);


    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('.main-section-movies .main-movies-images')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('main-img-movies');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',movie.tittle);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w500/'+ movie.poster_path)

        movieContainer.appendChild(movieImg)
        trendingPreviewMoviesContainer.appendChild(movieContainer)
    });
}

async function getCategoriesPreview(){
    const { data } = await api(`genre/movie/list`);
    
    
    const categories = data.genres;
    categories.forEach(category => {
        
        const previewCategoriesContainer = document.querySelector('.main-categories .main-categories-list .categories-list')

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTittle = document.createElement('h3');
        categoryTittle.classList.add('category-title');
        categoryTittle.setAttribute('id','id'+ category.id);
        const categoryTittleText = document.createTextNode(category.name)

        categoryTittle.appendChild(categoryTittleText)
        categoryContainer.appendChild(categoryTittle)
        previewCategoriesContainer.appendChild(categoryContainer)
    });
}





