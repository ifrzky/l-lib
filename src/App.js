import { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import SearchBook from "./components/SearchBook";

function App() {
  const [head, setHead] = useState(null);

  const handleAddBook = (title, author, year) => {
    if (title && author && year) {
      const newBook = { title, author, year, next: null };
      if (head === null) {
        setHead(newBook);
      } else {
        let current = head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newBook;
      }
    } else {
      alert("Silakan masukkan judul, pengarang, dan tahun terbit buku.");
    }
  };

  const handleRemoveBook = (title) => {
    if (head === null) {
      alert("Daftar buku kosong.");
      return;
    }
    if (head.title === title) {
      setHead(head.next);
    } else {
      let current = head;
      while (current.next !== null) {
        if (current.next.title === title) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
      if (current.next === null) {
        alert(`Buku dengan judul ${title} tidak ditemukan.`);
      }
    }
  };

  const handleSearchBook = (title) => {
    if (head === null) {
      alert("Daftar buku kosong.");
      return;
    }
    if (!title) {
      alert("Silakan masukkan judul buku.");
      return;
    }
    let current = head;
    while (current !== null) {
      if (current.title === title) {
        alert(
          `Judul: ${current.title}\nPengarang: ${current.author}\nTahun terbit: ${current.year}`
        );
        return;
      }
      current = current.next;
    }
    alert(`Buku dengan judul ${title} tidak ditemukan.`);
  };

  const handleClearFields = () => {
    // Clear input fields in BookForm component
  };

  const getBookList = () => {
    const bookList = [];
    let current = head;
    while (current !== null) {
      bookList.push(current);
      current = current.next;
    }
    return bookList;
  };

  return (
    <div className="App">
      <h1>Daftar Buku</h1>
      <BookForm handleAddBook={handleAddBook} handleClearFields={handleClearFields} />
      <SearchBook handleSearchBook={handleSearchBook} />
      <BookList bookList={getBookList()} handleRemoveBook={handleRemoveBook} />
    </div>
  );
}

export default App;