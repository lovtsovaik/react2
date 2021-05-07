/* Components */
import { Nav, Layout, PublishTipForm } from '../components';

export const PublishPage: React.FC = () => {
    return (
        <Layout>
            <Nav />
            <PublishTipForm />
        </Layout>
    );
};
