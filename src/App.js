import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Aplikasi Perpustakaan
      </Typography>
      <AddBookForm addBook={addBook} />
      <BookList books={books} removeBook={removeBook} />
    </Container>
  );
};

export default App;