import { List, ListItem, ListItemText, Button } from "@material-ui/core";

const BookList = ({ books, onRemoveBook }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem
          key={index}
        >
          <ListItemText
            primary={book.title}
            secondary={`Pengarang: ${book.author} | Tahun terbit: ${book.year}`}
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