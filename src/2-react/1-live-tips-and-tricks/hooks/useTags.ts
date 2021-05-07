/* Core */
import { useEffect } from 'react';
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { TagModel } from '../types';
import { tagStore } from '../lib/mobx';

// import tags from '../mock-data/tags.json';

export const useTags = () => {
    const query = useQuery<TagModel[]>('/tags', api.getTags);

    useEffect(() => {
        if (tagStore.selectedTagId === null && query.data?.length) {
            tagStore.selectedTagId = query.data[0].id;
        }
    }, [query.data]);

    // @ts-ignore
    // query.data = tags;

    return query;
};
