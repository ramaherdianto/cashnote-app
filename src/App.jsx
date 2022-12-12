import { useState } from 'react';
import './App.scss';
import MainContent from './components/MainContent';
import Report from './components/Report';

const App = () => {
    const [summary, setSummary] = useState([]);

    const tambahTransaksi = (obj) => {
        setSummary([...summary, obj]);
    };

    return (
        <div className='App'>
            <Report summary={summary} />
            <MainContent summary={summary} tambahTransaksi={tambahTransaksi} />
        </div>
    );
};

export default App;
