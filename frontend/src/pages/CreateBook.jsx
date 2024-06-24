import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


const CreateBook = () => {
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ publishYear, setpublishYear ] = useState('')
  const navigate = useNavigate() //to navigate to main page after book is created
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true)
    axios.get('http://localhost:5555/books', data) //pass in the data as the secind argument
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((error) => {
      setLoading(false)
      alert('Error: pls check console')
      console.log(error)
    })
  }

  return (
    <div className=''>
      CreateBookser
    </div>
  )
}

export default CreateBook
