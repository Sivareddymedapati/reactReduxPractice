import React from 'react'
import { buyIceCream } from '../redux/index'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
           <h1> number of icecreams - {props.numberOfIcecreams}</h1>
            <button onClick={props.buyIceCream}>buy icecream</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numberOfIcecreams:state.iceCream.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream:() => dispatch(buyIceCream())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (IceCreamContainer)
