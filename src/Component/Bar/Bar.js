
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';

const Bar = (props) => {
    return (
        <BarContainer className={props.item.id === props.selected ? 'selected' : 'unselect'}>
            <Label className="label" pos={props.item.value - 10}>{props.item.value} %</Label>
            <LinearProgress variant="determinate" value={props.item.value} className={props.item.value === 100 ? 'max progress-bar' : 'progress-bar' }  />
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
    left: ${props => props.pos < 0 ? props.pos + 10 : props.pos}%;
    width: 80px;
    padding: 5px;
    text-align: center;
    color: white;
`
const BarContainer = styled('div')`
    position: relative;
    margin: 20px 0;
    &.selected{
        border:2px solid #a1d404;
    }
    &.unselect{
        border:2px solid #F3F3F3;
    }
    .progress-bar{
        height:30px;
        &.max{
            .MuiLinearProgress-bar{
                background:red;
            }
        }
    }
    .MuiLinearProgress-bar{
        background:#FF6614;
    }
    .MuiLinearProgress-root{
        background:#fbe1d3;
    }
`
