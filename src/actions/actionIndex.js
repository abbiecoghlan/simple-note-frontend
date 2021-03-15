import history from '../history'


export const createUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(r => r.json())
            .then(data => 
                {
                if (!data.user) {
                    //data.message alert
                    console.log("error")
                    alert("Error creating user")
                } else {            
                const currentUser = data.user
                const notes = data.user.notes
                dispatch({type:"LOGIN_USER", currentUser})
                dispatch({type:"FETCH_NOTES", notes})
                history.push('/notes')               
                // localStorage.setItem("token", data.user.jwt)
                }
            })

    }
}



export const login = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(r => r.json())
            .then(data => 
                {
                if (!data.user) {
                    //data.message alert
                    console.log("wronginfo")
                    alert("Wrong username or password. Please check your credentials and try again.")
                } else {
                
                const currentUser = data.user
                const notes = data.user.notes
                dispatch({type:"LOGIN_USER", currentUser})
                dispatch({type:"FETCH_NOTES", notes})
                history.push('/notes')

                

                // localStorage.setItem("token", data.user.jwt)
                }
            })

    }
}

export const searchByTerm = (term) => {
    return {type: "FILTER_BY_TERM", term: term}
}

export const setNote = (note) => {
    return {type: "SET_NOTE", note: note} 
  }

export const editNote = (note) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/notes/${note.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
                title: note.title,
                content: note.content
            })
          })
            .then(r => r.json())
            .then(data => 
                {
                console.log(data)
                dispatch({type:"UPDATE_NOTES", note})
            })
        }
    }


export const newNote = (note) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
                body: JSON.stringify({
                    ...note
                })
              })
                .then(r => r.json())
                .then(data => 
                    {
                    console.log(data)
                    dispatch({type:"ADD_NOTE", note})
                })
    
        }
    
    }
   


export const removeNote = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/notes/${id}`, {
            method: 'DELETE' })
                .then(r => r.json())
                .then(data => 
                    {
                    console.log(data)
                    dispatch({type:"DELETE_NOTE", id})
                })
        }
    }

export const viewNote = (id) => {

    }




export function fetchNotes(notes) {
    return { type: "FETCH_NOTES", payload: [...notes] };
  }
  
