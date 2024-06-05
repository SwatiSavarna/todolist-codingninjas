

const searchButton = document.querySelector(".search-button")
const input = document.querySelector("#input-search-bar");
const listContainer = document.querySelector("#list-container");
const itemCount = document.querySelector("#item-count");

function addtask() {
    if (input.value === "") {
        alert("You should add something");
    }
    else {
        const li = document.createElement("li");
        li.textContent = input.value;
        li.style.listStyle = "none";
        listContainer.append(li)
        const containerbox = document.querySelector(".container");
        containerbox.append(listContainer);
        const spanelement = document.createElement("span");
        spanelement.classList.add("remove")
        spanelement.innerHTML = "\u00d7";
        li.appendChild(spanelement);
        updateItemCount();
        saveData();
    }

}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateItemCount();
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        updateItemCount();

    }

});
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
    updateItemCount();

}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
function updateItemCount() {
    const itemCountValue = listContainer.querySelectorAll("li").length;
    itemCount.textContent = ` ${itemCountValue} task left`;
    console.log(window)
}

updateItemCount();

