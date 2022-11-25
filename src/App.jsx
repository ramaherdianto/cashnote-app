import { useState } from 'react';
import './App.scss';
import Modal from './components/Modal';

const App = () => {
    const [currentMoney, setCurrentMoney] = useState(550000);
    const [income, setIncome] = useState(15500000);
    const [outcome, setOutcome] = useState(2340000);
    const [listTransactions, setListTransactions] = useState([]);
    const [formInput, setFormInput] = useState({
        namaTransaksi: '',
        nominal: 0,
        tanggal: '',
        kategori: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addedTransactions = [
            {
                namaTransaksi: formInput.namaTransaksi,
                nominal: parseInt(formInput.nominal),
                tanggal: formInput.tanggal,
                kategori: formInput.kategori,
            },
        ];

        setListTransactions([formInput, addedTransactions]);
    };

    return (
        <div className='App'>
            <div className='title-apps flex justify-center flex-col items-center'>
                <h1 className='text-[40px] border-b-2 py-6 px-8 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
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

            <div className='curr-report flex flex-wrap justify-center gap-7 mt-5'>
                <div className='curr-income w-[270px] h-[150px] bg-white p-4 rounded-[14px] gap-2'>
                    <div className='icon-wrapper bg-[#E4E5FF] w-[30px] h-[30px] flex justify-center items-center rounded-md'>
                        <i className='ri-wallet-line text-[20px] text-[#3C3DBF]'></i>
                    </div>
                    <span className='text-xs text-[#A2A2A2]'>Pemasukan</span>
                    <h1 className='text-xl text-[#454545] my-1 font-semibold'>Rp. {income},-</h1>
                    <span className='text-[#3C3DBF] text-xs font-semibold'>50</span>
                    <span className='text-[#A2A2A2] text-xs ml-1'>Transaksi</span>
                </div>
                <div className='curr-outcome w-[270px] h-[150px] bg-white p-4 rounded-[14px] gap-2'>
                    <div className='icon-wrapper bg-[#FFECF0] w-[30px] h-[30px] flex justify-center items-center rounded-md'>
                        <i className='ri-money-dollar-box-line text-[20px] text-[#FF3666]'></i>
                    </div>
                    <span className='text-xs text-[#A2A2A2]'>Pengeluaran</span>
                    <h1 className='text-xl text-[#454545] my-1 font-semibold'>Rp. {outcome},-</h1>
                    <span className='text-[#FF3666] text-xs font-semibold'>50</span>
                    <span className='text-[#A2A2A2] text-xs ml-1'>Transaksi</span>
                </div>
            </div>

            <div className='transaction-list mt-[20px] flex flex-col gap-4'>
                <div className='header-transaction flex flex-wrap justify-between items-center gap-[80px]'>
                    <div className='title-transaction'>
                        <h1 className='text-[#3C3DBF] text-xl'>Ringkasan Transaksi</h1>
                    </div>
                    <div className='btn-transaction flex gap-3'>
                        <Modal.Button
                            btnId='income'
                            btnText='Pemasukan'
                            btnIcon='ri-add-circle-fill'
                        />

                        <Modal modalId='income'>
                            <h3 className='font-bold text-xl mb-3 text-[#3C3DBF]'>Pemasukan</h3>
                            <form onSubmit={handleSubmit}>
                                <Modal.Input
                                    type='text'
                                    name='namaTransaksi'
                                    value={formInput.namaTransaksi}
                                    onChange={handleChange}
                                    placeholder='Nama transaksi'
                                />
                                <Modal.Input
                                    type='number'
                                    name='nominal'
                                    value={formInput.nominal}
                                    onChange={handleChange}
                                    placeholder='Masukkan nominal'
                                />
                                <Modal.Input
                                    type='date'
                                    name='tanggal'
                                    value={formInput.tanggal}
                                    onChange={handleChange}
                                />
                                <Modal.Input
                                    type='text'
                                    name='kategori'
                                    value={formInput.kategori}
                                    onChange={handleChange}
                                />

                                <button type='submit'>submit</button>
                            </form>
                        </Modal>

                        <Modal.Button
                            btnColor='bg-[#FF3666]'
                            btnId='outcome'
                            btnText='Pengeluaran'
                            btnIcon='ri-indeterminate-circle-fill'
                        />

                        {/* <Modal modalId='outcome'>Pengeluaran</Modal> */}
                    </div>
                </div>

                <div className='all-transaction-wrapper flex flex-col gap-3'>
                    {listTransactions?.map((transaction, index) => {
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
                    })}
                </div>
            </div>

            {/* <input type='checkbox' id='income' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box bg-slate-100'>
                    <h3 className='font-bold text-lg text-[#3C3DBF]'>Pemasukan</h3>
                    <p className='py-4'>
                        You've been selected for a chance to get one year of subscription to use
                        Wikipedia for free!
                    </p>
                    <div className='modal-action'>
                        <label htmlFor='income' className='btn'>
                            Yay!
                        </label>
                    </div>
                </div>
            </div> */}

            {/* <label htmlFor='income' className='btn'>
                open modal
            </label>

            <input type='checkbox' id='income' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'>Congratulations random Internet user!</h3>
                    <p className='py-4'>
                        You've been selected for a chance to get one year of subscription to use
                        Wikipedia for free!
                    </p>
                    <div className='modal-action'>
                        <label htmlFor='income' className='btn'>
                            Yay!
                        </label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default App;
