import { connect } from 'react-redux';
import { Button, Form, Segment, Grid, Header, Message } from 'semantic-ui-react'
import { useState } from 'react'
import { createUser } from '../actions/actionIndex'
import { Redirect } from "react-router-dom"

   
const SignUpForm = ({ user,  createUser, history }) => {

    const [form, setForm] = useState({username:"", password:"", email: ""})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
          })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createUser({user: {...form}})
        setForm({
            username: "",
            password: "", 
            email: ""
          })
        // history.push("/notes")
    } 


    return (
        user ? <Redirect to='/notes' /> :
        <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color='pink' textAlign='center'>
             SIMPLE NOTE
        </Header>
        <Header as='h2' color='pink' textAlign='center'>
             Create a new account
        </Header>
        <Form onSubmit={(e) => handleSubmit(e)} inverted size='large'>
            <Segment inverted stacked> 

            <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email'                 
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}/>
                
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
                onChange={(e) => handleChange(e)}/>
    
              <Button color='pink' fluid size='large'>
                Create account
              </Button>

            </Segment>
          </Form>
          <Message>              
            Already have an account? <a href='./login'>Login.</a>
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

export default connect(mapStateToProps, { createUser })(SignUpForm)