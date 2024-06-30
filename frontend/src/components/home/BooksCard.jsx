import React from 'react'

const BooksCard = ( { books} ) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 x1:grid-cols-4'>
        {books.map((item) => (
        <div key={item._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x1'>
          <p>{item.name}</p>  
        </div>
        ))}
    </div>
  )
}

export default BooksCard
