// import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import { useState } from 'react'
import { login } from '../actions/actionIndex'
import {Redirect, useHistory } from "react-router-dom"

   
const LoginForm = ({ user,  login, history }) => {

    //  useEffect(() => {
    //     !user ? history.push('/login') : history.push("/notes")
    // }, [])
  



    const [form, setForm] = useState({username:"", password:""})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({user: {...form}})

        setForm({
            username: "",
            password: ""
        })
        history.push("/notes")
    } 

    return (
        user ? <Redirect to='/notes' /> :
        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color='violet' textAlign='center'>
             SIMPLE NOTE
          </Header>
          <Header as='h2' color='violet' textAlign='center'>
             Log-in to your account
          </Header>
          <Form onSubmit={(e) => handleSubmit(e)} inverted size='large'>
            <Segment inverted stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'                 
                name="username"
                value={form.username}
                onChange={(e) => handleChange(e)}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={form.password}
                onChange={(e) => handleChange(e)}
              />
    
              <Button color='purple' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>              
            New to us? <a href='./signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      notes: state.notes
     }
  } 

export default connect(mapStateToProps, { login })(LoginForm)