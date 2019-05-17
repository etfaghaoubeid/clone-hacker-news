import React from 'react';
import {ThemeProvider} from  'styled-components';
import {  colorsDark  }  from 'styles/pallete'
import {Wrapper,Title} from './style'
class App extends React.Component{
  render(){
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>hello</Title>
          </Wrapper>
        </div>  
      </ThemeProvider>
    
    );
  }
}  

export default App;
