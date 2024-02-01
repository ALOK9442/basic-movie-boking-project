import React from 'react'

export default function Button({
    children,
    label,
    type="button",
    className ="",
    onClick,
    ...props
}) {
  return (
    <button className={`bg-transparent hover:bg-amber-500 border border-black rounded-md text-black p-3 ${className}`}
     onClick={onClick}
     {...props}
     >
        {children}
    </button>
  )
}