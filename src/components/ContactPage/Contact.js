import React from 'react'
import Title from '../Title'

export default function Contact() {
  return (
    <section className='py-5'>
        <div className='row'>
            <div className='col-10 mx-auto my-3 col-md-6'>
                <Title title='contact us'/>
                <form className='mt-5' action="https://formspree.io/taposhirabea33@yahoo.com" method="post">
                    <div className='form-group'>
                        <input type='text' name='firstName'
                            className='form-control'
                            placeholder='john smith'/>
                    </div>
                    <div className='form-group mt-2'>
                        <input type='text' name='email'
                            className='form-control'
                            placeholder='email@email.com'/>
                    </div>
                    <div className='form-group mt-2'>
                        <input type='text' name='subject'
                            className='form-control'
                            placeholder='important!!!!'/>
                    </div>
                    <div className='form mt-2'>
                        <textarea name='message'
                        className='form-control'
                        rows='10'
                        placeholder='hello there buddy'></textarea>
                    </div>
                    <div className='form-group mt-3'>
                        <input type='submit' value='Send' 
                        className='form-control bg-primary text-white'/> 
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
