import React from 'react'
import styled, {withTheme} from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Fade from "@material-ui/core/Fade";
import {createBreakpoint} from 'styled-components-breakpoint';
import {DefaultTheme} from "../../../style/DefaultTheme";
import Button from "@material-ui/core/Button";
import {Link} from "react-scroll";
import {NavBarLinks} from "../../navbar/NavBarLinks";
import {SectionName} from "../../navbar/SectionNames";

const breakpoint = createBreakpoint(DefaultTheme.breakpoints);

const StyledHeroOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  .heroOverlay{
    max-width: 1024px;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: ${props => props.theme.heroContentClr};
    padding: 32px;
      ${breakpoint('md')`
        height: calc(100% - 90px);
        margin-top: 90px;
      `}
      &__wrapper{
         display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4);
      }
    &__headline{
      font-size: 24px;
      margin-bottom: 30px;
      ${breakpoint('md')`
        font-size: 42px;
        margin-bottom: 50px;
      `}
    }
    &__cardWrapper{
      margin: -20px;
      display: flex;
       ${breakpoint('md')`
            margin: -35px;
      `}
    }
       &__linkButtonWrapper{
        margin-top: 30px;
         text-decoration: none;
      ${breakpoint('md')`
        margin-top: 50px;
      `}
       }
         &__linkButton{
        font-size: 16px;
       
        a{
         text-decoration: none;
        }
      ${breakpoint('md')`
       font-size:  20px;
      `}
       }
  }
`;

const StyledHeroOverlayCard = styled.div`
  .heroOverlayCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
   ${breakpoint('md')`
            padding: 35px;
      `}
    &__text{
       font-size: 16px;
        margin-top: 5px;
       ${breakpoint('md')`
        font-size: 22px;
       margin-top: 10px;
      `}
       
    }
    &__icon{
      width: 30px;
      height: 30px;
       ${breakpoint('md')`
       width: 50px;
      height: 50px;
      `}
    }
  }
`;

const HeroOverlayCard = withTheme(({text, IconComponent, active, theme, transitionDelay = 0}) => (
    <StyledHeroOverlayCard>
        <div className='heroOverlayCard'>
            <Fade in={active}
                  style={{transitionDelay: `${active ? transitionDelay : 0}ms`}}
                  timeout={{
                      enter: 500, exit: 500
                  }}
            >
                <IconComponent className='heroOverlayCard__icon'/>
            </Fade>
            <div className='heroOverlayCard__text'>
                {text}
            </div>
        </div>
    </StyledHeroOverlayCard>
));

export const HeroOverlayWhy = withTheme(({active, theme}) => {
    const animationDelay = theme.heroCarouselAnimDuration;
    return (
        <StyledHeroOverlay>
            <div className='heroOverlay'>
                <div className="heroOverlay__wrapper">
                    <div className='heroOverlay__headline'>
                        Montáž stínící techniky
                    </div>
                    <div className='heroOverlay__cardWrapper'>
                        <HeroOverlayCard
                            text='Rychlé dodání'
                            IconComponent={AccessTimeIcon}
                            active={active}
                            transitionDelay={animationDelay}
                        />
                        <HeroOverlayCard
                            text='Kvalita práce'
                            IconComponent={PlaylistAddCheckIcon}
                            active={active}
                            transitionDelay={animationDelay + 500}
                        />
                        <HeroOverlayCard
                            text='Výhodná cena'
                            IconComponent={MonetizationOnIcon}
                            active={active}
                            transitionDelay={animationDelay + 1000}
                        />
                    </div>
                    <div className='heroOverlay__linkButtonWrapper'>
                        <Link
                            to={NavBarLinks.find(navBarLink => navBarLink.name === SectionName.CONTACT).href}
                            smooth={true}
                            offset={-100}
                        >
                            <Button variant="contained" color='secondary' className='heroOverlay__linkButton'>Kontaktujte nás</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </StyledHeroOverlay>
    )
});