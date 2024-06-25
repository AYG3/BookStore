import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      navigate('/')
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      alert('An error occured, pls check console')
      console.log(error)
    })
  }
  return (
    <div>
      <h1 className='text-3xl p-4'>DeleteBook</h1>
      <button className='' onClick={handleDeleteBook}>Delete</button>
    </div>
  )
}

export default DeleteBook
