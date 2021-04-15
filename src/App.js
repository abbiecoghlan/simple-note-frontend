import './App.css';
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react';
import { login } from './actions/actionIndex.js'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import NoteShow from './components/NoteShow'
import { connect } from 'react-redux';
import EditNoteForm from './components/EditNoteForm'
import NewNoteForm from './components/NewNoteForm'
import Note from './components/Note'
import NotesContainer from './components/NotesContainer';
import { useHistory } from "react-router";
import SignUpForm from "./components/SignUpForm"



const App = ({user}) => {

const history = useHistory()

  useEffect(() => {   
      !user && history.location.pathname !== "/signup" ? history.push('./login') : console.log(user)
  }, [])


  return (
    <div className="App">
       <div className="ui container" >
      
        <Switch>
        <Route history={history} exact path="/login" component={LoginForm}/>
        <Route  exact path="/signup" component={SignUpForm} />
        <Route  exact path="/notes/new" component={NewNoteForm} />
          <Route  exact path="/notes/:id" component={NoteShow} />

          <Route  exact path="/notes/edit/:id" component={EditNoteForm} />
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
