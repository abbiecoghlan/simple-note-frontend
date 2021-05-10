import './App.css';
import { Switch, Route, Redirect, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import LoginForm from './components/LoginForm'
import NoteShow from './components/NoteShow'
import { connect } from 'react-redux';
import EditNoteForm from './components/EditNoteForm'
import NewNoteForm from './components/NewNoteForm'
import NotesContainer from './components/NotesContainer';
import { useHistory } from "react-router";
import SignUpForm from "./components/SignUpForm"
import { tokenLogin } from './actions/actionIndex'


const App = ({user, tokenLogin, activeNote}) => {

const history = useHistory()

const { id } = useParams()

useEffect(() => {   
    const token = localStorage.getItem("token")
    if (token) {
      if (!user) {
        tokenLogin(token)
        
       } else {

          if (!activeNote) {

            debugger
            // history.push("/notes")
          
        }
       } 
      } 
  }, [user, activeNote])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!user && !token && history.location.pathname !== "/signup"){
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
    notes: state.notes,
    activeNote: state.activeNote
   }
}

export default connect(mapStateToProps, { tokenLogin })(App);
