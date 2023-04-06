import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const BookForm = ({ onAddBook, onClearFields, onClearBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: title,
      author: author,
      year: year,
    };
    onAddBook(newBook);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  const handleClearFields = () => {
    setTitle("");
    setAuthor("");
    setYear("");
    onClearFields();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Judul"
        variant="outlined"
        margin="normal"
        fullWidth
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        label="Pengarang"
        variant="outlined"
        margin="normal"
        fullWidth
        value={author}
        onChange={handleAuthorChange}
      />
      <TextField
        label="Tahun Terbit"
        variant="outlined"
        margin="normal"
        fullWidth
        value={year}
        onChange={handleYearChange}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "20px" }}>
        List Book
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClearFields} style={{ marginBottom: "20px", marginLeft: "5px"}}>
        Clear Form
      </Button>
    </form>
  );
};

export default BookForm;