
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { /* useState, */ useEffect } from 'react';
import Store from '../../Store'
const  Bar = (props) => {/* 
     
     useEffect(() => {
        console.log('popoka');
        console.log(props);
      });
 */

    return(
        <BarContainer>
            <Label className="label" pos={props.item.value - 5} >{props.item.value} %</Label>
            <LinearProgress variant="determinate" value={props.item.value}  className="progress-bar" />
        </BarContainer>
    )
}

export default Bar
const Label = styled('div')`
   /*  background: green; */
    position: absolute;
    z-index: 1;
    bottom: 0;
    top: 0;
    /* right: 0;
    margin: auto; */
    left: ${props => props.pos}%;
    width: 80px;
    padding: 5px;
    text-align: center;
    color: white;
`
const BarContainer = styled('div')`
    position: relative;
    margin: 20px 0;
    .progress-bar{
        height:30px;
    }
`
