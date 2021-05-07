/* Core */
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from './Tag';

/* Instruments */
import { TipViewMode } from '../types';
import { tagStore } from '../lib/mobx';
import { useTags } from '../hooks';

export const Hero: React.FC<HeroProps> = observer(props => {
    const tagsQuery = useTags();
    const { data: tags, isFetched } = tagsQuery;

    const tagsJSX = tags?.map(tag => {
        return (
            <Tag
                onClick={() =>
                    props.tipViewMode === 'all-topics'
                        ? null
                        : void (tagStore.selectedTagId = tag.id)
                }
                isSelected={
                    props.tipViewMode === 'all-topics'
                        ? true
                        : tag.id === tagStore.selectedTagId
                }
                key={tag.id}
                tagName={tag.name}
            />
        );
    });

    let selectedTagTitle = 'Все темы';

    if (props.tipViewMode === 'topic-by-tag') {
        selectedTagTitle =
            tags?.find(tag => tag.id === tagStore.selectedTagId)?.name ?? '';
    }

    if (!isFetched) {
        selectedTagTitle = 'Загрузка...';
    }

    return (
        <section className="hero">
            <div className="title">
                <h1>Типсы и Триксы</h1>
                <h2>{selectedTagTitle}</h2>
            </div>

            <div className="tags">
                {!isFetched ? <h1>Загрузка...</h1> : tagsJSX}
            </div>
        </section>
    );
});

/* Types */
interface HeroProps {
    tipViewMode: TipViewMode;
}
