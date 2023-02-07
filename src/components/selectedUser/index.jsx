import styles from './index.module.scss'
import closeIcon from './../../assets/closeIcon.svg'
import doneIcon from './../../assets/doneIcon.svg'
import TodoItem from "../todoItem";
import {useEffect, useRef, useState} from "react";

export default function SelectedUser({user,closeSelected,markAsDone,addTodo}){

    const [addMode,setAddMode] = useState(false)
    const [inputValue,setInputValue] = useState("")
    const inputRef = useRef(null)

    useEffect(()=>{
        if(addMode) {
            setAddMode(false)
            setInputValue("")
        }
    },[user])

    function handleChangeInputValue(e){
        setInputValue(e.target.value)
    }
    function onAddMode(){
        setAddMode(prev=>!prev)
        setTimeout(()=>{
            inputRef.current.focus();
        })
    }
    function submitAddTodo(e){
        e.preventDefault();
        if(inputValue){
            addTodo(inputValue);
            setAddMode(false);
            setInputValue("");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    addMode?
                        <form onSubmit={submitAddTodo} className={styles.addTodo}>
                            <input type="text" placeholder='New to-do description' name="To-do" value={inputValue} onChange={handleChangeInputValue} ref={inputRef}/>
                            <div className={styles.addBtn}>
                                <img src={doneIcon} onClick={submitAddTodo} alt="add"/>
                            </div>
                        </form>
                        :
                        <button className={styles.addBtn} onClick={onAddMode}>+</button>
                }
                <img src={closeIcon} onClick={closeSelected} alt="close"/>
            </div>
            <div className={styles.description}>
                <span>To-do list for {user.name}</span>
            </div>
            <div className={styles.todos}>
                {user.todos.sort((a, b) => (a.status === "incomplete" ? -1 : 1)).map(todo=><TodoItem key={todo.id} todo={todo} markAsDone={markAsDone} />  )}
            </div>
        </div>
    )
}
