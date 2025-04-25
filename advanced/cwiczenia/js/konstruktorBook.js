function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("nie podano nowej ksiazki");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (`${this.title}, ${this.author}, ${this.pages}, ${this.read}`);
    };
}

const myLibrary = [];

const titleInput = document.getElementById("f-title");
const authorInput = document.getElementById("f-author");
const pagesInput = document.getElementById("f-pages");
const readInput = document.getElementById("f-read");

const dodaj = document.querySelector('#dodaj');
dodaj.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.value === "yes" ? "read" : "not read yet";

    const newBook = new Book(title, author, pages, read);
    addBooktoLibrary(newBook);
    renderBook(newBook);
});

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function renderBook(book) {
    const biblioteka = document.querySelector('.library-list');

    const btnRemove = document.createElement('button')
    btnRemove.setAttribute("data-id", book.id)
    btnRemove.textContent='Usuń'

    const btnToggle=document.createElement('button')
    btnToggle.setAttribute("data-id", book.id)
    btnToggle.textContent="zmień status"

    btnRemove.addEventListener('click',()=>{
        const bookId=btnRemove.getAttribute('data-id')
        const bookIndex=myLibrary.findIndex(book=>book.id === bookId)
    
        if(bookIndex!==-1){
            myLibrary.splice(bookIndex,1)
            
        }
        li.remove()
    })

    btnToggle.addEventListener('click', ()=>{
        const bookId=btnToggle.getAttribute('data-id')
        const bookIndex=myLibrary.findIndex(book=>book.id === bookId)

        if(bookIndex!==-1){
            const book = myLibrary[bookIndex]
            book.read= (book.read=='read') ? 'not read yet' : 'read'

            const li = btnToggle.closest('li')
            li.textContent=book.info()
            li.appendChild(btnRemove)
            li.appendChild(btnToggle)
        }
    })

    const li = document.createElement('li');
    li.textContent = book.info();
    biblioteka.appendChild(li);
    li.appendChild(btnRemove)
    li.appendChild(btnToggle)
}



// Przykładowe książki
const thehobbit = new Book('Hobbit', 'Tolkien', 295, 'not read yet');
const nineteenEightyFour = new Book('1984', 'George Orwell', 328, 'read');
const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'not read yet');
const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'read');
const mobyDick = new Book('Moby-Dick', 'Herman Melville', 635, 'not read yet');
const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austen', 432, 'read');

addBooktoLibrary(thehobbit);
addBooktoLibrary(nineteenEightyFour);
addBooktoLibrary(toKillAMockingbird);
addBooktoLibrary(theGreatGatsby);
addBooktoLibrary(mobyDick);
addBooktoLibrary(prideAndPrejudice);

function loadBooks() {
    myLibrary.forEach(renderBook);
}

window.onload = loadBooks;
