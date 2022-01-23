import React, {useEffect, useState} from 'react';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/Global';

import { lightTheme, darkTheme } from './theme/Theme';

import Container from './components/container/Container';

import ImageLightPc from './components/images/bg-desktop-light.jpg';
import ImageDarkPc from './components/images/bg-desktop-dark.jpg';
import ImageLightMobile from './components/images/bg-mobile-light.jpg';
import ImageDarkMobile from './components/images/bg-mobile-dark.jpg';

const theme = window.matchMedia('(prefers-color-scheme: light)').matches;

export default function App() {
  const [light, setLight] = useState(theme);
  const [image, setImage] = useState("");

  useEffect(() => {
    if( window.screen.width > 375){
      if(light === true){
        setImage(ImageLightPc);
      }else{
        setImage(ImageDarkPc);
      }
    }else{
      if(light === true){
        setImage(ImageLightMobile);
      }else{
        setImage(ImageDarkMobile);
      }
    }
  }, [light]);

  return (
    <ThemeProvider theme={light?lightTheme:darkTheme}>
      <Container light={light}/>
      <GlobalStyle image={image}/>
    </ThemeProvider>
  );
}

