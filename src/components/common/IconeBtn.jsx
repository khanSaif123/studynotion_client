import React from 'react'

const IconeBtn = ({ text, onClick, children, disabled = false, outline = false, customClasses, type }) => {
  return (
    <button 
         disabled={disabled}
        onClick={onClick} // Corrected here
        type={type}
        className={`flex items-center ${
        outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
    >
        {
            children ? (
                <>
                    <span className={`${outline && "text-yellow-50"}`}>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default IconeBtn;
