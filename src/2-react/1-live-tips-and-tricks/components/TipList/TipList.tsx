/* Core */
import { observer } from 'mobx-react-lite';

/* Components */
import { Tip } from './Tip';

/* Instruments */
import { TipViewMode } from '../../types';
import { tagStore } from '../../lib/mobx';
import { useTips } from '../../hooks';

export const TipList: React.FC<TipListProps> = observer(props => {
    const tipsQuery = useTips();
    let { data: tips } = tipsQuery;

    if (props.tipViewMode === 'topic-by-tag') {
        tips = tips?.filter(tip => {
            return tip.tag.id === tagStore.selectedTagId;
        });
    }

    let tipsJSX = tips?.map(tip => {
        return <Tip key={tip.id} tip={tip} />;
    });

    return (
        <section className="tip-list">
            {!tipsQuery.isFetched ? <h1>Загрузка...</h1> : tipsJSX}
        </section>
    );
});

/* Types */
interface TipListProps {
    tipViewMode: TipViewMode;
}
