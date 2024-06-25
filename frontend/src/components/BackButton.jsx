import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { PiArrowSquareLeftFill } from "react-icons/pi";

const BackButton = ( {destination = '/'} ) => { //default is destination if nothing is passed into it when called
  return (
    <div>
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
      <PiArrowSquareLeftFill />
      </Link>
    </div>
  )
}

export default BackButton;