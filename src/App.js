import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { login } from './actions/actionIndex.js'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import NoteForm from './components/NoteForm'
import { connect } from 'react-redux';
import Note from './components/Note'
import NotesContainer from './components/NotesContainer';
import { useHistory } from "react-router";
import SignUpForm from "./components/SignUpForm"



const App = ({user}) => {

const history = useHistory()

// check if a user is logged in upon rendering???
  useEffect(() => {
    
      debugger
      !user && history.location.pathname !== "/signup" ? history.push('./login') : console.log(user)
  }, [])


  return (
    <div className="App">
       <div className="ui container" >
      
        <Switch>
        <Route history={history} exact path="/login" component={LoginForm}
        
        
        />
        <Route  exact path="/signup" component={SignUpForm} />
          <Route  exact path="/notes/:id" component={Note} />
          <Route  exact path="/notes/new" component={NoteForm} />
          <Route  exact path="/notes/edit/:id" component={NoteForm} />
          <Route  exact path="/notes" component={NotesContainer} />
        

        <Route  path="*" render={() => {
          return (
         user ? <Redirect to='/notes' /> : <Redirect to='/login' />
          )
          }} />
        </Switch>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notes: state.notes
   }
}

export default connect(mapStateToProps, null)(App);
