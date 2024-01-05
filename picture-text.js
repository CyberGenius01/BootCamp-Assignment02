const searchBox = document.querySelector('.blog2-searchbox');
const searchBar = document.querySelector('.blog2-searchbar');

console.log(searchBox);
console.log(searchBar);

document.addEventListener('click', (e) => {
    if (e.target == searchBox || searchBox.contains(e.target)) {
        searchBar.classList.add('acitve-bar');
    } else {
        searchBar.classList.remove('acitve-bar');
    }
    console.log(searchBar);
})