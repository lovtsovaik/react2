/* Core */
import axios from 'axios';
import waait from 'waait';

/* Instruments */
import { TagModel, TipModel } from '../types';
import { FormShape } from '../components/forms/PublishTipForm/config';

export const api = {
    async getTags() {
        const { data: tags } = await axios.get<TagModel[]>(
            `${process.env.REACT_APP_API_URL}/tags`,
        );
        await waait(1000);

        return tags;
    },
    async getTips() {
        const { data: tips } = await axios.get<TipModel[]>(
            `${process.env.REACT_APP_API_URL}/tips`,
        );
        await waait(1000);

        return tips;
    },
    async getTipById(id: string) {
        const { data: tipById } = await axios.get<TipModel>(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );
        await waait(1000);

        return tipById;
    },
    async createTip(tip: FormShape) {
        const { data: newTip } = await axios.post<FormShape>(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
        );

        console.log(newTip);

        await waait(1000);

        return newTip;
    },
};
