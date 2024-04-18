import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, removeItem, toggleCompleted, editCompletedItem }) {
  const editRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const editItem = () => {
    setIsEditing(true); //편집 모드
    setEditText(todo.task); // 편집 버튼 클릭 후 기존 input에 적엇던 글자 그대로 먼저 저장 / 그 후에
    //저장된 li의 input 에 value를 editText 설정하면 편집 가능
    // editRef.current.focus()
  };
  //문서가 마운트 되자마자 처음 한번은 나오니까 ? 그때는 아무것도 없는 거기 때문에 조건문을 넣어준다
  useEffect(() => {
    if (isEditing) {
      //isEditing이 true면, input에 포커스 가게 설정
      editRef.current.focus();
    }
  }, [isEditing]);

  const editCompleted = () => {
    setIsEditing(false); //편집 끝내고, 다시 변경 저장된 화면으로 바뀌기
    editCompletedItem(todo.id, editText);
  };
  // console.log(isEditing)
  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" ref={editRef} value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={editCompleted}>save</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? "completed" : ""} onClick={() => toggleCompleted(todo.id)}>
            {todo.task}
          </span>
          <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={editItem} />
          <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => removeItem(todo.id)} />
        </>
      )}
    </li>
  );
}

export default TodoItem;
