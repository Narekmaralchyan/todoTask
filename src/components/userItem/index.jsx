
export default function UserItem({user,selectUser}){
    function handleClick (){
        selectUser(user.id)
    }
    let procent='';
    if(user.todos.length){
          procent = Math.ceil(user.todos.filter(todo=>todo.status === 'complete').length/user.todos.length * 100 | 0)
    }

    return(
        <tr onClick={handleClick}>
            <td>{user.name}</td>
            <td>{procent}</td>
        </tr> 
    )
}