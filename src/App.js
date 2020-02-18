
import React, { /* useState, */ useEffect } from 'react';
import Component from './Component/Component'
import Button from '@material-ui/core/Button';
import Store from './Store'
/* import React, { useState, useEffect } from 'react'; */
/* 
const {observable, computed, autorun, toJS} = mobx; */


function App() {

  const { fetchData } = Store.actions

  useEffect(() => {
    console.log('popoka');
    fetchData();
  });

/*   useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
  
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); 
 */
  const refresh = (param) => {
      console.log('clickme' + param);
      fetchData();
      /* Store.actions.fetchData();
      console.log(Store.ob.progData); */
  }
  return (
    <div className="App">
      <header className="App-header">
        Progress Bars Demo 
      </header>
      <Component />
     
      <Button variant="contained" color="primary" onClick = {() => refresh()}>Refresh</Button>
    </div>
  );
}

export default App;
