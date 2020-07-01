import React from 'react';

import Balance from './Balance';
import Header from './Header';
import Transfer from './Transfer';
import HistoryGraph from './HistoryGraph';

class Dashboard extends React.Component {
    componentDidMount() {
        const { fetchData } = this.props;
        fetchData();
    }

    getPrecisionSum(num1, num2) {
        return ((num1 * 100 + num2 * 100) / 100).toFixed(2);
    }

    getBalanceHistory() {
        const { address, transactions } = this.props;
        let original = 0.0;

        return transactions.map((transaction) => {
            let newBalance;
            const { timestamp, toAddress, fromAddress, amount } = transaction;
            if (toAddress === address) {
                newBalance = this.getPrecisionSum(original, parseFloat(amount));
            } else {
                newBalance = this.getPrecisionSum(original, -parseFloat(amount));
            }
            original = newBalance;
            return {
                timestamp,
                toAddress,
                fromAddress,
                amount,
                balance: newBalance,
            };
        });
    }

    render() {
        const { address, balance, logout, sendAmount } = this.props;
        const balanceHistory = this.getBalanceHistory();
        return (
            <section className='dashboard-main'>
                <Header address={address} logout={logout} />
                <div className='dashboard-details'>
                    <div className='dashboard-widgets'>
                        <Balance balance={balance} />
                        <Transfer balance={balance} sendAmount={sendAmount} />
                    </div>
                    <div className='dashboard-history-chart'>
                        <header>
                            <h3>Jobcoin History Graph</h3>
                        </header>
                        <HistoryGraph address={address} history={balanceHistory} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
