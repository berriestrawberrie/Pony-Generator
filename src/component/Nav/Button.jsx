import React from 'react'

export const Button = ({text}) => {
  return (
    <button className="focus:bg-amber-600 focus:text-amber-100 focus:border-amber-950 hover:-translate-y-2 hover:pb-2  bg-amber-400 px-[2px] rounded-t-md border-t border-r border-l mr-[2px]">
        {text}
    </button>
  )
}
