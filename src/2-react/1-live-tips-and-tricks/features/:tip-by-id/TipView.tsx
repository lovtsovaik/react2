/* Core */
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* Instruments */
import { useTipById } from '../../hooks';
import { formatDate, getTagIcon, fetchify } from '../../helpers';

export const TipView: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data: tipToView, isFetchedAfterMount, isFetched } = useTipById(
        params.id,
    );

    useEffect(() => {
        if (!tipToView && isFetchedAfterMount) {
            navigate('..', { replace: true });
        }
    }, [tipToView, isFetchedAfterMount]);

    const TagIcon = getTagIcon(tipToView?.tag.name);

    return (
        <>
            <article>
                <header>
                    <TagIcon /> <h1>{fetchify(isFetched, tipToView?.title)}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon />
                        <div>
                            <span>
                                🚀{' '}
                                {fetchify(
                                    isFetched,
                                    formatDate(tipToView?.created),
                                )}
                            </span>
                            <span>
                                👨🏼‍🚀 Автор:{' '}
                                {fetchify(isFetched, tipToView?.author)}
                            </span>
                        </div>
                    </time>
                </main>

                <footer>
                    <a onClick={() => navigate('..')}>&larr;&nbsp;Назад</a>
                </footer>
            </article>

            <main>{fetchify(isFetched, tipToView?.body)}</main>
        </>
    );
};
