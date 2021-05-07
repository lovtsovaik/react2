/* Components */
import { TipView, RecentTipsAside, TagsAside } from '../features/:tip-by-id';
import { Nav, Layout } from '../components';

export const TipByIdPage: React.FC = () => {
    return (
        <Layout>
            <Nav />

            <section className="tip-view-layout">
                <TipView />

                <section className="asides">
                    <RecentTipsAside />
                    <TagsAside />
                </section>
            </section>
        </Layout>
    );
};
