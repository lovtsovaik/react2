/* Core */
import { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(count);

    const increment = () => {
        setCount(count + 1);
    };

    setTimeout(() => {
        increment();
    }, 1000);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment +</button>
        </>
    );
};

render(<Counter />, document.getElementById('root'));
