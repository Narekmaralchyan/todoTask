import styles from './index.module.scss'
import pendingIcon from './../../assets/pendingIcon.svg'
import doneIcon from './../../assets/doneIcon.svg'
export default function TodoItem({todo,markAsDone}){
    function handleClick (){
        markAsDone(todo.id)
    }

    return(
        <div className={styles.todoItem}>
            <div className={styles.info}>
                <div className={styles.status}>
                    <img src={todo.status==="complete" ? doneIcon : pendingIcon} alt="status"/>
                    <span>{todo.status==="complete" ? "Completed" : "Pending"}</span>
                </div>
                <div className={styles.title}>
                    {todo.title}
                </div>
            </div>
            <button className={styles.markBtn} disabled={todo.status==="complete"} onClick={handleClick}>Mark as done</button>
        </div>
    )
}