import React from 'react'
import {connect} from 'react-redux'


function CakeContainer2(props) {
    return (
        <div>
            number - {props.numberOfCakes}
        </div>
    )
}

export const mapStateToProps = state => {
    return {numberOfCakes:state.cake.numberOfCakes}
}

export default connect (mapStateToProps) (CakeContainer2)
