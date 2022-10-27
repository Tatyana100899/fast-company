import React, { useState } from 'react';
import SearchStatus from './searchStatus';
import User from './user';

const Users = ({users, ...rest}) => {   
    return (
        <>
        <User />
        <h3><span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>{<SearchStatus/>}</span></h3>
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
                    <User {...rest} {...user} key={user._id}/>
                })}                
            </tbody>
        </table>
        ) : null}   
    </>
 );
}

export default Users;