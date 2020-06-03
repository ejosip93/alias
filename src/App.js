import React from 'react';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import TeamForm from "./TeamForm";
import {Link, Route, Switch} from "react-router-dom";
import TeamList from "./TeamList";
import Game from "./Game";
function App() {

  return (
     <div className="bg-light">
       <Navbar bg="dark" expand="lg" className="d-flex flex-row">
           <Navbar.Brand className="whiteColor"><Link to="/">Alias</Link></Navbar.Brand>
           <Link className="linkStyle" to="addTeam">Add new team</Link>
       </Navbar>
         <Switch>
             <Route exact path="/">
                 <TeamList/>
             </Route>
            <Route path="/addTeam">
                <TeamForm/>
            </Route>
             <Route path="/game">
                <Game/>
             </Route>
         </Switch>
     </div>
  );
}

export default App;
