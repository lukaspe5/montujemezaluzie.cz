import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {DefaultTheme} from "./style/DefaultTheme";
import NavBar from "./components/navbar/Navbar";
import {Hero} from "./components/hero/Hero";
import styled from 'styled-components'
import {LeafletMap} from "./components/map/LeafletMap";
import {Services} from "./components/services/Services";
import {About} from "./components/about/About";
import {NavBarLinks} from "./components/navbar/NavBarLinks";
import {SectionName} from "./components/navbar/SectionNames";
import {Footer} from "./components/footer/Footer";
import ReactResizeDetector from 'react-resize-detector';
import {createBreakpoint} from "styled-components-breakpoint";

const breakpoint = createBreakpoint(DefaultTheme.breakpoints);

const selectedTheme = DefaultTheme;

const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif;
  a{
  text-decoration: none;
  }
  .sectionHeadline{
  position: relative;
  display: inline-block;
  font-size: 28px;
  font-weight: lighter;
    &::after{
      content: '';
      position: absolute;
      bottom: -10px;
      height: 4px;
      left: 0;
      width: 80%;
      background-color: ${selectedTheme.headlineUnderlineBgClr};
      border-radius: 2px;
    }
  }
  .sectionContainer{
    margin: auto;
    padding: 0 20px;
    max-width: 1200px;
    text-align: center;
      ${breakpoint('md')`
        text-align: left;
      `}
  }
  .scrollWrapper{
    margin-bottom: 300px;
    background-color: ${selectedTheme.scrollWrapperBgClr}; ;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }
  .footerWrapper{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  max-height: calc(100vh - 83px);
  overflow: auto;
  }
`

export const App = () => {
    const getNavBarHref = (name) => {
        const navBarLink = NavBarLinks.find(nabBarLink => nabBarLink.name === name);
        return navBarLink && navBarLink.href || '';
    };
    const [footerHeight, setFooterHeight] = React.useState(0);
    const handleFooterResize = (width, height) => {
        setFooterHeight(height)
    }
    const footerRef = React.useRef(null);
    return (
        <StyledApp>
            <Router>
                <ThemeProvider theme={selectedTheme}>
                    <div id='home' className="App">
                        <div className='scrollWrapper' style={{marginBottom: `${footerHeight}px`}}>
                            <NavBar/>
                            <Hero/>
                            <div className='sectionContainer'>
                                <h2 id={getNavBarHref(SectionName.ABOUT_US)} className='sectionHeadline'>O nás</h2>
                                <About/>
                            </div>
                            <div className='sectionContainer'>
                                <h2 id={getNavBarHref(SectionName.SERVICES)} className=' sectionHeadline'>Naše
                                    služby</h2>
                                <Services/>
                            </div>
                            <div className='sectionContainer'>
                                <h2 id={getNavBarHref(SectionName.CONTACT)} className=' sectionHeadline'>Kontakt</h2>
                            </div>
                        </div>
                        <div className='footerWrapper' ref={footerRef}>
                            <Footer/>
                            <ReactResizeDetector handleHeight={true} handleWidth={true} onResize={handleFooterResize}/>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        </StyledApp>
    );
};
