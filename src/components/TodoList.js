import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, removeItem, toggleCompleted, editCompletedItem}) {
  return (
    <div>
      <ul className='todo_list'>
        {todos.map((todo) => {
          // <>쓸라면 return 넣어야됨
          return <TodoItem key={todo.id} todo={todo} removeItem={removeItem} toggleCompleted={toggleCompleted} editCompletedItem={editCompletedItem}/>
        })}
      </ul>
    </div>
  )
}

export default TodoList