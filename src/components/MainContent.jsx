import React from 'react';
import ListTransactions from './ListTransactions';
import Modal from './Modal';

const MainContent = ({ tambahTransaksi, summary }) => {
    return (
        <>
            <div className='transaction-list mt-[20px] flex flex-col gap-4'>
                <div className='header-transaction flex flex-wrap justify-between items-center gap-[80px]'>
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
                        <Modal
                            kategori='Out'
                            tambahTransaksi={tambahTransaksi}
                            btnColor='bg-[#FF3666]'
                            btnText='Pengeluaran'
                            btnIcon='ri-indeterminate-circle-fill'
                        />
                    </div>
                </div>

                <ListTransactions summary={summary} />
            </div>
        </>
    );
};

export default MainContent;
