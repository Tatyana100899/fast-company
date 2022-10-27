import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import API from './api';

function App() {
    // console.log(API);
    <API/>    
    const [users, setUsers] = useState(API.fetchAll());
    const handleDelete = (userId) => {       
       setUsers(users.filter((user) => user._id !== userId));             
    };

    const handleToggleBookMark = (id) => {

    }
    return (
        <div>            
            <SearchStatus/>
            <Users />            
        </div>
    );
}

export default App;