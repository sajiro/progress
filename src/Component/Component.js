
import React, { /* useState, */ useEffect } from 'react';
import Store from '../Store'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import Bar from './Bar/Bar'
import Button from './ButtonComp/ButtonComp'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const Component = () => {
    /* const [message, setGreeting] = useState( 'aaa' );
    const handleChange = event => setGreeting(event.target.value); */
    const handleChange = event => {
        console.log(event.target.value);
        Store.ob.selected = event.target.value
      };
    
    return (
      <Container>
          <h1>aaaa</h1>
          {JSON.stringify(Store.ob.loading)} ----
          {JSON.stringify(Store.ob.bars)} ----

         

            {Store.ob.bars &&
                Store.ob.bars.map((item, i) => (
                    <div key={i}><Bar item={item} /></div>
                ))
            }

            {Store.ob.progData.buttons &&
                <div className="main">
                     <Select className="sub select-sub"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Store.ob.selected}
          onChange={handleChange}
        >
            {Store.ob.bars.map((item, i) => (
                <MenuItem key={i} value={i}>{'Progress ' + (i+1)}</MenuItem>
                ))}
        </Select>
                {Store.ob.progData.buttons.map((item, i) => (
                    <div key={i} className="sub"><Button item={item} /></div>
                ))}
                </div>
            }
          

         {/*  {Store.ob.loading &&  <Bar/>} */}
       {/* <Headline headline={message} onChangeHeadline={handleChange}/>  */}
     </Container>
    )
  }
  
  export default observer(Component)


  const Container = styled('div')`
  .main{
    display:flex;
    width:100%;
    .sub{
        flex: 1 1 auto;
        text-align: center;
        &.select-sub{
            text-align: left;
        }
    }
  }
  
`
 
