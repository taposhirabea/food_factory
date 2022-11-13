import React from 'react'
import Title from '../Title'
//import aboutBcg from '../../Images/aboutBcg.jpeg'

export default function Info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto my-3 col-md-6'>
            <img src='https://cdn.pixabay.com/photo/2018/08/29/19/01/fig-3640553_960_720.jpg' className='img-fluid img-thumbnail' alt='about company'
            style={{background: 'var(--darkGrey)'}}/>

          </div>
          <div className='col-10 mx-auto my-3 col-md-6'>
            <Title title='about us'/>
            <p className='text-lead text-muted my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p className='text-lead text-muted my-3'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
            <button className='main-link' style={{marginTop: '2rem'}} type='button'>more info</button>
            
          </div>
        </div>

      </div>
    </section>
  )
}
