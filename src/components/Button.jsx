import React from 'react'

const Button = ({title, onClick, className, type ="button"}) => {
    const buttonClass = `border-black py-2 px-3 rounded-full bg-white text-black shadow-md hover:shadow-xl transition-shadow ${className}`.trim();


  return (
   <button 
   className={buttonClass}
   onClick={onClick}
   >
    {title}
   </button>
  )
}

export default Button
