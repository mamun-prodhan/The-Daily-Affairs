const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

const displayCategories = categories =>{
    console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category =>{
        const categoryDiv = document.createElement('li');
        categoryDiv.classList.add('nav-item');
        categoryDiv.innerHTML = `
                      <a class="nav-link" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

loadCategories();