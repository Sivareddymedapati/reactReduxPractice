import React from 'react'
import mapDispatchToProps from '../components/CakeContainer'
import {connect} from 'react-redux'



function CakeContainer4(props) {
    return (
        <div>
            <button onClick={props.buyCake}>click2</button>
        </div>
    )
}




export default connect (CakeContainer4) (mapDispatchToProps)  
