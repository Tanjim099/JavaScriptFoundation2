const books = [
    { title : "The Catche in the Rye", author : "J.D Salinger", year : 1951},
    { title : "To Kill a Mockingbird", author : "Harper Lee", year : 2012},
    { title : "Pride and Prejudice", author : "Jane Austen", year : 2013},
    { title : "The Great Gatsby", author : "F. Scott Fitzgerald", year : 1925},
];

const filteredBooks = books.filter(function(book){
    if(book.year > 2010){
        return true;
    }
})
console.log(filteredBooks)

const capitalizedBooks = filteredBooks.map(function(book){
    return book.author.toLocaleUpperCase();
})
console.log(capitalizedBooks)