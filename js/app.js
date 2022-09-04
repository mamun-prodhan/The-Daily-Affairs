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
                      <a class="nav-link btn btn-outline-primary link-dark" onclick="newsLoader('${category.category_id}', '${category.category_name}')" href="#">${category.category_name}</a>
        `;
        categoryContainer.appendChild(categoryDiv);
    })
}

const newsLoader = async(categoryId, categoryName) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(categoryName);
    displayNews(data.data, categoryName);
} 
const displayNews = (newses, categoryName) =>{
    console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = '';

    // total news found message
    const newsFound = document.getElementById('found-message');
    newsFound.textContent = '';
    const newsFoundDiv = document.createElement('div');
    newsFoundDiv.innerHTML = `
    <p class="p-4 bg-primary p-2 text-dark bg-opacity-10"><span class="fw-bold">${newses.length}</span> items found for category <span class="fw-bold">${categoryName}</span> </p>
    `
    newsFound.appendChild(newsFoundDiv);

    newses.forEach(news =>{
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.classList.add('m-5');
        newsDiv.innerHTML = `
        <div class="col-md-3">
        <img src="${news.thumbnail_url}" class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" alt="">

    </div>
    <div class="col-md-9">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text text-muted">${news.details.substring(0,300) + '...'}</p>
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center me-5">
                    <div>
                        <img src="${news.author.img}" alt="image" style="width:40px;" class="rounded-pill">
                    </div>
                    <div class="ms-2">
                        <p class="fw-semibold m-0">${news.author.name}</p>
                        <small class="text-muted m-0">${news.author.published_date}</small>
                    </div>
                </div>
                <div class="d-flex ms-5 me-5">
                    <div class="me-2">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div>
                        <p>${news.total_view}</p>
                    </div>
                </div>
                <div class="ms-5">
                <button type="button" class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}