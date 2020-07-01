import React from 'react';

const Header = ({ address, logout }) => {
    return (
        <header>
            <div>
                <img src='./gemini_logo1.png' alt='Jobcoin Logo' />
                {address}
            </div>
            <div>
                <button onClick={logout}>Sign Out</button>
            </div>
        </header>
    );
};

export default Header;
