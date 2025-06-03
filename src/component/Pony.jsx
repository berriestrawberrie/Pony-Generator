import React from 'react'
import { Image } from './Image'

export const Pony = ({sex, breed}) => {
  return (
    <>
        <Image inclass='body' breed={breed} sex={sex} img="base"/>
        <Image inclass='hair' breed={breed} sex={sex} img="hair"/>
        <Image inclass='accent' breed={breed} sex={sex} img="accent"/>
        <Image inclass='accent2' breed={breed} sex={sex} img="accent2"/>
        <Image breed={breed} sex={sex} img="mask"/>
        <Image breed={breed} sex={sex} img="shade"/>
        <Image breed={breed} sex={sex} img="white"/>
        <Image inclass='eye' breed={breed} sex={sex} img="eye"/>
        <Image breed={breed} sex={sex} img="ink"/>
    
    </>
  )
}
