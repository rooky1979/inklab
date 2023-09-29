import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'
import blogStyles from "../styles/Blog.module.css"


const posts = () => {
  return (
    <main className={blogStyles.mainblog}>
      <Navbar />
      <Header title="Blog" backgroundImage={"/blog.jpg"} />
      <Posts backgroundImage={"/blog.jpg"} />
    </main>
  )
}

export default posts
