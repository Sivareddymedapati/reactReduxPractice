import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'



function NewCakeContainer(props) {

    const [number, setNumber] = useState(1)

    return (
        <div>
           <h2>number of cakes - {props.numberOfCakes}</h2>
           <input type="text" value = {number} onChange={e => setNumber(e.target.value)}/>
           <button onClick={() => props.buyCake(number)}>buy {number} cakes</button> 
       
        </div>
    )
}

const mapStateToProps = state => {
     
      return {
          numberOfCakes:state.cake.numberOfCakes
      }
}

export const mapDispatchToProps = dispatch => {
    return {
      buyCake: number => dispatch(buyCake(number))
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer)
