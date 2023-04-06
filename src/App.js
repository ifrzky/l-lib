import { useState } from "react";
import BookList from "./bookList";
import BookForm from "./components/bookForm";
import { Container } from "@material-ui/core";
import SearchBook from "./components/searchBook";
import { Switch } from "@material-ui/core";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleRemoveBook = (title) => {
    const newBooks = books.filter((book) => book.title !== title);
    setBooks(newBooks);
  };

  const handleSearchBook = (title) => {
    if (!title) {
      alert("Silakan masukkan judul buku.");
      return;
    }
    const book = books.find((book) => book.title === title);
    if (book) {
      alert(
        `Judul: ${book.title}\nPengarang: ${book.author}\nTahun terbit: ${book.year}`
      );
    } else {
      alert(`Buku dengan judul ${title} tidak ditemukan.`);
    }
  };

  const handleClearFields = () => {
    // Clear input fields in BookForm component
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container className={darkMode ? "dark-mode" : "light-mode"} maxWidth="md">
      <h1>L-Lib</h1>
      <BookForm onAddBook={handleAddBook} onClearFields={handleClearFields} />
      <SearchBook onSearchBook={handleSearchBook} />
      <Switch checked={darkMode} onChange={handleToggleDarkMode} />
      <BookList books={books} onRemoveBook={handleRemoveBook} />
    </Container>
  );
}

export default App;