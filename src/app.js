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
        
        setUsers((prevState) => {            
            return prevState.map((user) => {
              if (user._id === userId) {
              return {...user, bookmark: user.bookmark = !user.bookmark};
            }              
                return user
            })
          })
}  

    return (
        <div>       
            <Users users={users} onDelete={handleDelete} onToggle={handleToggleBookMark}/>            
        </div>
    );
}

export default App;