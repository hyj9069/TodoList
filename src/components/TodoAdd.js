import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function TodoAdd({addItem}) {
  const [inputValue, setInputValue] =useState('')
  const inputRef = useRef(null)

  const handleAddItem = (e) => {
    e.preventDefault()
    addItem(inputValue)
    inputRef.current.value = ''
  }


  return (
    <form className='todo_add' onSubmit={handleAddItem}>
      <input type='text' placeholder='할 일을 입력하세요.' onChange={e => setInputValue(e.target.value)} ref={inputRef}/>
      <button type='submit'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  )
}

export default TodoAdd