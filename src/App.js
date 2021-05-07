import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react';
import LoginForm from './components/LoginForm'
import NoteShow from './components/NoteShow'
import { connect } from 'react-redux';
import EditNoteForm from './components/EditNoteForm'
import NewNoteForm from './components/NewNoteForm'
import NotesContainer from './components/NotesContainer';
import { useHistory } from "react-router";
import SignUpForm from "./components/SignUpForm"



const App = ({user}) => {

const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      // tokenLogin(token)
      if (!user) {
        console.log("do a token login")
        debugger
      } else {
        // if there is a token and a user and we have not yet loaded, fetch the progress
        console.log("are there notes?")
        debugger
      }
    }
  })
  useEffect(() => {
    if (!user && history.location.pathname !== "/signup"){
      history.push('./login')
    }  

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
