const categoryEl = document.querySelector("#categories");

const categories = categoryEl.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;

    const categoryItems = category.querySelectorAll('ul li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
});