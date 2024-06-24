import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton' //Note - test - no curly braces normally
import Spinner from '../components/Spinner'

const Showbook = () => {
  const [book, setBook ] = useState([])
  const [load, setLoading ] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
      setBook(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    }) 
  })
  return (
    <div className='p-4'>
       <BackButton /> {/* has default route */}
      <h1 className='text-3xl my-4'> ShowBook page </h1>
      {loading ? (
        <Spinner />
      ): (
        <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 0 text-gray-500'>Id </span > 
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Showbook;