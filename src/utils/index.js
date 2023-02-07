import { v4 as uuid } from 'uuid';
import {ref, get,set } from 'firebase/database';
import {db} from "../firebase/config";

async function getUsers(){
    let snapshot = await get(ref(db,'users'))
    let users = snapshot.val();
    users = users.map(user=>{
        if( !user.todos ){
            user.todos =  []
        }
        return user;
    })

    return users;
}

async function addTodo (userId,description){
    let id = uuid()
    let newTodo= {
        id:id,
        title:description,
        status:'incomplete'
    }
    let snapshot = await  get(ref(db,`users/${userId}/todos`))

    await set(ref(db,`users/${userId}/todos`),[newTodo,...snapshot.val() || []]);

    return newTodo;
};
async function markDone(userId,todoId){
    let snapshot = await  get(ref(db,`users/${userId}/todos`))
    let todos = snapshot.val()
    todos = todos.map(todo=>{
        if(todo.id===todoId){
            todo.status = 'complete';
        }
        return todo;
    })
    await set(ref(db,`users/${userId}/todos`),todos);
}
export {getUsers,addTodo,markDone}