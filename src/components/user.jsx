import React, { useState } from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({_id, name, qualities, profession, completedMeetings, rate, onToggle, onDelete}) => {
    // console.log(onToggle); 
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{qualities.map((qual) =>(
                <Qualitie key={qual._id} {...qual}/>
            ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>                
            <td>
                <BookMark onClick={onToggle}/>
            </td>
            <td>
                <button 
                    key={_id}               
                    className="btn btn-danger m-2" 
                    onClick={()=>onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )    
}

export default User;