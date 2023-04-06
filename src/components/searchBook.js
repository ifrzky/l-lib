import { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const SearchBook = ({ onSearchBook, onClearBook }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearchBook = () => {
    onSearchBook(title);
  };

  return (
    <Grid container spacing={2} alignItems="center" margin={2}>
      <Grid item xs={9} margin="20px">
        <TextField
          fullWidth
          variant="outlined"
          label="Cari buku"
          value={title}
          onChange={handleTitleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={handleSearchBook}>
          Cari
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBook;