/* Core */
import { Link } from 'react-router-dom';

/* Instruments */
import { useTips } from '../../hooks';
import { sortByDate, formatDate, getTagIcon } from '../../helpers';

export const RecentTipsAside: React.FC = () => {
    const tips = useTips();

    const recentTipsJSX = tips.isFetched ? (
        tips.data
            ?.slice(0, 5)
            .sort(sortByDate)
            .map(tip => {
                const RecentTipTagIcon = getTagIcon(tip.tag.name);

                return (
                    <Link key={tip.id} to={`../${tip.id}`}>
                        <h3>{tip.title}</h3>
                        <time>
                            <RecentTipTagIcon /> {formatDate(tip?.created)}
                        </time>
                    </Link>
                );
            })
    ) : (
        <h1>Загрузка...</h1>
    );

    return (
        <aside className="recent-tips">
            <h1>Свежие типсы</h1>
            {recentTipsJSX}
        </aside>
    );
};
