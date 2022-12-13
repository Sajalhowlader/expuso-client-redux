import React from 'react'
import bannerPhoto from '../../assets/header-bg.jpg'
const Banner = () => {
  return (
    <div className='banner_container h-[84vh] relative'>
<img className='h-[100%] object-cover' src={bannerPhoto} alt="" />
<div>WELCOME TO MY PHOTOGRAPHY BLOG</div>
    </div>
  )
}

export default Banner