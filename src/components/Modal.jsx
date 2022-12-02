import { useState } from 'react';

const Modal = (props) => {
    const { btnColor = 'bg-[#3C3DBF]', btnText, btnIcon } = props;

    const [open, setOpen] = useState(false);
    const [formInput, setFormInput] = useState({
        namaTransaksi: '',
        nominal: 0,
        tanggal: '',
        kategori: '',
    });

    const handleOpen = () => {
        setOpen(true);
        formInput['kategori'] = props.kategori;
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addedTransactions = {
            namaTransaksi: formInput.namaTransaksi,
            nominal: parseInt(formInput.nominal),
            tanggal: formInput.tanggal,
            kategori: formInput.kategori,
        };
        props.tambahTransaksi(addedTransactions);
        formInput['namaTransaksi'] = '';
        formInput['nominal'] = 0;
        formInput['tanggal'] = '';
        handleClose();
    };

    return (
        <>
            <button
                onClick={handleOpen}
                className={`${btnColor} btn__modal border-none flex items-center gap-2 py-2 px-[10px] rounded-lg text-slate-100`}
            >
                <span className='text-sm'>{btnText}</span> <i className={btnIcon}></i>
            </button>
            {open ? (
                <div className='bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   '>
                    <div className='flex h-screen justify-center items-center '>
                        <form onSubmit={handleSubmit}>
                            <div
                                id='modal'
                                className='flex-col opacity-100 justify-center  bg-white py-12 px-24 border-[3px] border-slate-300 rounded-xl '
                            >
                                <div className='flex justify-center items-center'>
                                    <h1
                                        className={`font-bold text-xl mb-3 ${
                                            formInput.kategori === 'In'
                                                ? 'text-[#3C3DBF]'
                                                : 'text-[#FF3666]'
                                        }`}
                                    >
                                        {formInput.kategori === 'In' ? 'Pemasukan' : 'Pengeluaran'}
                                    </h1>
                                </div>
                                <div className='flex flex-col text-lg  text-zinc-600   mb-10'>
                                    <input
                                        type='text'
                                        name='namaTransaksi'
                                        value={formInput.namaTransaksi}
                                        onChange={handleChange}
                                        placeholder='Nama transaksi'
                                        className='input border-2 border-slate-300 w-full max-w-xs my-2 bg-white text-slate-700'
                                    />
                                    <input
                                        type='number'
                                        name='nominal'
                                        value={formInput.nominal}
                                        onChange={handleChange}
                                        className='input border-2 border-slate-300 w-full max-w-xs my-2 bg-white text-slate-700'
                                    />
                                    <input
                                        type='date'
                                        name='tanggal'
                                        value={formInput.tanggal}
                                        onChange={handleChange}
                                        className='input border-2 border-slate-300 w-full max-w-xs my-2 bg-white text-slate-700'
                                    />
                                    <input
                                        type='hidden'
                                        name='kategori'
                                        value={formInput.kategori}
                                        onChange={handleChange}
                                        className='input border-2 border-slate-300 w-full max-w-xs my-2 bg-white text-slate-700'
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        type='submit'
                                        className='rounded px-4 py-2 text-white  bg-[#3C3DBF] '
                                    >
                                        Submit
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className='rounded px-4 py-2 ml-4 text-white bg-red-500 '
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
