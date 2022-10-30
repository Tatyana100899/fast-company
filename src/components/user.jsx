import React, { useState } from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({_id, name, qualities, profession, completedMeetings, rate, bookmark, onToggle, onDelete}) => {
    
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
                <button key={_id}
                onClick={()=>onToggle(_id)}>
                    <BookMark bookmark={bookmark}/>
                </button>                
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