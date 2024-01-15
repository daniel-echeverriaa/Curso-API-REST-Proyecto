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
}
function moviePage(){
    console.log('Movie');
}
function CategoriesPage(){
    console.log('Categories');
}
function homePage(){
    console.log('Home');
    getTrendingMoviesPreview()
    getCategoriesPreview()
}
