import React from 'react'
import styled, {withTheme} from 'styled-components'
import {Link} from "react-scroll";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {createBreakpoint} from 'styled-components-breakpoint';
import {DefaultTheme} from "../../style/DefaultTheme";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {NavBarLinks} from "./NavBarLinks";

const breakpoint = createBreakpoint(DefaultTheme.breakpoints);

const StyledNavBar = styled.div`
    .navBar{
    background-color: ${props => props.theme.navBarBgClr};
    z-index: 1000;
     position: fixed;
    width: 100%;
    padding: 0;
    ${breakpoint('md')`
         position: fixed;
         padding: 10px 0;
      `}
       a{
        text-decoration: none;
        color: ${props => props.theme.navBarBtnClr};
      }
      &__logoSectionA{
       flex: 1;
      }
      &__logoSection{
        display: flex;
        cursor: pointer;
      }
      &__menuIcon{
      display: block;
      ${breakpoint('md')`
        display: none;
      `}
      }
      &__button{
      display: none;
      color:  ${props => props.theme.navBarTextClr};
      font-size: 16px;
      letter-spacing: 1px;
      transition: color 400ms;
      ${breakpoint('md')`
        display: flex;
      `}
      &:hover{
        color: ${props => props.theme.navBarTextHoverClr};
      }
      }
      &__logoImage{
        height: 36px;
        margin: 5px 15px 5px 5px;
          ${breakpoint('md')`
         height: 36px;
      `}
      }
      &__menuIconImg{
        transition: transform 300ms;
        color: ${props => props.theme.navBarTextClr};;
        &--opened{
          transform: rotate(90deg);
        }
      }
      
      &__companyName{
        font-size: 18px;
        color:${props => props.theme.navBarLogoTextClr};
        letter-spacing: 4px;
        margin: 4px 0;
        font-weight: bold;
        display: none;
        ${breakpoint('md')`
         display: block;
      `}
      }
      &__strong{
        color: ${props => props.theme.navBarLogoTextStrongClr};;
      }
      
    }
`;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = (props) => {
    const classes = useStyles();
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    const menuButtonRef = React.useRef(null);
    const handleMenuButtonClick = () => {
        setOpenMobileMenu(prevOpenMobileMenu => !prevOpenMobileMenu);
    };
    const handleCloseMenu = () => {
        setOpenMobileMenu(false);
    };
    return (
        <StyledNavBar theme={props.theme}>
            <AppBar position="relative" className='navBar' color={"inherit"}>
                <Toolbar>
                    <Link className={'navBar__logoSectionA'} to='home' smooth={true}>
                        <div className='navBar__logoSection'>
                            <img className='navBar__logoImage' src='img/montujemezaluzie-sm.png'
                                 alt='montujemežaluzie'/>
                            <div className='navBar__companyName'>
                                <span>MONTUJEME</span>
                                <span className='navBar__strong'>ZALUZIE</span>
                                <span>.CZ</span>
                            </div>
                        </div>
                    </Link>
                    {NavBarLinks.map(link => (
                        <Link key={link.name} to={link.href} smooth={true} offset={-100}>
                            <Button className='navBar__button'>{link.text}</Button>
                        </Link>
                    ))}
                    <div className='navBar__menuIcon'>
                        <IconButton ref={menuButtonRef} onClick={handleMenuButtonClick} edge="start"
                                    className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon
                                className={`navBar__menuIconImg${openMobileMenu ? ' navBar__menuIconImg--opened' : ''}`}/>
                            <Popper open={openMobileMenu} anchorEl={menuButtonRef.current} role={undefined} transition
                                    disablePortal>
                                {({TransitionProps, placement}) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                                <MenuList id="menu-list-grow">
                                                    {NavBarLinks.map(link => (
                                                        <Link key={link.name} to={link.href} smooth={true} offset={-20}>
                                                            <MenuItem onClick={handleCloseMenu}>
                                                                {link.text}
                                                            </MenuItem>
                                                        </Link>
                                                    ))}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </StyledNavBar>
    );
};

export default withTheme(NavBar);
