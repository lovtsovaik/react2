/* Data */
import tips from '../../mock-data/tips.json';
import {TipsType} from '../../types';


/* Instruments */
import { formatDate, getTagIcon } from '../../helpers';

export const TipList: React.FC = () => {
    const tipsJSX = tips?.map((tip:TipsType) => {
        const TagIcon = getTagIcon(tip.tag.name);

        return (
            <article key={tip.id}>
                <header>
                    <TagIcon/> <h1>{tip.title}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon/>

                        <div>
                            <span>๐ {formatDate(tip.created)}</span>
                            <span>๐จ๐ผโ๐ ะะฒัะพั: {tip.author}</span>
                        </div>
                    </time>

                    <h2>{tip.title}</h2>
                    <p>{tip.preview}</p>
                </main>

                <footer>
                    <p>๐ &nbsp;ะงะธัะฐัั ะฟะพะปะฝะพัััั &rarr;</p>
                </footer>
            </article>
        );
    });

    return (
        <section className='tip-list'>
            {tipsJSX}
        </section>
    );
};
