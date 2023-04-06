import React, { useState } from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [head, setHead] = useState(null);

  const handleAddBook = () => {
    if (title && author && year) {
      const newBook = {title, author, year, next: null};
      if (head === null) {
        setHead(newBook);
      } else {
        let current = head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newBook;
      }
      setTitle("");
      setAuthor("");
      setYear("");
    } else {
      alert("Silakan masukkan judul, pengarang, dan tahun terbit buku.");
    }
  }

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
  }

  const handleSearchBook = () => {
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
        alert(`Judul: ${current.title}\nPengarang: ${current.author}\nTahun terbit: ${current.year}`);
        setTitle("");
        return;
      }
      current = current.next;
    }
    alert(`Buku dengan judul ${title} tidak ditemukan.`);
  }

  const handleClearFields = () => {
    setTitle("");
    setAuthor("");
    setYear("");
  }

  const getBookList = () => {
    const bookList = [];
    let current = head;
    while (current !== null) {
      bookList.push(current);
      current = current.next;
    }
    return bookList;
  }

  return (
    <div className="App">
      <Grid container spacing={2} direction="column" style={{ marginLeft: "500px", marginTop: "20px"}}>
        <Grid item>
          <Typography variant="h6">Linked List Algorithm on Library Application</Typography>
        </Grid>
        <Grid item>
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Publication Year" value={year} onChange={(e) => setYear(e.target.value)} />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleAddBook}>List Book</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => handleRemoveBook(title)}>Unlist Book</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSearchBook}>Search Book</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleClearFields}>Clear</Button>
          </Grid>
        </Grid>
        <Grid item>
          {head === null ?
            <Typography>No books, add some</Typography> :
            <ul>
              {getBookList().map((book, index) => (
                <li key={index}>
                  <Typography>{book.title} ({book.year}) oleh {book.author}</Typography>
                </li>
              ))}
            </ul>
          }
        </Grid>
      </Grid>
    </div>
  ); 
} 

export default App;