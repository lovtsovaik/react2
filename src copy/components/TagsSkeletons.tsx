/* Core */
import Skeleton from 'react-loading-skeleton';

export const TagsSkeletons: React.FC = () => {
    const tagSkeletons = Array.from('_'.repeat(14)).map((_, index) => {
        const dynamicWidth = Math.floor(Math.random() * 35);

        return <Skeleton key={index} width={100 + dynamicWidth} height={45} />;
    });

    return <>{tagSkeletons}</>;
};
