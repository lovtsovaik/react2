/* Core */
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { TipModel } from '../types';

// import tips from '../mock-data/tips.json';

export const useTips = () => {
    const result = useQuery<TipModel[]>('/tips', api.getTips);

    // result.data = tips;

    return result;
};
