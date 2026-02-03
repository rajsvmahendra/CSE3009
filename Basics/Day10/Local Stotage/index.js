// // localStorage.setItem("name", "Raj");
// // localStorage.setItem("age", "20");
// // localStorage.setItem("city", "Delhi");

// // localStorage.removeItem("age");
// // localStorage.clear();

// const input = document.getElementById("searchInput");
// const button = document.getElementById("searchButton");

// button.addEventListener("click", () => {
//     let query = input.value.trim();
//     if (query === "") return;

//     //get old history
//     let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

//     //add new search
//     history.push(query);

//     //save back to local storage
//     localStorage.setItem("searchHistory", JSON.stringify(history));

//     console.log("saveHistory:", history);

//     input.value = ""
// })

// function showHistory() {
//     let history = JSON.parse(localStorage.getItem("searchHistory"));
//     let list = document.getElementById("historyList");
//     list.innerHTML = "";
//     history.forEach((item) => {
//         let li = document.createElement("li");
//         li.textContent = item;
//         list.appendChild(li);
//     })
// }
// showHistory();
