import React from 'react';
import { useState } from 'react';
import ListTransactions from './ListTransactions';
import Modal from './Modal';

const TransactionContent = ({ tambahTransaksi, summary, incomeTransactions }) => {
    const [isIncomeNull, setIsIncomeNull] = useState(false);

    const handleOpenAlert = () => {
        setIsIncomeNull(true);
    };

    const handleCloseAlert = () => {
        setIsIncomeNull(false);
    };

    return (
        <>
            <div className='transaction-list mt-[20px] flex flex-col gap-4'>
                <div
                    className={`header-transaction flex flex-wrap justify-between items-center gap-[80px]`}
                >
                    <div className='title-transaction'>
                        <h1 className='text-[#3C3DBF] text-xl'>Ringkasan Transaksi</h1>
                    </div>
                    <div className='btn-transaction flex gap-3'>
                        <Modal
                            kategori='In'
                            tambahTransaksi={tambahTransaksi}
                            btnText='Pemasukan'
                            btnIcon='ri-add-circle-fill'
                        />
                        {incomeTransactions > 0 ? (
                            <Modal
                                kategori='Out'
                                tambahTransaksi={tambahTransaksi}
                                btnColor={`bg-[#FF3666]`}
                                btnText='Pengeluaran'
                                btnIcon='ri-indeterminate-circle-fill'
                            />
                        ) : (
                            <button
                                onClick={handleOpenAlert}
                                className={`bg-[#FF3666] btn__modal border-none flex items-center gap-2 py-2 px-[10px] rounded-lg text-slate-100 opacity-50`}
                            >
                                <span className='text-sm'>Pengeluaran</span>{' '}
                                <i className='ri-indeterminate-circle-fill'></i>
                            </button>
                        )}
                        {isIncomeNull ? (
                            <div className='bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   '>
                                <div className='flex h-screen justify-center items-center '>
                                    <div
                                        id='modal'
                                        className='flex-col opacity-100 justify-center  bg-white py-12 px-24 border-[3px] border-slate-300 rounded-xl '
                                    >
                                        <div className='flex justify-center items-center mb-6'>
                                            <h1
                                                className={`font-bold text-center text-2xl 
                                        text-[#FF3666]`}
                                            >
                                                Oops!
                                            </h1>
                                        </div>
                                        <div className='flex justify-center items-center text-lg  text-zinc-600   mb-10'>
                                            <p
                                                className={`text-base mb-3
                                                text-[#A1A1A1] text-center whitespace-pre-wrap`}
                                            >
                                                Kamu belum bisa melakukan transaksi pengeluaran,
                                                <br />
                                                silahkan melakukan transaksi pemasukan terlebih
                                                dahulu!
                                            </p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button
                                                onClick={handleCloseAlert}
                                                className='rounded px-4 py-2 ml-4 text-white bg-red-500 '
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <ListTransactions summary={summary} />
            </div>
        </>
    );
};

export default TransactionContent;
