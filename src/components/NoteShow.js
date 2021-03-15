import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form, Segment } from 'semantic-ui-react'
import NavBar from './NavBar';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { removeNote } from '../actions/actionIndex'
import activeNoteReducer from '../reducers/activeNote';


const NoteShow = ({activeNote, removeNote, history}) => {


    const [form, setForm] = useState({title:"", content:"", archived: false, })
  
    const handleDelete = (e) => {
      //dispatch action to delete from backend and the update front end 
      console.log("you'd like to delete")
      const confirm = window.confirm("Are you sure you want to delete this note?")
      if (confirm) {
        removeNote(activeNote.id)
        history.push("/notes")
      }
      else {
        console.log("no")
      }
    }
    const handleEdit = (e) => {
            
            console.log("you'd like to edit")
      
    }

    


    return (
        <>
        <NavBar></NavBar>
        <Segment inverted>
              <Card inverted fluid color={'violet'}>
      <Card.Content>
        <Card.Header>{activeNote.title}</Card.Header>
        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
        {activeNote.content} <strong></strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/notes/edit/${activeNote.id}`}>       
          <Button onClick={(e) => handleEdit(e)} basic color='violet'>
            Edit Note
          </Button>
          </Link>

          <Button onClick={(e) => handleDelete(e)} basic color='violet'>
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