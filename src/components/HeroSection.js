import React from 'react'
import  styled  from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
const HeroSection = ({myData}) => {

    const {name}=myData;

    return (
        <Wrapper>
            <div className='container'>
                <div className='grid grid-two-column'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>
                            Welcome to
                        </p>
                        <h2>{name}</h2>
                        <p> 
                            One of the best quality product available here
                            on my store and it will provide you so cheaply
                            product price compare to other store market . 
                        </p>
                        <NavLink >
                            <Button>Shop Now</Button>
                        </NavLink>
                    </div>
                    {/* //home page image */}
                    <div className='hero-section-image'>
                        <figure>
                            <img 
                                src="images/hero.jpg"
                                alt="img-section"
                                className="img-style"
                            />
                        </figure>
                    </div>           
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  padding: 12rem 0;


  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {

    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
    ${'' /* width:30rem; */}
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;