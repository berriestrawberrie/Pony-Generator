import React from 'react'


export const Image = ({inclass,breed, sex,img}) => {
  return (
    <>
    <img className={`absolute top-0 left-0 ${inclass}`} src={`../../${breed}/${sex}/${img}.png`} />
  
       

    </>
  )
}
