import React from 'react';
import styled, {withTheme} from 'styled-components';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import {createBreakpoint} from "styled-components-breakpoint";
import {DefaultTheme} from "../../style/DefaultTheme";

const breakpoint = createBreakpoint(DefaultTheme.breakpoints);

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.footerBgClr};
  justify-content: center;
  padding: 20px 40px;
  box-sizing: border-box;
  color: white;
  a:hover{
   color: ${props => props.theme.footerClrHover};
  }
  .topWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
     ${breakpoint('md')`
        flex-direction: row;
      `}
    &__left{
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      margin: 20px;
    }
    &__center{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 auto;
      margin: 20px;
      flex-wrap: wrap;
    }
    &__right{
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      margin: 20px;
    }
    &__logo{
      height: 60px;
    }
    &__iconWithText{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${props => props.theme.footerClr};
      margin: 10px 0;
    }
      &__list{
      margin: 10px 30px;
      padding: 0;
      li{
        list-style: none;
      }
     }
    &__icon{
      margin-right: 15px;
    }
    &__socialIcon{
      height: 35px;
      width: 35px;
      color: ${props => props.theme.footerClr};
    }
  }
`

export const Footer = withTheme(() => {
    return (
        <StyledFooter>
            <div className='topWrapper'>
                <div className='topWrapper__left'>
                    <img className='topWrapper__logo' src='img/montujemezaluzie-white.png'/>
                </div>
                <div className="topWrapper__center">
                    <ul className='topWrapper__list'>
                        <li>
                            Lukáš Hrbek
                        </li>
                        <li>
                            <a className='topWrapper__iconWithText' href='tel:+420601563527'>
                                <PhoneOutlinedIcon className='topWrapper__icon'/>
                                <div>+420 601 563 527</div>
                            </a>
                        </li>
                        <li>
                            <a className='topWrapper__iconWithText' href='mailto:lukashrbek@amrif.cz'>
                                <MailOutlineOutlinedIcon className='topWrapper__icon'/>
                                <div>lukashrbek@amrif.cz</div>
                            </a>
                        </li>
                    </ul>
                    <ul className='topWrapper__list'>
                        <li>
                            Aleš Hrbek
                        </li>
                        <li>
                            <a className='topWrapper__iconWithText' href='tel:+420602232547'>
                                <PhoneOutlinedIcon className='topWrapper__icon'/>
                                <div>+420 602 232 547</div>
                            </a>
                        </li>
                        <li>
                            <a className='topWrapper__iconWithText' href='mailto:aleshrbek@amrif.cz'>
                                <MailOutlineOutlinedIcon className='topWrapper__icon'/>
                                <div>amrif@amrif.cz</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="topWrapper__right">
                    <a href=''><FacebookIcon className='topWrapper__socialIcon'/></a>
                </div>
            </div>
            <div className="bottomWrapper"></div>
        </StyledFooter>
    )
});