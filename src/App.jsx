import { useState } from 'react';
import './App.scss';

const App = () => {
    const [currentMoney, setCurrentMoney] = useState(550000);
    const [income, setIncome] = useState(15500000);
    const [outcome, setOutcome] = useState(2340000);
    const transactions = [
        {
            name: 'Menerima Gaji',
            date: '2 Desember 2022',
            money: 1500000,
            category: 'In',
        },
        {
            name: 'Membeli Nasi Padang',
            date: '17 Desember 2022',
            money: 15000,
            category: 'Out',
        },
    ];

    return (
        <div className='App'>
            <div className='title-apps flex justify-center flex-col items-center'>
                <h1 className='text-[40px] border-b-2 py-6 px-8 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2998FF] to-[#3C3DBF]'>
                    CashNote Apps
                </h1>
                <div className='curr-money mt-6 flex flex-col items-center gap-2'>
                    <h1 className='text-[32px] font-semibold text-[#454545]'>
                        Rp. {currentMoney},-
                    </h1>
                    <span className='text-[#A1A1A1] text-[13px]'>
                        Sisa uang kamu tersisa 75% lagi
                    </span>
                </div>
            </div>

            <div className='curr-report flex gap-7 mt-5'>
                <div className='curr-income w-[270px] h-[150px] bg-white p-4 rounded-[14px] gap-2'>
                    <div className='icon-wrapper bg-[#E4E5FF] w-[30px] h-[30px] flex justify-center items-center rounded-md'>
                        <i class='ri-wallet-line text-[20px] text-[#3C3DBF]'></i>
                    </div>
                    <span className='text-xs text-[#A2A2A2]'>Pemasukan</span>
                    <h1 className='text-xl text-[#454545] my-1 font-semibold'>Rp. {income},-</h1>
                    <span className='text-[#3C3DBF] text-xs font-semibold'>50</span>
                    <span className='text-[#A2A2A2] text-xs ml-1'>Transaksi</span>
                </div>
                <div className='curr-outcome w-[270px] h-[150px] bg-white p-4 rounded-[14px] gap-2'>
                    <div className='icon-wrapper bg-[#FFECF0] w-[30px] h-[30px] flex justify-center items-center rounded-md'>
                        <i class='ri-money-dollar-box-line text-[20px] text-[#FF3666]'></i>
                    </div>
                    <span className='text-xs text-[#A2A2A2]'>Pengeluaran</span>
                    <h1 className='text-xl text-[#454545] my-1 font-semibold'>Rp. {outcome},-</h1>
                    <span className='text-[#FF3666] text-xs font-semibold'>50</span>
                    <span className='text-[#A2A2A2] text-xs ml-1'>Transaksi</span>
                </div>
            </div>

            <div className='transaction-list mt-[20px] flex flex-col gap-4'>
                <div className='header-transaction flex justify-between items-center gap-[80px]'>
                    <div className='title-transaction'>
                        <h1 className='text-[#3C3DBF] text-xl'>Ringkasan Transaksi</h1>
                    </div>
                    <div className='btn-transaction flex gap-3'>
                        <button className='bg-[#3C3DBF] flex items-center gap-2 py-2 px-[10px] rounded-lg text-white'>
                            <span className='text-sm'>Pemasukan</span>{' '}
                            <i class='ri-add-circle-fill'></i>
                        </button>
                        <button className='bg-[#FF3666] flex items-center gap-2 py-2 px-[10px] rounded-lg text-white'>
                            <span className='text-sm'>Pengeluaran</span>{' '}
                            <i class='ri-indeterminate-circle-fill'></i>
                        </button>
                    </div>
                </div>

                <div className='all-transaction-wrapper flex flex-col gap-3'>
                    {transactions?.map((transaction, index) => {
                        return (
                            <div
                                key={index}
                                className='transaction-item flex items-center justify-between'
                            >
                                <div className='transaction-detail flex gap-2 items-center'>
                                    <div
                                        className={`${
                                            transaction.category === 'In'
                                                ? 'bg-[#E4E5FF]'
                                                : 'bg-[#FFECF0]'
                                        } transaction-icon bg-[#E4E5FF] py-1 px-3 flex justify-center items-center rounded-md`}
                                    >
                                        <i
                                            class={
                                                transaction.category === 'In'
                                                    ? 'ri-wallet-line text-[22px] text-[#3C3DBF]'
                                                    : 'ri-shopping-bag-line text-[22px] text-[#FF3666]'
                                            }
                                        ></i>
                                    </div>
                                    <div className='transaction-desc'>
                                        <h3 className='text-sm'>{transaction.name}</h3>
                                        <span className='text-[#A2A2A2] text-xs'>
                                            {transaction.date}
                                        </span>
                                    </div>
                                </div>
                                <div className='transaction-money'>
                                    <h3
                                        className={`text-sm font-semibold ${
                                            transaction.category === 'In'
                                                ? 'text-[#3C3DBF]'
                                                : 'text-[#FF3666]'
                                        }`}
                                    >
                                        Rp. {transaction.money},-
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
