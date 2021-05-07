import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'
import NavBar from './NavBar';
import { useState } from 'react'
import { editNote } from '../actions/actionIndex'



const EditNoteForm = ({ user, activeNote, editNote, history }) => {


    const [form, setForm] = useState({title: activeNote.title, content: activeNote.content, archived: false, id: activeNote.id, user_id: user.id})

    const handleChange = (e) => {
        setForm({
            ...form,            
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editNote({...form, user_id: user.id})
       
        console.log({
            ...form,
            user_id: user.id
        })
        history.push(`/notes/${activeNote.id}`)

    } 

    return (
        <>
        <NavBar></NavBar>
        <Form onSubmit={(e)=> handleSubmit(e)} style={{ maxWidth: "75%", position: "static", margin: "auto" }} >
            <Form.Group widths='equal'>
            <Form.Field
                id='form-input-control-first-name'
                name='title'
                control={Input}
                label='Title'
                placeholder={activeNote.title}
                value={form.title}
                onChange={(e) => handleChange(e)}
            />

            </Form.Group>
            <Form.Field
            style={{ minHeight: 200 }}
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Content'
            placeholder={activeNote.content}
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

export default connect(mapStateToProps, { editNote })(EditNoteForm)