import React from 'react'
import tick from '../assets/tick.png'
import notTick from '../assets/notTick.png'
import delete_tick from '../assets/delete_tick.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>


       <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
             <img src={isComplete?tick:notTick} alt="" className='w-7 ' />  {/* // m-3 is added in extra */}
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
               ${isComplete ? "line-through" : ""} `}> {text} </p>
       </div>

      <img onClick={()=>{deleteTodo(id)}} src={delete_tick} alt="" className='w-8  cursor-pointer'/>  {/* // w-3.5 in actual */}

    </div>
  )
}

export default TodoItems
