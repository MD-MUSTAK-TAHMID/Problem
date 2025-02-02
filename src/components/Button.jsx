import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={`inline-block cursor-pointer px-8 py-2 bg-[#DCCA87] border-2 border-[#DCCA87] hover:bg-transparent hover:text-[#DCCA87] font-Cormorant text-base font-bold text-[#0C0B08] transition-all duration-300 ${className}`}>
        {text}
    </div>
  )
}

export default Button