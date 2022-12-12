import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import TransactionsCard from './TransactionsCard';

const Report = ({ summary }) => {
    const [currentMoney, setCurrentMoney] = useState(0);
    const [currMoneyPercent, setCurrMoneyPercent] = useState(0);
    const [income, setIncome] = useState(0);
    const [incomeTransactions, setIncomeTransactions] = useState(0);
    const [outcome, setOutcome] = useState(0);
    const [outcomeTransactions, setOutcomeTransactions] = useState(0);

    useEffect(() => {
        let dataIncome = summary.filter((item) => item.kategori === 'In');
        let nominalIncome = dataIncome.map((item) => item.nominal);
        if (nominalIncome.length >= 1) {
            let sumIncome = nominalIncome?.reduce((sum, nominal) => sum + nominal);
            setIncome(sumIncome);
            setIncomeTransactions(nominalIncome.length);
        }

        let dataOutcome = summary.filter((item) => item.kategori === 'Out');
        let nominalOutcome = dataOutcome.map((item) => item.nominal);
        if (nominalOutcome.length >= 1) {
            let sumOutcome = nominalOutcome?.reduce((sum, nominal) => sum + nominal);
            setOutcome(sumOutcome);
            setOutcomeTransactions(nominalOutcome.length);
        }

        setCurrentMoney(income - outcome);

        if (nominalIncome.length >= 1 && nominalOutcome.length >= 1) {
            setCurrMoneyPercent(((income - outcome) / income) * 100);
        } else if (nominalIncome.length >= 1 && nominalOutcome.length < 1) {
            setCurrMoneyPercent((income / income) * 100);
        } else if (nominalOutcome.length >= 1 && nominalIncome.length < 1) {
            setCurrMoneyPercent((outcome / outcome) * 100);
        }
    });
    return (
        <>
            <Header currentMoney={currentMoney} currMoneyPercent={currMoneyPercent} />
            <div className='curr-report flex flex-wrap justify-center gap-7 mt-5'>
                <TransactionsCard
                    text='Pemasukan'
                    total={income}
                    transactions={incomeTransactions}
                    icon='ri-wallet-line text-[20px] text-[#3C3DBF]'
                    iconWrapper='icon-wrapper bg-[#E4E5FF] w-[30px] h-[30px] flex justify-center items-center rounded-md'
                    styleTotalTransaction='text-[#3C3DBF] text-xs font-semibold'
                />
                <TransactionsCard
                    text='Pengeluaran'
                    total={outcome}
                    transactions={outcomeTransactions}
                    icon='ri-money-dollar-box-line text-[20px] text-[#FF3666]'
                    iconWrapper='icon-wrapper bg-[#FFECF0] w-[30px] h-[30px] flex justify-center items-center rounded-md'
                    styleTotalTransaction='text-[#FF3666] text-xs font-semibold'
                />
            </div>
        </>
    );
};

export default Report;
