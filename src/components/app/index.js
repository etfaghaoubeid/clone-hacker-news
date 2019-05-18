import React from 'react';
import {ThemeProvider} from  'styled-components';
import {  colorsDark  }  from 'styles/pallete';
import {Wrapper,Title} from './style';
import List from 'components/List';
class App extends React.Component{
  render(){
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Clone</Title>
            <List/>
          </Wrapper>
        </div>  
      </ThemeProvider>
    
    );
  }
}  

export default App;
