/* Components */
import { Nav, Hero, MyTipList } from '../components';

export const HomePage = () => {
    return (
        <section className='layout'>
            <Nav />
            <Hero />
            <MyTipList />
        </section>
    );
};

HomePage.displayName = 'MyHomePage';
