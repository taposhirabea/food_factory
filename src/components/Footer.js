import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context/context'

export default function Footer() {
  return (
    <ProductConsumer>
      {value =>{
        return (
          <FooterWrapper>
            <div className='container py-3'>
              <div className='row'>
                <div className='col-md-6'>
                  <p className='text-capitalize'>
                    copyright &copy; texh store {new Date().getFullYear()}. 
                    all rights reserved {' '}
                  </p>
                </div>
                <div className='col-md-6 d-flex justify-content-around' >
                  {value.socialIcons.map(item => 
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  )}
                </div>
              </div>
            </div>

          </FooterWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .icon {
    font-size: 1.5rem;
    transition: var(--mainTransition);
    color: var(--mainWhite);
  }
  .icon:hover {
    cursor: pointer;
    color: var(--PrimaryColor);
  }
`