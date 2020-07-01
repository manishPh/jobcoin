import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HistoryGraph = ({ address, history }) => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload[0]) {
            const value = payload[0].value;
            const tr = payload[0].payload;
            const { amount, fromAddress, toAddress } = tr;
            let desc;
            if (address === toAddress) {
                if (fromAddress) {
                    desc = `Received $${amount} from ${fromAddress}`;
                } else {
                    desc = `$${amount} Jobcoins created`;
                }
            } else {
                desc = `Sent $${amount} to ${toAddress}`;
            }
            return (
                <div className='custom-tooltip'>
                    <p className='desc'>{`Balance: $${value}`}</p>
                    <p className='desc'>{desc}</p>
                </div>
            );
        }

        return null;
    };

    const tooltipStyle = {
        padding: '8px',
        backgroundColor: '#d6c8c8',
        color: '#000',
    };

    return (
        <LineChart
            width={900}
            height={700}
            data={history}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis label='Transactions' />
            <YAxis label='$$' />
            <Tooltip content={<CustomTooltip />} wrapperStyle={tooltipStyle} active={true} />
            <Line name='Jobcoin History Graph' type='monotone' dataKey='balance' stroke='#82ca9d' />
            <Legend />
        </LineChart>
    );
};

export default HistoryGraph;
