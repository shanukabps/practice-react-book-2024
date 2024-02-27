import { useState } from 'react';
import BookEdit from './BoookEdit.js';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmitSave = (id,title) => {
        setShowEdit(false)
        onEdit(id,title)
    }


    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmitSave} />;
    }
    return (<>
        <div className="book-show">
        <img alt='book' src={`https://picsum.photos/seed/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>EDIT</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </>);
}

export default BookShow;