
import styled from 'styled-components'
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Store from '../../Store'
import Snackbar from '@material-ui/core/Snackbar';


const ButtonComp = (props) => {
    const [status, setStatus] = React.useState(`Listening to Progress Bar ${Store.ob.selected + 1}`);

    useEffect(() => {
        _setStatus();
    });

    const _setStatus = () => {
        if (Store.ob.bars[Store.ob.selected].value >= 100) {
            setStatus(`Progress Bar ${Store.ob.selected + 1} maximum number reached!`);
        } else if (Store.ob.bars[Store.ob.selected].value <= 0) {
            setStatus(`Progress Bar ${Store.ob.selected + 1} minimum number reached!`);
        } else {
            setStatus(`Listening to Progress Bar ${Store.ob.selected + 1}`);
        }
    }

    const setLabel = (param) => {
        if (param > 0)
            return '+' + param;
        else
            return param;
    }


    const triggerBtn = (param) => {
        Store.ob.bars[Store.ob.selected].value = Store.ob.bars[Store.ob.selected].value + param;
        if (Store.ob.bars[Store.ob.selected].value > 100) {
            Store.ob.bars[Store.ob.selected].value = 100;
        }
        if (Store.ob.bars[Store.ob.selected].value < 0) {
            Store.ob.bars[Store.ob.selected].value = 0;
        }
    }

    return (
        <ButtonContainer>
            <Button variant="contained" color="primary" className="btns" onClick={() => triggerBtn(props.item)} >{setLabel(props.item)}</Button>
            <Snackbar open={true} message={status} />
        </ButtonContainer>
    )
}

export default ButtonComp

const ButtonContainer = styled('div')`
    .btns{
       border-radius: 30px;
       padding: 10px 40px;
    }
  
`
