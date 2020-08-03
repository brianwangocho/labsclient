import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Cards from './components/cards/Card'
import SwipeButtons from './components/swipebuttons/swipebutton';
import Chats from './components/chats/chats';
import ChatScreen from './components/chats/chatScreen';


function App() {
  return (
    <div className="App">
   
    
    <Router>
    
      <Switch>
      <Route path="/chats/:person">
        <Header backbutton="/chats"/>
        <ChatScreen/>
        </Route>
        <Route path="/chats">
        <Header backbutton="/"/>
        <Chats/>
        </Route>
        <Route path="/">
        <Header/>
        <Cards/>
        <SwipeButtons/>
        </Route>
      </Switch>
    

    </Router>
    
     
    </div>
  );
}

export default App;
