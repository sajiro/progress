
import React from 'react';
import Store from '../Store'
import { observer } from 'mobx-react'
import Bar from './Bar/Bar'
import Button from './ButtonComp/ButtonComp'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const Component = () => {

  const handleChange = event => {
    Store.ob.selected = event.target.value
  };

  return (
    <Container>
      <Header>Progress Bar App</Header>
      <p className="model"><strong>Model:</strong>{JSON.stringify(Store.ob.bars)}</p>
      {Store.ob.bars &&
        Store.ob.bars.map((item, i) => (
          <div key={i}><Bar item={item} selected={Store.ob.selected}/></div>
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
              <MenuItem key={i} value={i}>{'Progress ' + (i + 1)}</MenuItem>
            ))}
          </Select>
          {Store.ob.progData.buttons.map((item, i) => (
            <div key={i} className="sub"><Button item={item} /></div>
          ))}
        </div>
      }
    </Container>
  )
}

export default observer(Component)

const Header = styled('header')`
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
`

const Container = styled('div')`
    background: #F3F3F3;
    width: 800px;
    margin: 20px auto 0;
    padding:30px 50px 40px;
  .model{
    font-size:11px;
  }

  @media (max-width: 1350px) {
      
      .main{
        display: flex;
        flex-wrap: wrap;
        width:50%;
        margin: 40px 0 0;
        border-top: 1px solid #fff;
        padding-top: 30px;
    
    .sub{
        flex: 1 1 100%;
        text-align: center;
        &.select-sub{
            text-align: left;
        }
    }
  }
     
    }
  .main{
    display:flex;
    width:100%;
    margin: 40px 0 0;
    border-top: 1px solid #fff;
    padding-top: 30px;
    
    .sub{
        flex: 1 1 auto;
        text-align: center;
        &.select-sub{
            text-align: left;
        }
    }
  }
  
`