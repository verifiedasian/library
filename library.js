var myLibrary = [];

let title = document.getElementById("title");
let author = document.getElementById("author");
let noPages = document.getElementById("nopages");
let addButton = document.getElementById("submitbtn");

//Book function constructor
function Book(Title, Author, NoPages){
    this.Title = Title;
    this.Author = Author;
    this.NoPages = NoPages;
};

addButton.addEventListener('click', (event) => {
    //Prevent form from submitting and page refreshing
    event.preventDefault();
    //Create new rows and columns
    const table = document.getElementById("table");
    const newRow = table.insertRow(1);
    const titleColumn = newRow.insertCell(0);
    const authorColumn = newRow.insertCell(1);
    const nopagesColumn = newRow.insertCell(2);
    const readstatusColumn = newRow.insertCell(3);
    const trashColumn = newRow.insertCell(4);
    //Pushes book information in the form of object into myLibrary
    myLibrary.push(new Book(title, author, noPages));
    //Display book information into webpage
    titleColumn.innerHTML = myLibrary[0].Title.value;
    authorColumn.innerHTML = myLibrary[0].Author.value;
    nopagesColumn.innerHTML = myLibrary[0].NoPages.value;
    //Read Status Button
    var readstatusButton = document.createElement('button');
    readstatusButton.innerHTML = '<i class="fas fa-check"></i>';
    readstatusColumn.classList.add("readstatusButton");
    readstatusButton.setAttribute("id", "readstatusButton");
    readstatusColumn.appendChild(readstatusButton);
    //Toggle read status button colors
    var readButton = document.getElementById("readstatusButton");
    document.getElementById("readstatusButton").style.color = "grey";
    readButton.addEventListener('click', function() {
        if (readButton.style.color === "grey"){
            readButton.style.color = "teal";
        } else if (readButton.style.color === "teal"){
            readButton.style.color = "grey";
        }
    });
    //Remove Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashColumn.classList.add("trashButton");
    trashButton.setAttribute("id", "trashButton");
    trashColumn.appendChild(trashButton);
    document.getElementById("trashButton").addEventListener("click", function(){
        var i = this.parentNode.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i);
    })

    //Clear form once submitted
    title.value = "";
    author.value = "";
    noPages.value = "";
});




