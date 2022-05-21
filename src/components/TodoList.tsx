
import React, { ReactChild, ReactFragment, ReactPortal } from 'react'
import { Todo } from '../models/Todo'
import SingleTodo from './SingleTodo'



interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    children: React.ReactNode;
}




const TodoList: React.FC<Props> = ({todos, setTodos})=> {
  
    return (


        <div className='todos'>

        {
                todos.map((todo)=>{
                    <SingleTodo/>
                })
        }
    
        
        
        
        </div>
  )
}

export default TodoList;