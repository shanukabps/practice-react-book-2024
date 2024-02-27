import BookShow from "./BookShow";

function BookList({books,onDelete, onEdit}) {
    const editBookById = (id, newTitle) => {
        console.log('edit', id, newTitle)
      }

    const renderBooks =books.map((book)=>{
        return <BookShow  onDelete={onDelete} key={book.id} book={book} onEdit={onEdit}/>
    })
    return ( <div className="book-list">
        {renderBooks}
    </div> );
}

export default BookList;