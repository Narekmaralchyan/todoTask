import {useEffect, useState} from 'react'
import SelectedUser from '../selectedUser'
import UserItem from '../userItem'
import styles from './index.module.scss'
import {getUsers, addTodo, markDone} from "../../utils";


export default function TodoApp() {

    const [state, setState] = useState(null )
    const [selected,setSelectedUser] = useState(null)

    useEffect(()=>{
        getUsers().
            then(users=>{
                setState(users)
        })
    },[])

    function add(description){
        addTodo(selected,description)
            .then(newTodo=>{
                setState(state.map(user=>{
                    if(user.id===selected){
                        user.todos = [ newTodo,...user.todos]
                    }
                    return user
                }))
            })

    }
    function markAsDone(todoId){
        markDone(selected,todoId)
            .then(()=>{
                setState(state.map(user=>{
                    if(user.id===selected){
                        user.todos = user.todos.map(todo=>{
                            if(todo.id===todoId){
                                todo.status= "complete";
                            }
                            return todo;
                        })
                    }
                    return user;
                }))
            })

    }
    function selectUser(id){
        setSelectedUser(id)
    }
    function closeSelected(){
        setSelectedUser(null)
    }

    return (
        <div className={styles.todoApp}>
            { state ? <table>
               <tbody>
               <tr>
                   <th>Name</th>
                   <th>Completion rate (%)</th>
               </tr>
               {state.map(user => <UserItem key={user.id} user={user} selectUser={selectUser} />)}
               </tbody>
            </table> : <div className={styles.loading}>LOADING...</div> }
            { selected != null &&  <SelectedUser user={state.find(user=>user.id === selected)} closeSelected={closeSelected} markAsDone={markAsDone} addTodo={add}/> }
        </div>
    )
}