/* Core */
import { Link } from 'react-router-dom';

/* Instruments */
import { TipModel } from '../../types';
import { formatDate, getTagIcon } from '../../helpers';

export const Tip: React.FC<TipProps> = props => {
    const TagIcon = getTagIcon(props.tip.tag.name);

    return (
        <article>
            <header>
                <TagIcon /> <h1>{props.tip.title}</h1>
            </header>

            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>🚀 {formatDate(props.tip.created)}</span>
                        <span>👨🏼‍🚀 Автор: {props.tip.author}</span>
                    </div>
                </time>

                <h2>{props.tip.title}</h2>
                <p>{props.tip.preview}</p>
            </main>

            <footer>
                <Link to={props.tip.id}>📖 &nbsp;Читать полностью &rarr;</Link>
            </footer>
        </article>
    );
};

/* Types */
interface TipProps {
    tip: TipModel;
}
