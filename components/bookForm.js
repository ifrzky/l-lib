import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const BookForm = ({ title, setTitle, author, setAuthor, year, setYear, handleAddBook, handleClearFields }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <TextField label="Judul" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="Pengarang" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField label="Tahun Terbit" type="number" value={year} onChange={(e) => setYear(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button variant="contained" color="primary" onClick={handleAddBook} fullWidth>
          Tambah
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={handleClearFields} fullWidth>
          Hapus
        </Button>
      </Grid>
    </Grid>
  );
};

export default BookForm;