import logo from './logo.svg';
import './App.css';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import { useEffect, useContext } from 'react';
import BooksContext from './components/context/book';



function App() {

  const { fetchBooks ,books} = useContext(BooksContext)

  useEffect(() => {
    console.log('callww')
    fetchBooks()
    console.log('books', books)
  }, [])

  return (
    <div className="app">
      <h1>App</h1>
      <BookList />

      <BookCreate />

    </div>
  );
}

export default App;
