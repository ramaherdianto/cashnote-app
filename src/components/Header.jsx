import React from 'react';

const Header = ({ currentMoney, currMoneyPercent }) => {
    return (
        <>
            <div className='title-apps flex justify-center flex-col items-center'>
                <h1 className='text-[40px] text-center border-b-2 py-6 px-8 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    CashNote Apps
                </h1>
                <div className='curr-money mt-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[32px] font-semibold text-[#454545]'>
                        Rp. {currentMoney},-
                    </h1>
                    <span className='text-[#A1A1A1] text-[13px]'>
                        Uang kamu tersisa {currMoneyPercent.toFixed(0)}% lagi
                    </span>
                </div>
            </div>
        </>
    );
};

export default Header;
