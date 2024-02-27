import { useState } from "react";
import BooksContext from "./context/book";
import { useContext } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useContext(BooksContext)
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('new Title', title)
        //onEdit(book.id, title)
console.log('book', book)
        editBookById(book.id, title)
        onSubmit();
    }


    return (<div >
        <h3>Edit Book</h3>
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />

            <button className='button is-primary' type="submit">Save</button>
        </form>
    </div>);
}

export default BookEdit;