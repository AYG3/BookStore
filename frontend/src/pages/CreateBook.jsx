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
    <div className='p-4'>
      <h1> Create Book </h1>
      { loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4  text-gray-500' />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4'/>
        </div>

      </div>
    </div>
  )
}

export default CreateBook
