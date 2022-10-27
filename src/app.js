import React, { useState } from 'react';
import Users from './components/users';
// import SearchStatus from './components/searchStatus';
import API from './api';

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {       
       setUsers(users.filter((user) => user._id !== userId));             
    };

    const handleToggleBookMark = (id) => {

    }
    return (
        <div>       
            <Users users={users}/>            
        </div>
    );
}

export default App;