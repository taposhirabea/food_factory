import React from 'react'
import { ProductConsumer } from '../context/context'
//import singleProductBcg from '../Images/singleProductBcg.jpeg'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function SingleProductPage() {
  return (
    <>
      <Hero img='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg' title='single Product'/>
      <ProductConsumer>
      {value => {
        const { singleProduct, addToCart, loading } = value;

        if (loading) {
          return <h1>product loading.....</h1>
        }

        const {company, description, id, price, title, image } = singleProduct;
        return (
          <section className='py-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-10 max-auto col-sm-8 col-md-6 my-3'>
                 {/* if image from folder then src={}`../${image}`} && in the bellow i used image from google */}
                  <img src={image} alt='single product' className='img-fluid'/>
                </div>
                <div className='col-10 max-auto col-sm-8 col-md-6 my-3'>
                  <h5 className='text-title mb-4 '> model: {title}</h5>
                  <h5 className='text-capitalize text-muted mb-4'>
                    company: {company}
                  </h5>
                  <h5 className='text-main text-capitalize mb-4'>
                    price: ${price}
                  </h5>
                  <p className='text-capitalize text-title mt-3'>
                    some info abour product: {description}
                  </p>
                  <button type='button' className='main-link' 
                  style={{ margin: '0.75rem'}}
                  onClick={() => addToCart(id)}>
                    add to cart
                  </button>
                  <Link to='/products' className='main-link' 
                  style={{ margin: '0.75rem'}}>
                    back to products
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    </ProductConsumer>
    </>
  )
}
