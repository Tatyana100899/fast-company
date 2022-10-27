import React, { useState } from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete}) => {
    
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{qualities.map((qual) =>(
                <Qualitie {...qual}/>
            ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>                
            <td>
                <BookMark />
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