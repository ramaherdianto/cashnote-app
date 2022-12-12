import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import MainContent from './TransactionContent';
import TransactionsCard from './TransactionsCard';

const Report = ({ summary, tambahTransaksi }) => {
    const [currentMoney, setCurrentMoney] = useState(0);
    const [currMoneyPercent, setCurrMoneyPercent] = useState(0);
    const [income, setIncome] = useState(0);
    const [incomeTransactions, setIncomeTransactions] = useState(0);
    const [expense, setExpense] = useState(0);
    const [expenseTransactions, setExpenseTransactions] = useState(0);

    useEffect(() => {
        let dataIncome = summary.filter((item) => item.kategori === 'In');
        let nominalIncome = dataIncome.map((item) => item.nominal);
        if (nominalIncome.length >= 1) {
            let sumIncome = nominalIncome?.reduce((sum, nominal) => sum + nominal);
            setIncome(sumIncome);
            setIncomeTransactions(nominalIncome.length);
        }

        let dataExpense = summary.filter((item) => item.kategori === 'Out');
        let nominalExpense = dataExpense.map((item) => item.nominal);
        if (nominalExpense.length >= 1) {
            let sumExpense = nominalExpense?.reduce((sum, nominal) => sum + nominal);
            setExpense(sumExpense);
            setExpenseTransactions(nominalExpense.length);
        }

        setCurrentMoney(income - expense);

        if (nominalIncome.length >= 1 && nominalExpense.length >= 1) {
            setCurrMoneyPercent(((income - expense) / income) * 100);
        } else if (nominalIncome.length >= 1 && nominalExpense.length < 1) {
            setCurrMoneyPercent((income / income) * 100);
        } else if (nominalExpense.length >= 1 && nominalIncome.length < 1) {
            setCurrMoneyPercent((expense / expense) * 100);
        }
    });
    return (
        <>
            <Header
                currentMoney={currentMoney}
                currMoneyPercent={currMoneyPercent}
                income={income}
                expense={expense}
            />
            <div className='curr-report flex flex-wrap justify-center gap-7 mt-5'>
                <TransactionsCard
                    text='Pemasukan'
                    total={income}
                    totalTransaction={incomeTransactions}
                    icon='ri-wallet-line text-[20px] text-[#3C3DBF]'
                    iconWrapper='icon-wrapper bg-[#E4E5FF] w-[30px] h-[30px] flex justify-center items-center rounded-md'
                    styleTotalTransaction='text-[#3C3DBF] text-xs font-semibold'
                />
                <TransactionsCard
                    text='Pengeluaran'
                    total={expense}
                    totalTransaction={expenseTransactions}
                    icon='ri-money-dollar-box-line text-[20px] text-[#FF3666]'
                    iconWrapper='icon-wrapper bg-[#FFECF0] w-[30px] h-[30px] flex justify-center items-center rounded-md'
                    styleTotalTransaction='text-[#FF3666] text-xs font-semibold'
                />
            </div>
            <MainContent
                summary={summary}
                tambahTransaksi={tambahTransaksi}
                incomeTransactions={incomeTransactions}
            />
        </>
    );
};

export default Report;
