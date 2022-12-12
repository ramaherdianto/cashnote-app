import React from 'react';

const TransactionsCard = ({
    iconWrapper,
    icon,
    text,
    total,
    styleTotalTransaction,
    totalTransaction,
}) => {
    return (
        <>
            <div className='curr-income w-[270px] h-[150px] bg-white p-4 rounded-[14px] gap-2'>
                <div className={iconWrapper}>
                    <i className={icon}></i>
                </div>
                <span className='text-xs text-[#A2A2A2]'>{text}</span>
                <h1 className='text-xl text-[#454545] my-1 font-semibold'>Rp. {total},-</h1>
                <span className={styleTotalTransaction}>{totalTransaction}</span>
                <span className='text-[#A2A2A2] text-xs ml-1'>Transaksi</span>
            </div>
        </>
    );
};

export default TransactionsCard;
