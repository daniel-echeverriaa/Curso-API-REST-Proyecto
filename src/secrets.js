//const API_KEY = 'c9aefab675b3395b00a55d32ac312945'
const main_images_movies = document.querySelector(".main-movies-images")        
const button_left = document.querySelector('.button-left-movies')
const button_rigth = document.querySelector('.button-rigth-movies')


button_left.addEventListener("click", () => {
    main_images_movies.scrollLeft -= 300 ;
    main_images_movies.style.transition = 'all .5s'
    console.log('HOLa');
    });

button_rigth.addEventListener("click", () => {
    main_images_movies.scrollLeft += 300;
    });
