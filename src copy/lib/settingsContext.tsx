/* Core */
import { createContext, useState, SetStateAction } from 'react';

export const Context = createContext<SettingProviderShape>([false, () => null]);

export const SettingsProvider: React.FC = props => {
    const state = useState(false);

    return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

/* Types */
type SettingProviderShape = [boolean, React.Dispatch<SetStateAction<boolean>>];
