/* Core */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

/* Components */
import { Nav, Layout } from '../components';

export const LoginPage: React.FC = () => {
    const form = useForm<FormShape>({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    return (
        <Layout>
            <Nav />

            <section className="login">
                <form>
                    <h1>Логин</h1>
                    test
                </form>
            </section>
        </Layout>
    );
};

interface FormShape {
    email: string;
    password: string;
}

export const schema: yup.SchemaOf<FormShape> = yup.object().shape({
    email: yup.string().required('*'),
    password: yup.string().required('*'),
});
