import { useState } from "react";

const BookEdit = ({ book, onEdit, onSubmit }) => {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('new Title', title)
        //onEdit(book.id, title)
        onSubmit(book.id, title);
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