/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../../api';
import { TipModel } from '../../types';

export const useTips = () => {
    const [tips, setTips] = useState<TipsState>(null);

    useEffect(() => {
        (async () => {
            const tips = await api.getTips();

            setTips(tips);
        })();
    }, []);

    const result: [TipsState, typeof setTips] = [tips, setTips];

    return result;
};

/* Types */
type TipsState = TipModel[] | null;
