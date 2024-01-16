window.addEventListener('DomContentLoaded',navigator, false);
window.addEventListener('hashchange',navigator, false);


function navigator() {
    console.log({location});
    
    if (location.hash.startsWith('#trends')){
        trendsPage()
    } else if (location.hash.startsWith('#search=')){
        searchPage()
    } else if (location.hash.startsWith('#movie=')){
        moviePage()
    } else if (location.hash.startsWith('#category=')){
        CategoriesPage()
    } else {
        homePage()
    }
    
    location.hash
}
navigator()

function trendsPage(){
    console.log('TRENDSSS');
}
function searchPage(){
    console.log('Search');
    main_detail_movies.classList.add('inactive')
    header_search.classList.remove('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
}
function moviePage(){
    console.log('Movie');
    main_detail_movies.classList.remove('inactive')
    header_search.classList.add('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
}
function CategoriesPage(){
    console.log('Categories');
}
function homePage(){
    console.log('Home');
    getTrendingMoviesPreview()
    getCategoriesPreview()
    main_detail_movies.classList.add('inactive')
    header_search.classList.remove('inactive')
    main_section_movies.classList.remove('inactive')
    main_categories.classList.remove('inactive')
}
