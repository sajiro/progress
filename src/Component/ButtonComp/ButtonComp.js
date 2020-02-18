
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { /* useState, */ useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Store from '../../Store'
const  ButtonComp = (props) => {
     
/*      useEffect(() => {
        console.log('popoka');
        console.log(props);
      });
 */
      const triggerBtn = (param) => {
        console.log(param + '---' + Store.ob.max * (param / 100)) ;

        Store.ob.bars[Store.ob.selected].value = Store.ob.bars[Store.ob.selected].value +  param;
        if (Store.ob.bars[Store.ob.selected].value > 100) {
            Store.ob.bars[Store.ob.selected].value = 100;
        }
        if (Store.ob.bars[Store.ob.selected].value < 0){
            console.log('---gugugugugugu');
            Store.ob.bars[Store.ob.selected].value = 0;
        }
        /* else{
            Store.ob.bars[Store.ob.selected].value = 0;
        } */

        if (param > 0) {
            console.log('------------');
            // Do Something
        }else{
            console.log('++++++++++++');
        }


        /* Store.actions.fetchData();
        console.log(Store.ob.progData); */
    }

    return(
        <ButtonContainer>
            <Button variant="contained" color="primary" className="btns" onClick = {() => triggerBtn(props.item)} >{props.item}</Button>
        </ButtonContainer>
    )
}

export default ButtonComp

const ButtonContainer = styled('div')`

  
`
