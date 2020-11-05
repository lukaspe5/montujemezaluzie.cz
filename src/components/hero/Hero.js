import React from 'react'
import styled, {withTheme} from 'styled-components'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HeroOverlayWhy} from "./overlay/HeroOverlayWhy";
import {HeroOverlayService} from "./overlay/HeroOverlaySevice";

const StyledHero = styled.div`
  width: 100%;
   
  .carousel{
    &__item{
      width: 100%;
      height: 100%;
      position: relative;
      max-height: 100vh;
   min-height: 400px;
    }
    &__itemImg{
    object-fit: cover;
    transition: opacity ${props => props.theme.heroCarouselAnimDuration}ms;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    max-height: 700px;
    min-height: 300px;
    }
    .slide.selected{
    .carousel__itemImg{
      display: block;
      opacity: 1;
    }
    } 
  }
`;

const heroItems = [
    {imgSource: 'img/hero/hero4.jpg', OverlayContentComponent: HeroOverlayWhy},
    {imgSource: 'img/hero/hero3.png', OverlayContentComponent: HeroOverlayService}
];

export const Hero = withTheme((props) => {
    const [selectedCarouselIndex, setSelectedCarouselIndex] = React.useState(0);
    const handleCarouselChange = (index) => {
        setSelectedCarouselIndex(index);
    };

    return (
        <StyledHero>
            <div className='carousel'>
                <Carousel autoPlay={true}
                          infiniteLoop={true}
                          interval={7000}
                          transitionTime={props.theme.heroCarouselAnimDuration}
                          showArrows={false}
                          onChange={handleCarouselChange}
                          showStatus={false}
                          showThumbs={false}
                >
                    {heroItems.map(({imgSource, OverlayContentComponent}, index) => (
                        <div key={imgSource} className='carousel__item'>
                            <img className='carousel__itemImg' src={imgSource}/>
                            {OverlayContentComponent && <OverlayContentComponent active={selectedCarouselIndex === index}/>}
                        </div>
                    ))}
                </Carousel>
            </div>
        </StyledHero>
    );
});