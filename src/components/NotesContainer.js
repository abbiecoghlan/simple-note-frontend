import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Note from './Note'
// import { removeNote, viewNote, editNote } from '../actions/actionIndex'
import { useEffect } from 'react'
import {Button, Card} from 'semantic-ui-react'


const NotesContainer = ({ user, notes, history }) => {

    useEffect(() => {
        if (!user){
          history.push('/login') 
          }
    }, [])
    
    const noteCards = notes.map((note) => {
        return (
          <Note 
            key = {note.id}
            note = {note}
          /> 
        )
      })


    return (
        <>
          <NavBar/>
          <Card.Group itemsPerRow={2} >
            {noteCards}      
          </Card.Group>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      notes: state.notes.filter(note => {
        return   (note.title.includes(state.filter) || note.content.includes(state.filter))
      }) 
    }
  }

  // export default connect(mapStateToProps, { removeNote, viewNote, editNote })(NotesContainer)
export default connect(mapStateToProps)(NotesContainer)
