import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import EditBook from './pages/EditBook'
import Showbook from './pages/Showbook'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/books/create' element={ <CreateBook /> } />
      <Route path='/books/details/:id' element={ <Showbook /> } />
      <Route path='/books/edit/:id' element={ <EditBook /> } />
      <Route path='/books/delete/:id' element={ <DeleteBook /> } />
    </Routes>
  )
}

export default App
