import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'


const blog = () => {
  return (
    <>
      <Navbar />
      <Header title="Blog" backgroundImage={"/whistler.jpg"} />
      <Posts backgroundImage={"/whistler.jpg"} />
    </>
  )
}

export default blog
