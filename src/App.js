
import React, { useEffect } from 'react';
import Component from './Component/Component'
import Button from '@material-ui/core/Button';
import Store from './Store'
import styled from 'styled-components'

function App() {

  const { fetchData } = Store.actions

  useEffect(() => {
    fetchData();
  });

  const refresh = (param) => {
      fetchData();
  }
  return (
    <AppStyle>
      <Button className="btns" variant="contained" color="primary" onClick = {() => refresh()} >Fetch New Data</Button>
      <Component />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled('div')`
    .btns{
      margin:10px;
       border-radius: 30px;
       padding: 10px 40px;
       background: #FF6614;
       &:hover{
        background: #f5864b;
        
       }
    }
  
`