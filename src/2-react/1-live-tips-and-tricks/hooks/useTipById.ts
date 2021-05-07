/* Core */
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { TipModel } from '../types';

// import tips from '../mock-data/tips.json';

export const useTipById = (id: string) => {
    const query = useQuery<TipModel>(['/tips', id], () => api.getTipById(id));

    // result.data = tips;

    return query;
};
