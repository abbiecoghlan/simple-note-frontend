import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'
import NotesContainer from './NotesContainer';
import { useHistory } from "react-router";
import { useState } from "react";
import { searchByTerm } from '../actions/actionIndex'

const NavBar = ({user, filter, searchByTerm}) => {
    
    const history = useHistory()
    const [searchInput, setSearchInput] = useState("")

     const id = { user }

    const handleChange = (e) => {
        console.log(filter)
        searchByTerm(e.target.value)
    }

    const handleClick = (e) => {
        console.log("you clicked")
        history.push('/notes')
    }

    const handleLogOut = (e) => {
        //update state to remove user
        // redirect to login page
    }

    return (

        <Menu inverted>
      
        <Link to="/notes">
            <Menu.Item
          name='My notes'/>
        </Link>

        <Link to="/notes/new">
            <Menu.Item
          name='New Note'/>
        </Link>

        
            <Menu.Menu position='right'>
          <Menu.Item >
            <Input onClick={(e) => handleClick(e)} onChange={(e) => handleChange(e)} icon='search' placeholder='Search your notes...' value={filter} />
          </Menu.Item>

          <Link to="/login">
          <Menu.Item
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
  


export default connect(mapStateToProps, { searchByTerm })(NavBar)