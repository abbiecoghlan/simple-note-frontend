import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import NavBar from './NavBar';
import { useState } from 'react'
// import activeNoteReducer from '../reducers/activeNote';
import { newNote } from '../actions/actionIndex'


const NewNoteForm = ({user, activeNote, history, newNote}) => {


    const [form, setForm] = useState({title:"", content:"", archived: false, user_id: user.id})

    const handleChange = (e) => {
        setForm({
            ...form,            
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newNote({...form})
       
        console.log({
            ...form
        })
        history.push(`/notes/`)

    } 


    return (
        <>
        <NavBar></NavBar>
        <Form onSubmit={(e)=> handleSubmit(e)}>
            <Form.Group widths='equal'>
            <Form.Field
                id='form-input-control-first-name'
                name='title'
                control={Input}
                label='Title'
                placeholder="A new title"
                value={form.title}
                onChange={(e) => handleChange(e)}
            />

            </Form.Group>
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Content'
            placeholder="Enter your note here!"
            name='content'
            value={form.content}
            onChange={(e) => handleChange(e)}
            />
            <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Save Changes'
            />
        </Form>

        </>
    )

}


const mapStateToProps = (state) => {
    return {
      activeNote: state.activeNote,
      user: state.user
     }
  } 

export default connect(mapStateToProps, { newNote })(NewNoteForm)

