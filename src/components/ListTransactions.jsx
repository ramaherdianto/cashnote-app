import React from 'react';

const ListTransactions = ({ summary }) => {
    return (
        <>
            <div className='all-transaction-wrapper flex flex-col gap-3'>
                {summary.length > 0 ? (
                    summary?.map((transaction, index) => {
                        return (
                            <div
                                key={index}
                                className='transaction-item flex items-center justify-between'
                            >
                                <div className='transaction-detail flex gap-2 items-center'>
                                    <div
                                        className={`${
                                            transaction.kategori === 'In'
                                                ? 'bg-[#E4E5FF]'
                                                : 'bg-[#FFECF0]'
                                        } transaction-icon bg-[#E4E5FF] py-1 px-3 flex justify-center items-center rounded-md`}
                                    >
                                        <i
                                            className={
                                                transaction.kategori === 'In'
                                                    ? 'ri-wallet-line text-[22px] text-[#3C3DBF]'
                                                    : 'ri-shopping-bag-line text-[22px] text-[#FF3666]'
                                            }
                                        ></i>
                                    </div>
                                    <div className='transaction-desc'>
                                        <h3 className='text-sm'>{transaction.namaTransaksi}</h3>
                                        <span className='text-[#A2A2A2] text-xs'>
                                            {transaction.tanggal}
                                        </span>
                                    </div>
                                </div>
                                <div className='transaction-money'>
                                    <h3
                                        className={`text-sm font-semibold ${
                                            transaction.kategori === 'In'
                                                ? 'text-[#3C3DBF]'
                                                : 'text-[#FF3666]'
                                        }`}
                                    >
                                        Rp. {transaction.nominal},-
                                    </h3>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className='flex justify-center text-[#A1A1A1] text-[13px] items-center mt-10'>
                        Tidak ada transaksi
                    </div>
                )}
            </div>
        </>
    );
};

export default ListTransactions;
