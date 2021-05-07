/* Core */
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export const Input: React.FC<InputProps> = props => {
    let input = (
        <input
            placeholder={props.placeholder}
            type={props.type}
            {...props.register}
        />
    );

    if (props.tag === 'textarea') {
        input = (
            <textarea
                placeholder={props.placeholder}
                {...props.register}></textarea>
        );
    }

    if (props.tag === 'select') {
        const optionsJSX = props.options?.map(option => {
            return (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            );
        });

        input = <select {...props.register}>{optionsJSX}</select>;
    }

    return (
        <label>
            <div>
                {props.label}{' '}
                <span className="error-message">{props.error?.message}</span>
            </div>
            {input}
        </label>
    );
};
Input.defaultProps = {
    type: 'text',
    tag: 'input',
};

/* Types */
interface InputProps {
    type?: string;
    tag?: 'input' | 'textarea' | 'select';
    placeholder?: string;
    label: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
    options?: { name: string; value: string }[];
}
