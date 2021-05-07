/* Core */
import * as yup from 'yup';
import { lorem, system } from 'faker';

const tooShortMessage = 'минимальная длина — ${min} символов';
const tooLongMessage = 'максимальная длина — ${max} символов';

export const schema: yup.SchemaOf<FormShape> = yup.object().shape({
    title: yup
        .string()
        .min(5, tooShortMessage)
        .max(40, tooLongMessage)
        .required('*'),
    preview: yup
        .string()
        .min(15, tooShortMessage)
        .max(200, tooLongMessage)
        .required('*'),
    body: yup
        .string()
        .min(200, tooShortMessage)
        .max(2500, tooLongMessage)
        .required('*'),
    tagId: yup.string().required('*'),
});

/* Types */
export interface FormShape {
    title: string;
    preview: string;
    body: string;
    tagId: string;
}

/* Helpers */
export const getNewTipPlaceholder = (): FormShape => {
    const version = system.semver();

    return {
        title: `Повторение мать учения! v${version}`,
        preview: `Семь раз отмерь — один раз отрежь v${version}`,
        body: lorem.words(35),
        tagId: '',
    };
};
