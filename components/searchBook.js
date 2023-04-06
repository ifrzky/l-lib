import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const SearchBook = ({ title, setTitle, handleSearchBook }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8}>
        <TextField label="Cari Judul Buku" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button variant="contained" color="primary" onClick={handleSearchBook} fullWidth>
          Cari
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBook;