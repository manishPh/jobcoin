import React from 'react';

const Balance = ({ balance }) => {
    return (
        <section className='jobcoin-balance widget'>
            <header>
                <h3>Jobcoin Balance</h3>
            </header>
            <div className='balance-amount'>{balance}</div>
        </section>
    );
};

export default Balance;
