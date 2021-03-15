import React from 'react';
import { connect } from 'react-redux';
import notesReducer from '../reducers/notes';
import { Button, Card, Image, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { setNote } from '../actions/actionIndex'


const Note = ({note, setNote}) => {

    const handleClick = (e) => {
        console.log("hi")
        setNote(note)
    }


    return (
        <>
        <Card  color={'violet'}>
      <Card.Content>
        <Card.Header>{note.title}</Card.Header>
        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
          {note.content} <strong></strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/notes/${note.id}`}>
          <Button onClick={(e) => handleClick(e)} basic color='violet'>
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
  


export default connect(mapStateToProps, { setNote })(Note)






