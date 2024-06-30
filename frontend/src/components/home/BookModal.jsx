import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookModal = ( { book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className="bg-white rounded-xl p-4 flex flex-col relative w-[600px] max-w-full h-[400px]">
        <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose} />
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
        <p className="mt-4">Whatevs</p>
        <p className="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nam debitis aperiam facilis expedita eum quod a quasi et! Porro, beatae? Quia reprehenderit distinctio eaque harum repellendus cupiditate eum dolor!</p>

      
      </div>


    </div>
  )
}

export default BookModal
