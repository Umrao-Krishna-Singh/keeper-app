import React from 'react';

function Footer(){
    const fullDate = new Date();
    const date = fullDate.getFullYear();
    return(
        <footer><p>© {date}</p></footer>
    );
};

export default Footer