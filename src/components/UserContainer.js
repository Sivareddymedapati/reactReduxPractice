import React, {useEffect} from 'react'
import {fetchUsers} from '../redux'
import {connect} from 'react-redux'

function UserContainer({fetchUsers,userData}) {

    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? 
       ( <h1>loading</h1>) :
         userData.error?
        ( <h1>{userData.error}</h1> ):
         (<div>
         <h1>list of users</h1>
         <div>
             {userData && userData.users && userData.users.map((user) => <p key={user.index}>{user.name}</p>)}
         </div>
         </div>)
         
    
}


const mapStateToProps = (state) => {
    return {
        userData:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    fetchUsers:() => dispatch(fetchUsers())

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UserContainer)
