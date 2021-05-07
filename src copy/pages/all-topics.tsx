/* Components */
import { Nav, Layout, Hero, TipList } from '../components';

export const AllTopicsPage: React.FC = () => {
    return (
        <Layout>
            <Nav />

            <Hero tipViewMode="all-topics" />
            <TipList tipViewMode="all-topics" />
        </Layout>
    );
};
