/* Components */
import { Nav, Layout, Hero, TipList } from '../components';

export const TopicByTagPage: React.FC = () => {
    return (
        <Layout>
            <Nav />

            <Hero tipViewMode="topic-by-tag" />
            <TipList tipViewMode="topic-by-tag" />
        </Layout>
    );
};
