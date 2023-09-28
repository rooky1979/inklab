import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'


const posts = () => {
  return (
    <>
      <Navbar />
      <Header title="Blog" backgroundImage={"/blog.jpg"} />
      <Posts backgroundImage={"/blog.jpg"} />
    </>
  )
}

export default posts
