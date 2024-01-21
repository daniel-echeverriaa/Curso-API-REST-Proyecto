window.addEventListener('DomContentLoaded',navigator, false);
window.addEventListener('hashchange',navigator, false);
button_trends.addEventListener('click', () => {
    location.hash = '#trends'
})
button_search.addEventListener('click', () => {
    location.hash = '#search='
})
category_arrow_back.addEventListener('click', () => {
    location.hash = 'home'
})

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
    main_detail_movies.classList.add('inactive')
    header_search.classList.remove('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
    search_section.classList.add('inactive')
    section_trends_tittle.classList.add('inactive')
    trends_section.classList.remove('inactive')
    category_page.classList.add('inactive')
}
function searchPage(){
    console.log('Search');
    main_detail_movies.classList.add('inactive')
    header_search.classList.remove('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
    search_section.classList.remove('inactive')
    trends_section.classList.add('inactive')
    category_page.classList.add('inactive')
}
function moviePage(){
    console.log('Movie');
    main_detail_movies.classList.remove('inactive')
    header_search.classList.add('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
    search_section.classList.add('inactive')
    trends_section.classList.add('inactive')
    category_page.classList.add('inactive')
}
function CategoriesPage(){
    console.log('Categories');
    main_detail_movies.classList.add('inactive')
    header_search.classList.add('inactive')
    main_section_movies.classList.add('inactive')
    main_categories.classList.add('inactive')
    search_section.classList.add('inactive')
    section_trends_tittle.classList.add('inactive')
    trends_section.classList.add('inactive')
    category_page.classList.remove('inactive')
    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName]= categoryData.split('-');

    

    getMoviesByCategory(categoryId);
    
    
    
}
function homePage(){
    console.log('Home');
    getTrendingMoviesPreview()
    getCategoriesPreview()
    main_detail_movies.classList.add('inactive')
    header_search.classList.remove('inactive')
    main_section_movies.classList.remove('inactive')
    main_categories.classList.remove('inactive')
    search_section.classList.add('inactive')
    trends_section.classList.add('inactive')
    category_page.classList.add('inactive')
}
