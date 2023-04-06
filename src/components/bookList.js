import { List, ListItem, ListItemText, Button } from "@material-ui/core";

const BookList = ({ books, onRemoveBook, darkMode }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem
          key={index}
          style={
            book.added
              ? { backgroundColor: "#e6ffe6" }
              : {
                  backgroundColor: darkMode ? "#424242" : "inherit",
                  color: darkMode ? "#FFFFFF" : "inherit"
                }
          }
        >
          <ListItemText
            primary={book.title}
            secondary={`Pengarang: ${book.author} | Tahun terbit: ${book.year}`}
            style={{ color: darkMode ? "#FFFFFF" : "inherit" }}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onRemoveBook(book.title)}
          >
            Hapus
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;