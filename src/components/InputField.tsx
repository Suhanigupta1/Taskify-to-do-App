import React from 'react'
import './styles.css'
import {useRef} from 'react';
interface Props {
    todo:string | number | readonly string[] | undefined;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}
const InputField : React.FC<Props> =({todo, setTodo, handleAdd}: Props) => {
  const InputRef = useRef<HTMLInputElement>(null);
  return ( <form className='input' 
  onSubmit={(e)=>{
    handleAdd(e);
  InputRef.current?.blur();}}>
    <input ref={InputRef} type="input" placeholder="Enter a task..." 
    className='input_box' value={todo} 
    onChange={(e)=>setTodo(e.target.value)} ></input>
    <button className="input_submit" type="submit">
        Go</button>
  </form>
  )
}

export default InputField;
