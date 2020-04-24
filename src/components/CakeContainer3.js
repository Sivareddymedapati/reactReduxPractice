import React from 'react'
import {mapStateToProps} from '../components/CakeContainer2'
import {connect} from 'react-redux'

function CakeContainer3(props) {
    return (
        <div>
            number1 - {props.numberOfCakes}
        </div>
    )
}

export default connect (mapStateToProps) (CakeContainer3)
