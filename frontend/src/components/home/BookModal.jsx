import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookModal = ( { book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
      <div onClick={(event) => EventTarget.stopPropagation()} className="bg-white rounded-xl p-4 flex flex-col relative w-[600px] max-w-full h-[400px]">

      </div>
    </div>
  )
}

export default BookModal
