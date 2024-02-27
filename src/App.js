import logo from './logo.svg';
import './App.css';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import { useEffect } from 'react';



function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('callww')
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:5000/books')
    setBooks(response.data)
  }


  const createBook = async (title) => {
    const response = await axios.post('http://localhost:5000/books', { title })
    console.log('title', title);
    const updateBook = [...books, response.data];
    setBooks(updateBook)
  }

  const deletebookByid = async(id) => {
    await axios.delete(`http://localhost:5000/books/${id}`)
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })
    setBooks(updatedBooks)
  }

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:5000/books/${id}`, {
      title: newTitle
    })
    console.log('response', response)
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }
      return book;
    })

    setBooks(updatedBooks)
    // const updatedBooks = books.map(book => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle }
    //   }
    //   return book;
    // })

    // setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>App</h1>
      <BookList books={books} onDelete={deletebookByid} onEdit={editBookById} />

      <BookCreate onCreate={createBook} />

    </div>
  );
}

export default App;
