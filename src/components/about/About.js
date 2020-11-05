import React from 'react';
import styled, {withTheme} from 'styled-components'
import {Grow} from "@material-ui/core";

const StyledAbout = styled.div`
  p{
    line-height: 2;
  }
  .icons{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
   opacity: 0.3;
  &__img{
    height: 55px;
    margin: 0 20px;
  }
  }
`;

const iconsSrc = [
    'img/icons/jalousie.png',
    'img/icons/blinds.png',
    'img/icons/garageDoor.png',
    'img/icons/ezs.png'
];

export const About = withTheme(() => {
        const [iconsSeen, setIconSeen] = React.useState(false);
        const iconsRef = React.useRef(null);

        const isElementInView = (element) => {
            const bounding = element.getBoundingClientRect();
            return bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        };

        const handleWindowScroll = () => {
            if (iconsRef && iconsRef.current) {
                !iconsSeen && isElementInView(iconsRef.current) && setIconSeen(true);
            }
        };

        React.useEffect(() => {
            window.addEventListener('scroll', handleWindowScroll);
            return () => window.removeEventListener('scroll', handleWindowScroll)
        }, []);

        return (
            <StyledAbout>
                <p>Naše rodinná firma se delší dobu zabývá zejména profesionální montáží stínící techniky, především
                    předokenních žaluzií, rolet a sítí proti hmyzu. Pro naše zákazníky zajišťujeme i montáž garážových
                    vrat.</p>
                <div className='icons' ref={iconsRef}>
                    {iconsSrc.map((iconSrc, index) => (
                        <Grow
                            key={index}
                            in={iconsSeen}
                            style={{transitionDelay: `${index * 500 + 1000}ms`}}
                            timeout={100}
                        >
                            <img className='icons__img' src={iconSrc}/>
                        </Grow>
                    ))}
                </div>
            </StyledAbout>
        )
    }
);