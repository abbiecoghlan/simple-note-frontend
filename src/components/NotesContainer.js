import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Note from './Note'
import { useState } from 'react'
import { removeNote, viewNote, editNote } from '../actions/actionIndex'
import { useEffect } from 'react'

import {Button, Card} from 'semantic-ui-react'

//add in state from search bar and filter accordingly 

const NotesContainer = ({user, notes, history, filter, removeNote, viewNote, editNote }) => {


    useEffect(() => {
        !user ? history.push('/login') : console.log("hello")
    }, [])
    

    



    const noteCards = notes.map((note) => {

        return (
          <Note 
            key = {note.id}
            note = {note}
            // removeNote = {removeNote}
            // viewNote = {viewNote}
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

export default connect(mapStateToProps, { removeNote, viewNote, editNote })(NotesContainer)
