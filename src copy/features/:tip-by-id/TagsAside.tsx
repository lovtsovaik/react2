/* Core */
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { Tag } from '../../components';

/* Instruments */
import { tagStore } from '../../lib/mobx';
import { useTags } from '../../hooks';

export const TagsAside: React.FC = observer(() => {
    const { data: tags, isFetched } = useTags();

    const tagsJSX = isFetched ? (
        tags?.map(tag => {
            return (
                <Link to="/topic-by-tag" key={tag.id}>
                    <Tag
                        onClick={() => void (tagStore.selectedTagId = tag.id)}
                        isSelected={false}
                        key={tag.id}
                        tagName={tag.name}
                    />
                </Link>
            );
        })
    ) : (
        <h1>Загрузка...</h1>
    );

    return (
        <aside className="tags-aside">
            <h1>Тэги</h1>
            <div>{tagsJSX}</div>
        </aside>
    );
});
