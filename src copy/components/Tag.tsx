/* Instruments */
import { getTagIcon } from '../helpers';

export const Tag: React.FC<TagProps> = props => {
    const TagIcon = getTagIcon(props.tagName);

    return (
        <span
            className="tag"
            data-active={props.isSelected}
            onClick={props.onClick}>
            <TagIcon />
            {props.tagName}
        </span>
    );
};

/* Types */
interface TagProps {
    onClick: () => null | void;
    isSelected: boolean;
    tagName: string;
}
