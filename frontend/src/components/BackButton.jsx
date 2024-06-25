import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquareFill } from "react-icons/bs";

const BackButton = ( {destination = '/'} ) => { //default is destination if nothing is passed into it when called
  return (
    <div className='p-8'>
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'><BsArrowLeftSquareFill /></Link>
    </div>
  )
}

export default BackButton;