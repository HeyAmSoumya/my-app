import React , {useState , useContext} from 'react';
import { ThemeContext } from '../App'



const FunctionCounter = ({intialCounter}) =>{
  const [count , setCount] = useState(intialCounter);
  const style = useContext(ThemeContext);
 const onChange = (params) =>{
  setCount(prev => prev - params);
  setCount(prev => prev - params);
 }


  return(
    <div>
      <h1>Function Based Component</h1>
      <button style={style} onClick={()=> onChange(1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={()=> onChange(-1)}>+</button>
      console.log({count});
    </div>
  )
}
export default FunctionCounter;