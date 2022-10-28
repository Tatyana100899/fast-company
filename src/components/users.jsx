import React, { useState } from 'react';
import SearchStatus from './searchStatus';
import User from './user';

const Users = ({users, onDelete, onToggle}) => {  
    
    return (
        <>        
        <h3><span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}><SearchStatus length={users.length}/></span></h3>
           {users.length ? (
            <table className="table">           
            <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                    <User onToggle={onToggle} onDelete={onDelete} key={user._id} {...user}/>)}                
            </tbody>
        </table>
        ) : null}   
    </>
 );
}

export default Users;