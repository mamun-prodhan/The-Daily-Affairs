const loadCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
} 

loadCategories();

const displayCategories = categories =>{
    console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category =>{
        const categoryDiv = document.createElement('li');
        categoryDiv.classList.add('nav-item');
        categoryDiv.innerHTML = `
                      <a class="nav-link" onclick="newsLoader('${category.category_id}')" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

const newsLoader = async(categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayNews(data.data);
} 
const displayNews = newses =>{
    console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news =>{
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.classList.add('m-5');
        newsDiv.innerHTML = `
                    <div class="col-md-3">
                        <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                                dy=".3em">Image</text>
                        </svg>

                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}