import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
//import defaultBcg from '../Images/defaultBcg.jpeg'

export default function Default() {
  return (
    <>
      <Hero img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' title='404' max={true}>
        <h2 className='text-uppercase'>page not found</h2>
        <Link to='/' className='main-link' style={{margin: '2rem'}}>return home</Link>
      </Hero>
    </>
  )
}
