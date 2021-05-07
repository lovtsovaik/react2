/* Core */
import { useMutation } from 'react-query';

/* Instruments */
import { api } from '../api';
import { FormShape } from '../components/forms/PublishTipForm/config';

export const useCreateTip = () => {
    const mutation = useMutation((tip: FormShape) => {
        return api.createTip(tip);
    });

    return mutation;
};
