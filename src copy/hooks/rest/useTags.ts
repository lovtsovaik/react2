/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../../api';
import { TagModel } from '../../types';

export const useTags = () => {
    const [tags, setTags] = useState<TagsState>(null);

    useEffect(() => {
        (async () => {
            const tags = await api.getTags();

            setTags(tags);
        })();
    }, []);

    const result: [TagsState, typeof setTags] = [tags, setTags];

    return result;
};

/* Types */
type TagsState = TagModel[] | null;
