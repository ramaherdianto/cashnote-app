import { useState } from 'react';

const Modal = (props) => {
    const { children, modalId } = props;

    return (
        <>
            <input type='checkbox' id={modalId} className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box bg-slate-100'>
                    {children}
                    <div className='modal-action'>
                        <label
                            htmlFor={modalId}
                            className='btn bg-red-500 border-none text-slate-100'
                        >
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

const Button = (props) => {
    const { btnColor = 'bg-[#3C3DBF]', btnId, btnText, btnIcon } = props;
    return (
        <>
            <label
                htmlFor={btnId}
                className={`btn__modal cursor-pointer ${btnColor}  flex items-center gap-2 py-2 px-[10px] rounded-lg text-white`}
            >
                <span className='text-sm'>{btnText}</span> <i className={btnIcon}></i>
            </label>
        </>
    );
};

const Input = (props) => {
    return (
        <>
            <input {...props} className='input w-full max-w-xs my-2 bg-white text-slate-700' />
        </>
    );
};

Modal.Button = Button;
Modal.Input = Input;

export default Modal;
