import React, { useState } from 'react'
import api from "../api"

const Users = () => {
    console.log(api.users.fetchAll());
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {       
       setUsers(users.filter((user) => user._id !== userId));             
    };
    
    const renderPhrase = () => {
        const number = users.length;  
        // console.log(users);
        if (number===0){   

            return "Никто с тобой не тусанет";
        } else if (number === 1 || (number>4 && number< 13)) {            
            return `${number} человек тусанёт с стобой сегодня`;
        } else if (number>1) {
            return `${number} человека тусанут с стобой сегодня`;
        }     
    };
    
    return (
        <>
        <span className="badge bg-primary m-1">{renderPhrase()}</span>
           {users.length ? (
            <table className="table">           
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                    <tr key={user._id} className="table">
                        <td>{user.name}</td>
                        <td>{user.qualities.map(user =><span key={user._id} className={"badge m-1 bg-"+user.color}>{user.name}</span>)}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>                
                        <td><button 
                                key={user._id}               
                                className="btn btn-danger m-2" 
                                onClick={()=>handleDelete(user._id)}
                            >
                                delete
                        </button></td> 
                    </tr> 
                )})}                
            </tbody>
        </table>
        ) : null}   
    </>
 );
}

export default Users;