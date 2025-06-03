import {useState} from 'react'
import female from '../../assets/images/femaledesign.png'
import male from '../../assets/images/malesign.png'

export const Gender = ({sex,clicked}) => {


    
  return (
    <div className="hover:bg-sky-300 hover:border-white bg-sky-500 border border-amber-950 absolute z-8 p-1 rounded-full left-3 bottom-[110px] md:bottom-[20px]" >
        {sex? <img className="w-[40px] md:w-[90px] " src={female} onClick={clicked}/> :
        <img className="w-[40px] md:w-[90px] " src={male} onClick={clicked}/>}

    </div>
  )
}
