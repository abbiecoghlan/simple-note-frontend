import React from 'react';
import { connect } from 'react-redux';
// import notesReducer from '../reducers/notes';
import { Button, Card, Image, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { setNote, searchByTerm } from '../actions/actionIndex'



const Note = ({note, setNote, searchByTerm}) => {

    const handleClick = (e) => {
        setNote(note)
        searchByTerm("")
    }


    return (
        <>
        <Card  color={'violet'}>
          <Card.Content>
            <Card.Header>{note.title}</Card.Header>
            <Card.Description>
            {note.content} 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/notes/${note.id}`}>
            <Button onClick={(e) => handleClick(e)} color='violet'>
            View Note
            </Button>
            </Link>
          </Card.Content>
        </Card>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      activeNote: state.activeNote 
     }
  }
  

export default connect(mapStateToProps, { setNote, searchByTerm })(Note)






