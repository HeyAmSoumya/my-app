
import React , { Component , useContext} from 'react';
import { ThemeContext } from '../App';

export default class ClassCounter extends React.Component {
 
  onChange(params){
     this.setState(prevValue => { return{count: prevValue.count  + params}})
  }
  constructor(props){
    super(props)
      
    this.state = {
      count: this.props.intialCounter
    }

  }
  render(){
   return(
    
        <ThemeContext.Consumer>
          {style=>( <div>
            <h1>Class based Componets.</h1>

            <button style={style} onClick={() => this.onChange(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={style}  onClick={() => this.onChange(1)}>+</button>
            <p>This the new feature i add to this component..</p>
          </div>)}
    
          </ThemeContext.Consumer>

    )
  }
}