let data = [];
let itemsPerPage = 6;
let currentPage = 1;

const list = document.getElementById("lst");
const pageText = document.getElementById("page");


fetchData();

function fetchData() {
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(result => {
            data = result.products;
            showData();
        })
        .catch(err => console.log(err));
}

function showData() {
    list.innerHTML = "";

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    let paginatedData = data.slice(start, end);

    pageText.innerText = `Page ${currentPage}`;


    paginatedData.forEach(product => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.thumbnail;

        let title = document.createElement("h3");
        title.innerText = product.title;

        let price = document.createElement("p");
        price.innerText = "₹ " + product.price;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);

        list.appendChild(card);
    });
}



const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
    let totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showData();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showData();
    }
});
