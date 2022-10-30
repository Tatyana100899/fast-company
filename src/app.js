import React, { useState } from 'react';
import Users from './components/users';
import API from './api';

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    // console.log(users);
    const handleDelete = (userId) => {       
       setUsers(users.filter((user) => user._id !== userId));             
    };

    const handleToggleBookMark = (userId) => {
        let elem = users.find((user) => user._id == userId);
    //     // setUsers(users.filter((user) => user._id !== userId));
        elem.bookmark = true;
        console.log(elem.bookmark );
        console.log(users);
    };   

    return (
        <div>       
            <Users users={users} onDelete={handleDelete} onToggle={handleToggleBookMark}/>            
        </div>
    );
}

export default App;