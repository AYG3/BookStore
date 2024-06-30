import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import BookModal from './BookModal';

const BookSingleCard = ( {book} ) => {
  const [ showModal, setShowModal ] =useState(false)


  return (
    <div key={book._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1'>
          <h1 className='absolute top-1 right-2 px-4 py-l bg-red-300 rounded-lg'>{book.publishYear}</h1>

          <h4 className='my-2 text-gray-500'>{book._id} </h4>
          <div className='flex justify-start books-center gap-x-2'>
            <PiBookOpenTextLight className='text-red-300 text-2xl' />
            <h2 className='my-2'> {book.title}</h2>
          </div>

          <div className='flex justify-start books-center gap-x-2'>
            <BiUserCircle className='text-red-300 text-2xl' />
            <h2 className='my-1'>{book.author}</h2>
          </div>

          <div className='flex justify-between books-center gap-x-2 mt-4 pt-4'>
            <BiShow className='text-3x1 text-blue-800 hover:text-black cursor-pointer' onClick={() => setShowModal(true)} />
            <Link to={`/books/detail/${book._id}`}>
              <BsInfoCircle className='text-green-800 text-2xl hover:text-black' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className='text-yellow-600 hover:text-black text-3x1' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdDeleteOutline className='text-2xl text-red-600 hover:text-black' />
            </Link>
          </div>
            {showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
        </div>
  )
}

export default BookSingleCard
