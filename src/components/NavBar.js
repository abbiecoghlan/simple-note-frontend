import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
// import NotesContainer from './NotesContainer';
import { useHistory } from "react-router";
import { useState } from "react";
import { searchByTerm, logOut } from '../actions/actionIndex'

const NavBar = ({user, filter, searchByTerm, logOut}) => {
    
    const history = useHistory()
    const [searchInput, setSearchInput] = useState("")

     const id = { user }

    const handleChange = (e) => {
        searchByTerm(e.target.value)
    }

    const handleClick = (e) => {
        history.push('/notes')
    }

    const handleLogOut = (e) => {
        //update state to remove user, remove token, and redirect to login page
        const token = localStorage.getItem("token")
        window.localStorage.removeItem("token")
        logOut()
        history.push('/login')
      
    }

    return (

        <Menu inverted>
          <Menu.Item as={NavLink} exact to={`/home`} size='massive' onClick={handleClick}>
            <Icon name='home' />             
                Home     
            </Menu.Item>

            <Menu.Item as={NavLink} exact to={`/notes`} size='massive' onClick={handleClick}>
            <Icon name='sticky note' />             
                My Notes     
            </Menu.Item>

            <Menu.Item as={NavLink} exact to={`/notes/new`} size='massive' onClick={handleClick}>
            <Icon name='plus' />             
                New Note     
            </Menu.Item>

        
            <Menu.Menu position='right'>
          <Menu.Item >
            <Input onClick={(e) => handleClick(e)} onChange={(e) => handleChange(e)} icon='search' placeholder='Search your notes...' value={filter} />
          </Menu.Item>

          <Link to="/login">
          <Menu.Item onClick={(e) => handleLogOut(e)}
            name='logout'
          />
           </Link>

        </Menu.Menu>
      </Menu>

    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      notes: state.notes,
      filter: state.filter
     }
  }
  

export default connect(mapStateToProps, { searchByTerm, logOut })(NavBar)