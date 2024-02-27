import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "./context/book";

function BookList() {
    const { books } = useContext(BooksContext)

    console.log('firstqa', books)

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })
    return (<div className="book-list">
        {renderBooks}
    </div>);
}

export default BookList;