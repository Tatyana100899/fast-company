import React, { useState } from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = (_id) => {
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
                <BookMark status={bookmark} onClick={() => {onToggleBookMark(_id)}}> </BookMark>
            </td>
            <td>
                <button 
                    key={user._id}               
                    className="btn btn-danger m-2" 
                    onClick={()=>handleDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )    
}

export default User;