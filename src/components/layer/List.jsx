import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ text, href, className }) => {
  return (
    <li>
      <Link className={`text-[#FFF] ${className}`}to={href}>
         {text}
      </Link>
    </li>
  )
}

export default List
