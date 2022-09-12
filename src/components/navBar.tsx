import React, { useState } from 'react'

interface Prop2 {
    setPage?: any;
}

const Navbar: React.FC <Prop2> = ({setPage}) => {
    return(
        <nav>
        <button onClick={() => setPage('name') } >Name</button>
        <button onClick={() => setPage('abilities') } >Abilities</button>
        </nav>
        
        );
}

export default Navbar;