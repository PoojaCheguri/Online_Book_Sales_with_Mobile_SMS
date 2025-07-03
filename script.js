// Sample Book Data
const books = [
    { title: "The Science of Everything", genre: "Science", price: "₹450" },
    { title: "Love in the Times", genre: "Romance", price: "₹300" },
    { title: "Tech Revolution", genre: "Technology", price: "₹599" },
    { title: "Mystery of Fiction", genre: "Fiction", price: "₹399" },
];

// Display Books
const booksContainer = document.getElementById('booksContainer');

books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <h4>${book.title}</h4>
        <p>Genre: ${book.genre}</p>
        <p>Price: ${book.price}</p>
    `;
    booksContainer.appendChild(card);
});

// Handle Book Request Form
document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const book = document.getElementById('book').value.trim();

    if (name === '' || mobile === '' || book === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate SMS API Call (This is where actual integration goes)
    alert(`Thank you, ${name}! You will receive an SMS when "${book}" is available.`);

    // Clear Form
    this.reset();
});
