import React, { useEffect, useRef, useState } from 'react'
import todo from '../assets/todo.png'
import TodoItems from './TodoItems'

const Todo = () => {

const [todoList,setTodoList]=useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")):[]);
 /* to store the input in a new array */

const inputRef=useRef()  /* get the value entered from input field */

const add=() => {  /* Add the text in the input field */ 
   const inputText=inputRef.current.value.trim() /* To remove the extra space by trim() */
//    console.log(inputText);


// If the input is empty
if (inputText === ""){
         return null           
}


// To point a particuler Todo we provide id 
   const newTodo={  /* object */
        id:Date.now(),  /* it will generate unique id */
        text:inputText,
        isComplete:false,  /* Status - if TRUE means completed*/
        }
    setTodoList((prev) => [...prev,newTodo])  /* Store the input in this array */

    inputRef.current.value=""    /* To store empty string & clear the input field */
}



const deleteTodo=(id) => {
      setTodoList((prvTodo) => {
        return prvTodo.filter((todo) => todo.id !== id)
      })
}



const toggle=(id) => {
    setTodoList((prevTodos) =>{
      return prevTodos.map((todo) => {    /*  check the current status*/
        if(todo.id === id){    /* if statement will return individual todo item */
          return {...todo, isComplete: !todo.isComplete};
        }
        return todo
      })
    })
}

// It is use to update & [] is dependency ..get updated
useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>



  {/* --------title----------- */}
<div className='flex items-center mt-7 gap-2'>
     <img className='w-8' src={todo} alt="" />
     <h1 className='text-3xl font-semibold'>To Do List</h1>
</div>



  {/* --------input box----------- */}
<div className='flex items-center my-7 bg-gray-200  rounded-full'>
    <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
    <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium  cursor-pointer'>ADD +</button>
</div>


  {/* --------todo list----------- */}
<div>
  {todoList.map((item,index) =>{
               return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
  })}
   {/* <TodoItems text=" Learn Coding"/> */}
</div>



</div>
  )
}

export default Todo
