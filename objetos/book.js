
const book = {
    title: '', 
    author: '',
    year: '',
    gender: ''
}

function createBook(title, author, year, gender) {
    book.title = title;
    book.author = author;
    book.year = year;
    book.gender = gender;

    return book;
}

console.log(createBook('fsf','asd',200,'m'));

anoAtual = new Date().getFullYear();

book.publicationAge = anoAtual - book.year;

book.viwerDetails = `This book is best sealer of de year: ${book.year}, and it has ${book.publicationAge} years old.`

console.log(book.viwerDetails)
