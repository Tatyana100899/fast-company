import React from 'react';

const SearchStatus = ({ length }) => {
    <h1>1212</h1>
    // length = users.length;
    const renderPhrase = () => {           
        if (length===0){
            return "Никто с тобой не тусанет";
        } else if (length === 1 || (length>4 && length< 13)) {            
            return `${length} человек тусанёт с стобой сегодня`;
        } else if (length>1) {
            return `${length} человека тусанут с стобой сегодня`;
        }     
    };
    return renderPhrase();
};

export default SearchStatus;