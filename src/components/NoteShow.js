import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form, Segment, Icon } from 'semantic-ui-react'
import NavBar from './NavBar';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { removeNote } from '../actions/actionIndex'
import emailjs from "emailjs-com"

const NoteShow = ({activeNote, removeNote, history}) => {


    const [form, setForm] = useState({title:"", content:"", archived: false, })
  
    //todo: clean up alert 
    const handleDelete = (e) => {
      const confirm = window.confirm("Are you sure you want to delete this note?")
      if (confirm) {
        removeNote(activeNote.id)
        history.push("/notes")
      }
    }

    const sendEmail = (e) => {

    }
   
    return (
        <>
        <NavBar></NavBar>
        <Segment inverted>
          <Card inverted fluid color={'violet'}>
            <Card.Content>
              <Card.Header>{activeNote.title}</Card.Header>
              <Card.Description> {activeNote.content} <strong></strong></Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button basic color='violet'>
              <Icon name='send' />
                Email Note
              </Button>

              <Link to={`/notes/edit/${activeNote.id}`}>       
              <Button basic color='violet'>
              <Icon name='edit' /> Edit Note
              </Button>
              </Link>
              <Button onClick={(e) => handleDelete(e)} basic color='violet'>
              <Icon name='trash' />
                Delete Note
              </Button>
            </Card.Content>
          </Card>
        </Segment>
        </>
    )
}


const mapStateToProps = (state) => {
  return {
    activeNote: state.activeNote
   }
} 

export default connect(mapStateToProps, { removeNote })(NoteShow)