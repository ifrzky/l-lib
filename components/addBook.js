import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && year && desc) {
      addBook({ title, author, year, desc });
      setTitle("");
      setAuthor("");
      setYear("");
      setDesc("");
    } else {
      alert("Silakan masukkan judul, pengarang, dan tahun terbit buku.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Pengarang"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <TextField
        label="Tahun Terbit"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <TextField
        label="Deskripsi"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Tambahkan Buku
      </Button>
    </form>
  );
};

export default AddBookForm;