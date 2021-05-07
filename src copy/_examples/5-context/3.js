/* Core */
import { createContext, useState, useContext } from 'react';
import { render } from 'react-dom';

const Context = createContext();

const Library = () => {
    const [title] = useState('Harry Potter');
    const [page, setPage] = useState(489);

    const _goPrevPage = () => setPage(prevPage => prevPage - 1);
    const _goNextPage = () => setPage(prevPage => prevPage + 1);

    return (
        <Context.Provider
            value={{
                title,
                page,
                _goNextPage,
                _goPrevPage,
            }}>
            <Room />
        </Context.Provider>
    );
};

const Room = () => {
    return <Bookshelf />;
};

const Bookshelf = () => {
    return <Book />;
};

const Book = () => {
    return <Page />;
};

const Page = () => {
    const context = useContext(Context);

    return (
        <>
            <h1>{context.title}</h1>
            <p>
                Page: <code>{context.page}</code>
            </p>
            <button onClick={context._goPrevPage}>← Previous page</button>
            <button onClick={context._goNextPage}>Next page →</button>
        </>
    );
};

render(<Library />, document.getElementById('root'));
